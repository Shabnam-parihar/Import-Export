from django.shortcuts import render


def home(request):
    
    
    return render(request, "home.html")

def about(request):
    
    
    return render(request, "about-us.html")
def gst(request):
    
    
    return render(request, "gst.html")
