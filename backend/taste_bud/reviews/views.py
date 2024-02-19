from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_frmework import permissions
from reviews.serializers import UserSerializer, GroupSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

