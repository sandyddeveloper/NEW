from django.contrib.auth.models import BaseUserManager
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError


class UserManager(BaseUserManager):
    def email_validator(self, email):
        """Validate email format"""
        try:
            validate_email(email)
        except ValidationError:
            raise ValidationError(_('Enter a valid email address.'))
        
    def create_user(self, email, first_name, last_name, role, password=None, **extra_fields):
        """Create and return a regular user with the given details."""
        if not email:
            raise ValueError(_('The email must be set.'))
        
        email = self.normalize_email(email)
        self.email_validator(email)

        if not first_name:
            raise ValueError(_('The first name must be set.'))
        
        if not last_name:
            raise ValueError(_('The last name must be set.'))
        
        if not role:
            raise ValueError(_('The role must be set.'))

        extra_fields.setdefault('is_active', True)

        user = self.model(
            email=email,
            first_name=first_name,
            last_name=last_name,
            role=role,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password, **extra_fields):
        """Create and return a superuser with given details."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_verified', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        return self.create_user(
            email=email,
            first_name=first_name,
            last_name=last_name,
            role='admin', 
            password=password,
            **extra_fields
        )
