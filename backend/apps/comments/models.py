from django.db import models
from apps.accounts.models import User
from apps.blog.models import Article

class Comment(models.Model):
    # contenido del comentario en formato Markdown
    content = models.TextField(null=False, blank=False, help_text="Contenido del comentario en formato Markdown")

    # el comentario padre si el comentario principal tiene respuestas
    father_comment = models.ForeignKey('self', related_name='replies', on_delete=models.CASCADE, null=True, blank=True)

    # el autor del comentario que viene de modelos de usuarios
    author = models.ForeignKey(User, related_name='comments', help_text="Autor del comentario", on_delete=models.SET_NULL, null=True, blank=True)

    # el articulo al que pertenece el comentario
    father_article = models.ForeignKey(Article, related_name='comments', help_text="articulo donde esta el comentario", on_delete=models.CASCADE)

    # el estado del comentario, puede ser 'draft', 'published' o 'editing'
    status = models.CharField(max_length=50, choices=[
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('editing', 'Editing'),
    ], default='draft', help_text="Estado del comentario")

    # la fecha de publicación del comentario
    publication_date = models.DateTimeField(
        null=True,
        blank=True,
        help_text="Fecha de publicación del comentario"
    )

    # representación legible del comentario
    def __str__(self):
        return f"{self.id} author: {self.author} status: {self.status} published: {self.publication_date}"