from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.db.models import Q

User = get_user_model()

class CustomBackend:
    def authenticate(self, request, **credentials):
        username = credentials.get('username')
        password = credentials.get('password')

        try:
            user = User.objects.get(Q(username=username) | Q(email=username) | Q(profile__phone=username))
        except User.DoesNotExist:
            return None

        if user.check_password(password):
            return user
        return None
        
class CustomAuthBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(Q(username=username) | Q(email=username) | Q(profile__phone=username))
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None
