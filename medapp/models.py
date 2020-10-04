from django.db import models
from django.contrib.auth.models import User



medtype = (('Tablet', 'Tablet'),
              ('Syrup', 'Syrup'),
              ('Injection','Injection'),
             )
temper = (('PM', 'PM'),
              ('TM', 'TM'),
             )
xyz = ((1, '1'),
              (2, '2'),
              (3, '3')
              
             )

class Meddata(models.Model):
    
    # Med_Name=models.CharField(max_length=200)
    # Med_Dur=models.CharField(max_length=200)
    # Mrg_med=models.DateTimeField(auto_now_add=False, auto_now=False)
    # category = models.CharField(max_length=200,choices=medtype, default='')
    # course = models.CharField(max_length=200,choices=coursedur, default='')
    # no_of_tabs = models.CharField(max_length=20,choices=xyz,default='')
    

    your_Name = models.CharField(max_length=100,default="")
    
    med_Type = models.CharField(max_length=100,choices=medtype,default="")
    num_of_med=models.CharField(max_length=100,default="")
    choi=models.CharField(max_length=100,choices=temper,default="")
    m_count=models.CharField(max_length=100,choices=xyz,default="")
    m_time=models.DateField(auto_now_add=False, auto_now=False)
    

    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    # def timereturn(self):
    # 	return self.Mrg_med.strftime("%H %m")
    
