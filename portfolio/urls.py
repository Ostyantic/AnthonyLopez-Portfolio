from django.urls import path
from .views import HomePageView, AboutPageView, ContactPageView, ProjectPageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about', AboutPageView.as_view(), name='about'),
    path('projects', ProjectPageView.as_view(), name='projects'),
    path('contactme', ContactPageView.as_view(), name='contact'),
]