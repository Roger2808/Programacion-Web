from rest_framework import serializers

class SecretSerializer(serializers.Serializer):
    key = serializers.CharField(read_only=True)
    message = serializers.CharField(write_only=True)
