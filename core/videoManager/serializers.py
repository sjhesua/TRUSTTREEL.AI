# serializers.py
from rest_framework import serializers
from .models import Video, VideoGenerationQueue, VideoGenerationQueueItem

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'title', 'video_file', 'uploaded_at']

class VideoGenerationQueueItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoGenerationQueueItem
        fields = ['id', 'text', 'created_at']

class VideoGenerationQueueSerializer(serializers.ModelSerializer):
    items = VideoGenerationQueueItemSerializer(many=True, read_only=True)

    class Meta:
        model = VideoGenerationQueue
        fields = ['id', 'created_at', 'items']