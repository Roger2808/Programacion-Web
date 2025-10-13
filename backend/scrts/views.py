from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SecretSerializer
from .models import Secret
import redis
import os


r = redis.Redis(host='redis', port=6379, db=1)

class HideSecret(APIView):
    def post(self, request):
        serializer = SecretSerializer(data=request.data)
        if serializer.is_valid():
            message = serializer.validated_data['message']
            secret = Secret.objects.create(message=message)
            r.set(str(secret.key), message)

            frontend_url = os.getenv("FRONTEND_URL", "http://localhost:3000")
            link = f"{frontend_url}/reveal/{secret.key}"

            return Response({'key': str(secret.key),'link': link}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RevealSecret(APIView):
    def get(self, request, key):
        message = r.get(str(key))
        if message:
            r.delete(str(key))
            Secret.objects.filter(key=key).delete()
            return Response({'message': message.decode()}, status=status.HTTP_200_OK)
        return Response({'error': 'Key not found or already used'}, status=status.HTTP_404_NOT_FOUND)
