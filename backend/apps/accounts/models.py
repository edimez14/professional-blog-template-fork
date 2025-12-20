from django.contrib.auth.models import AbstractUser
from django.db import models

# unique email and username for each user (unique es para que no se repitan)
class User(AbstractUser):
    # el es unico porque se usara para el login
    email = models.EmailField(max_length=200, unique=True)
    
    username = models.CharField(max_length=150)
    
    # es opcional que el usuario ponga avatar
    # es para que el usuario pueda personalizar su perfil
    # se almacena en la carpeta media/avatars/
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    
    # roles es para definir si el usuario es usuario normal, admin, o moderador.
    # no son permisos, solo roles para diferenciar tipos de usuarios
    # con choices se definen las opciones validas para el campo
    role = models.CharField(max_length=50, choices=[
        ('user', 'User'),
        ('admin', 'Admin'),
        ('moderator', 'Moderator'),
    ], default='user')
    
    # is_active es para definir si el usuario esta activo (true) o bloqueado (false)
    # el usuario no se borra para mantener la integridad de los datos
    is_active = models.BooleanField(default=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    # representación legible del usuario
    def __str__(self):
        return f"{self.id} user: {self.username} email: {self.email}"
    
