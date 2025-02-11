from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import CustomUser , User, UserDetail, AccountDetail, Location, Customer, Partner, Order, OrderItem, ProofOfDelivery, OrderEvent,  Warehouse, WarehouseLogProduct, DeliveryNote, PickupNote, Order_Media_File, Order_Task
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
import logging

logger = logging.getLogger(__name__)

class CustomRegisterSerializer(RegisterSerializer):
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    phone_number = serializers.CharField(required=True)

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if CustomUser.objects.filter(email=email).exists():
            raise serializers.ValidationError("A user is already registered with this email address.")
        return email

    def get_cleaned_data(self):
        return {
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'phone_number': self.validated_data.get('phone_number', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
        }
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.email = self.cleaned_data.get('email')
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.phone_number = self.cleaned_data.get('phone_number')
        user.set_password(self.cleaned_data.get('password1'))
        user.save()
        setup_user_email(request, user, [])
        return user    

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class AssignedDeliveryBoySerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'phone_number']

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'name', 'email', 'address', 'phone', 'partner']

class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderEvent
        fields = '__all__'
        depth =1 

class ProofOfDeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProofOfDelivery
        fields = '__all__'       

class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = ['id','name','address','city']

class OrderMediaFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_Media_File
        fields = '__all__'
        extra_kwargs={
            'media_file':{'required': False}
        }

class OrderTaskSerializer(serializers.ModelSerializer):
    media_files = OrderMediaFileSerializer(many=True, read_only=True)

    class Meta:
        model = Order_Task
        fields = '__all__'

class WarehouseLogProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = WarehouseLogProduct
        fields = '__all__'  # Ensure 'warehouse' is included here
        extra_kwargs = {
            'warehouse': {'required': True}  # Ensure it's required
        }

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetail
        fields = ['user', 'aadhar_card', 'aadhar_photo', 'pan_card', 'pan_photo', 'driving_license_number','driving_license_photo','date_of_birth','primary_address', 'secondary_address', 'status']
        extra_kwargs = {
            'aadhar_photo': {'required': False},
            'pan_photo': {'required': False},
            'driving_license_photo': {'required': False},
            'status': {'read_only': True},
        }

class AccountDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountDetail
        fields = ['user', 'account_name', 'account_number', 'ifsc_code', 'account_address']

class DeliveryNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryNote
        fields = '__all__'

class PickupNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PickupNote
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    assigned_delivery_boy = AssignedDeliveryBoySerializer(read_only=True)
    customer = CustomerSerializer(read_only=True)
    delivery_location = LocationSerializer(read_only=True)
    pickup_location = LocationSerializer(read_only=True)
    events = OrderEventSerializer(many=True, read_only=True)
    items = OrderItemSerializer(many=True, read_only=True)
    delivery_notes = DeliveryNoteSerializer(many=True, read_only=True)
    pickup_notes = PickupNoteSerializer(many=True, read_only=True)
    warehouse = WarehouseSerializer(read_only=True)
    
    class Meta:
        model = Order
        fields = [
            'id', 'customer', 'assigned_delivery_boy', 'order_date', 'warehouse',
            'delivery_location', 'pickup_location', 'status', 'items', 'events',
            'delivery_notes', 'pickup_notes'
        ]
        read_only_fields = ['id', 'order_date', 'events', 'items',
            'delivery_notes', 'pickup_notes']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        logger.debug(f"OrderSerializer representation: {representation}")
        return representation

