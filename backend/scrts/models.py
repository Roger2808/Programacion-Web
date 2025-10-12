from django.db import models
import uuid

class Secret(models.Model):
    key = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.key)
