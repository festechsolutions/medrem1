from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Meddata


def home(request):
    return render(request,'home.html')

def signup(request):
    if request.method=="POST":
        if request.POST['password1']==request.POST['password2']:
            try:
                user=User.objects.get(username=request.POST['username'])
                return render(request,'register.html',{'error':'Username has already been taken'})
            except User.DoesNotExist:
                user=User.objects.create_user(username=request.POST['username'],password=request.POST['password1'])
                return redirect('login')
        else:
            return render(request,'register.html',{'error':'password does not matched'})
    else:
        return render(request,'register.html')


def login(request):
    if request.method == 'POST':
        user = auth.authenticate(username=request.POST['username'],password=request.POST['password'])
        if user is not None:
            auth.login(request, user)
            return redirect(home)
        else:
            return render(request, 'register.html',{'error':'Please fill the details correctly'})
    else:
        return render(request, 'register.html')





def addmed(request):
    if request.method=="POST":
        # m1=request.POST['medname']
        # m2=request.POST['duration']
        # m3=request.POST['start_time']
        # m4=request.POST['ts']
        # m5=request.POST['cdd']
        # m6=request.POST['times']
        m1=request.POST['yourName']
        m2=request.POST['medname']
        m3=request.POST['noOfMed']
        m4=request.POST['medType']
        m5=request.POST['medCount']
        m6=request.POST['dataForTemp']
    
        new=Meddata(your_Name=m1,med_Type=m2,num_of_med=m3,choi=m4,m_count=m5,m_time=m6,user=request.user)
        # new=Meddata(Med_Name=m1,Med_Dur=m2,Mrg_med=m3,category=m4,course=m5,no_of_tabs=m6,user=request.user)
        new.save()
        return redirect('medicinelist')
    else:
        return render(request,'addmedicine.html')


    


def medlist(request):
    med_user=request.user
    med=Meddata.objects.filter(user=med_user)
    return render(request,'medicinelist.html',{'med':med})
def profile(request):
    return render(request,'profile.html',{'profile':profile})


def logout(request):
     
        auth.logout(request)
        return redirect(home)



   
    
    
        
    













          
          
          
     
