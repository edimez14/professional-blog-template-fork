from django.db import models
from apps.accounts.models import User

class Article(models.Model):
    # el titulo no puede ser nulo ni estar en blanco
    title = models.CharField(max_length=200, null=False, blank=False, help_text="Titulo del artículo")
    
    # el slug es unico para cada articulo y no puede ser nulo ni estar en blanco
    slug = models.SlugField(max_length=200, unique=True, help_text="Slug único para la URL del artículo", null=False, blank=False)
    
    # el content no puede ser nulo ni estar en blanco y es en formato markdown
    content = models.TextField(null=False, blank=False, help_text="Contenido del artículo en formato Markdown")
    
    # el author es una clave foranea al modelo User, con related_name para acceder a los articulos del usuario
    author = models.ForeignKey(User, related_name='articles', help_text="Autor del artículo", on_delete=models.SET_NULL, null=True, blank=True)
    
    # el status tiene varias opciones (borrador, publicado, editando) y por defecto es draft
    status = models.CharField(max_length=50, choices=[
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('editing', 'Editing'),
    ], default='draft', help_text="Estado del artículo")
    
    # fecha de creación, publicación y última modificación
    creation_date = models.DateTimeField(auto_now_add=True, help_text="Fecha de creación del artículo")
    # la fecha de publicación se toma automáticamente cuando se publica el artículo
    publication_date = models.DateTimeField( null=True, blank=True, help_text="Fecha de publicación del artículo")
    # la fecha de última modificación se actualiza automáticamente cada vez que se guarda el artículo
    # last_modified_date = models.DateTimeField(auto_now=True, help_text="Fecha de la última modificación del artículo")
    
    # representación legible del artículo
    def __str__(self):
        return f"{self.id} title: {self.title} author: {self.author.username} status: {self.status} created: {self.creation_date} published: {self.publication_date}"