from django.db import models

# Create your models here.

#model properties todo
class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField=False
    #completed - task status

    def _str_(self):
        return self.title
    