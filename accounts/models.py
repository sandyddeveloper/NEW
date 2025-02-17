from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .manager import UserManager
from rest_framework_simplejwt.tokens import RefreshToken
from core.models import Workspace as WorkspaceModel
# Create your models here.
AUTH_PROVIDERS = {'email': 'email', 'google': 'google','github': 'github'}
class User(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [ 
        ('developer', 'Developer'),
        ('tester', 'Tester'),
    ]
    email = models.EmailField(max_length=225, unique=True, verbose_name=_('Email Address'))
    first_name = models.CharField(max_length=100, verbose_name=_('First Name'))
    last_name = models.CharField(max_length=100, verbose_name=_('Last Name'))
    role = models.CharField(max_length=10, choices=ROLE_CHOICES,null=True, blank=True)
    workspace = models.ForeignKey("core.Workspace",on_delete=models.SET_NULL,null=True,blank=True,related_name="users")
    is_staff = models.BooleanField(default=False, verbose_name=_('Staff Status'))
    is_superuser = models.BooleanField(default=False, verbose_name=_('SuperUser Status'))
    is_verified = models.BooleanField(default=False, verbose_name=_('Verified Status'))
    is_active = models.BooleanField(default=True, verbose_name=_('Active Status'))
    date_joined = models.DateTimeField(auto_now_add=True, verbose_name=_('Date Joined')) 
    last_login = models.DateTimeField(auto_now=True, verbose_name=_('Last_login'))
    auth_provider = models.CharField(max_length=50, default=AUTH_PROVIDERS.get("email"))

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = UserManager()

    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def tokens(self):
        refresh=RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }


class OneTimePassword(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=6, unique=True)

    def __str__(self):
        return f"{self.user.first_name}-passcode"