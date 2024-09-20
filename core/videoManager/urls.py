from django.urls import path
from django.conf import settings
from . import views
from .views import CreateCollection,VideoStream, upload_video, CreateVideoGenerationQueueView
from django.conf.urls.static import static

urlpatterns = [
    path('api/create_collection/', CreateCollection.as_view(), name='create-collection'),
    path('api/upload/', VideoStream.as_view(), name='video-upload'),
    path('upload-video/', upload_video, name='upload_video'),
    path('api/video-generation-queue/', CreateVideoGenerationQueueView.as_view(), name='create_video_generation_queue'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)