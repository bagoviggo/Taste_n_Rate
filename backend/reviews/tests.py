from django.test import TestCase
from django.contrib.auth.models import User, Group
from .serializers import UserSerializer, GroupSerializer

class SerializerTest(TestCase):
    def setUp(self):
        self.group = Group.objects.create(name='Test Group')
        self.user = User.objects.create_user(username='testuser', email='test@example.com', password='testpassword')
        self.user.groups.add(self.group)

    def test_user_serializer(self):
        serializer = UserSerializer(self.user)
        data = serializer.data
        self.assertEqual(data['username'], 'testuser')
        self.assertEqual(data['email'], 'test@example.com')
        self.assertEqual(len(data['groups']), 1)
        self.assertEqual(data['groups'][0], 'Test Group')

    def test_group_serializer(self):
        serializer = GroupSerializer(self.group)
        data = serializer.data
        self.assertEqual(data['name'], 'Test Group')