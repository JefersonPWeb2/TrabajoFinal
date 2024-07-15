from django.urls import path
from .views import registro_view, login_view, logout_view, home_view, landing_page_view

urlpatterns = [
    path('registro/', registro_view, name='registro'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('home/', home_view, name='home'),
    path('', landing_page_view, name='landing_page'),
]
