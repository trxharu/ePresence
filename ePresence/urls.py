"""ePresence URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from django.conf.urls.static import static
from django.conf import settings
from authentication import views as authRoute
from dashboard import views as dashRoute

urlpatterns = [
    path('auth/register', authRoute.signup),
    path('auth/login', authRoute.login),
    path('displayData', dashRoute.displayData),
    path('dashboard', dashRoute.form),
    path('userDetail', dashRoute.userDetail),
    path('media', dashRoute.media)
]

urlpatterns += static(settings.MEDIA_URL , document_root=settings.MEDIA_ROOT)
