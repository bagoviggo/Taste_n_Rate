from django.test import TestCase
from django.contrib.auth.models import User, Group
from .serializers import UserSerializer, GroupSerializer
from rest_framework.test import APIRequestFactory, force_authenticate


class SerializerTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        
        self.group = Group.objects.create(name='Test Group')
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpassword')
        self.user.groups.add(self.group)
        

    def test_user_serializer(self):
        request = self.factory.get('/users/')     # Setup the request context
        force_authenticate(request, user=self.user)
        
        serializer = UserSerializer(self.user, context={'request': request})
        data = serializer.data
        self.assertEqual(data['username'], 'testuser')
        self.assertEqual(data['email'], 'test@example.com')
        self.assertEqual(len(data['groups']), 1)
        self.assertEqual(data['groups'][0], 'http://testserver/groups/1/')

    def test_group_serializer(self):
        request = self.factory.get('/groups/')     # Setup the request context
        force_authenticate(request, user=self.user)
        
        serializer = GroupSerializer(self.group, context={'request': request})
        data = serializer.data
        self.assertEqual(data['name'], 'Test Group')