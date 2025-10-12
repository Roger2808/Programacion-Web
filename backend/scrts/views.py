from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SecretSerializer
import redis, uuid

r = redis.Redis(host='redis', port=6379, db=1)

class HideSecret(APIView):
    def post(self, request):
        serializer = SecretSerializer(data=request.data)
        if serializer.is_valid():
            key = str(uuid.uuid4())
            message = serializer.validated_data['message']
            r.set(key, message)
            return Response({'key': key}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RevealSecret(APIView):
    def post(self, request):
        key = request.data.get('key')
        message = r.get(key)
        if message:
            r.delete(key)
            return Response({'message': message.decode()}, status=status.HTTP_200_OK)
        return Response({'error': 'Key not found or already used'}, status=status.HTTP_404_NOT_FOUND)
