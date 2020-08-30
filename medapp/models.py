from django.db import models
from django.contrib.auth.models import User



medtype = (('tablet', 'tablet'),
              ('syrup', 'syrup'),
             )
coursedur = ((1, 'Daily'),
              (2, 'Alternate days'),
              (3, 'Weekly Once'),
              (4, 'Weekly Twice'),
             )

class Meddata(models.Model):
    
    Med_Name=models.CharField(max_length=200)
    Med_Dur=models.CharField(max_length=200)
    Mrg_med=models.DateTimeField(auto_now_add=False, auto_now=False)
    category = models.CharField(max_length=200,choices=medtype, default='')
    course = models.CharField(max_length=200,choices=coursedur, default='')
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    # def timereturn(self):
    # 	return self.Mrg_med.strftime("%H %m")
    
