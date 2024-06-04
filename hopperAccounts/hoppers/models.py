from django.db import models

class AddHistory(models.Model):
    item_name = models.CharField(max_length=255)
    amount = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    add_time = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.item_name

class RemovalHistory(models.Model):
    item_name = models.CharField(max_length=255)
    amount = models.IntegerField()
    removal_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item_name

