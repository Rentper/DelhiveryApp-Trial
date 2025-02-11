from rest_framework import status, permissions, generics, viewsets
from .serializers import CustomRegisterSerializer , UserDetailsSerializer,AccountDetailSerializer,AssignedDeliveryBoySerializer, LocationSerializer, CustomerSerializer, PartnerSerializer, OrderSerializer, OrderItemSerializer, ProofOfDeliverySerializer,  WarehouseSerializer, WarehouseLogProductSerializer
from .models import Profile, UserDetail, Location, Customer, Partner, Order, OrderItem, ProofOfDelivery,Warehouse, WarehouseLogProduct, CustomUser, DeliveryNote, PickupNote, AccountDetail
from allauth.account.views import ConfirmEmailView
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from .serializers import (
    CustomRegisterSerializer, UserDetailsSerializer, AssignedDeliveryBoySerializer,
    LocationSerializer, CustomerSerializer, PartnerSerializer, OrderSerializer,OrderMediaFileSerializer, OrderTaskSerializer,
    OrderItemSerializer, ProofOfDeliverySerializer, WarehouseSerializer,
    WarehouseLogProductSerializer,AccountDetailSerializer
)
from .models import (
    Profile, UserDetail, Location, Customer, Partner, Order, OrderItem, AccountDetail,
    ProofOfDelivery, Warehouse, WarehouseLogProduct, CustomUser, OrderEvent, Order_Media_File, Order_Task
)

import random

import logging

logger=logging.getLogger(__name__)

class CustomConfirmEmailView(ConfirmEmailView):
    template_name = "account/email_confirm.html"
    
    def get_template_names(self):
        # Print debug statement to confirm the method is called
        logger.debug("get_template_names called")
        return [self.template_name]

    def get(self, *args, **kwargs):
        try:
            response = super(CustomConfirmEmailView, self).get(*args, **kwargs)
            logger.debug("Email confirmation Successful")
            return response
        except Exception as e:
            logger.error(f"Error:{str(e)}")
            return HttpResponse(f"Error: {str(e)}")

class CustomRegisterView(generics.CreateAPIView):
    serializer_class = CustomRegisterSerializer

@method_decorator(csrf_exempt, name='dispatch')
class UserDetailsCreate(generics.CreateAPIView):
    queryset = UserDetail.objects.all()
    serializer_class = UserDetailsSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def create(self, request, *args, **kwargs):
        #logger.info("CSRF exemption applied")
        data = request.data.copy()
        data['user'] = request.user.id
        data['status'] = 'submitted'
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({"message": "User details added successfully.", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# View for AccountDetail
@method_decorator(csrf_exempt, name='dispatch')
class AccountDetailsCreate(generics.CreateAPIView):
    queryset = AccountDetail.objects.all()
    serializer_class = AccountDetailSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({"message": "Account details added successfully.", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class OrderMediaFileViewSet(viewsets.ModelViewSet):
    queryset = Order_Media_File.objects.all()
    serializer_class = OrderMediaFileSerializer

class OrderTaskViewSet(viewsets.ModelViewSet):
    queryset = Order_Task.objects.all()
    serializer_class = OrderTaskSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class PartnerViewSet(viewsets.ModelViewSet):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class ProofOfDeliveryViewSet(viewsets.ModelViewSet):
    queryset = ProofOfDelivery.objects.all()
    serializer_class = ProofOfDeliverySerializer

class WarehouseViewSet(viewsets.ModelViewSet):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer
    permission_classes = [IsAuthenticated]

class WarehouseLogProductViewSet(viewsets.ModelViewSet):
    queryset = WarehouseLogProduct.objects.all()
    serializer_class = WarehouseLogProductSerializer
    #permission_classes = [IsAuthenticated]
    
    def create(self, request, *args, **kwargs):
        logger.info(f"Request data: {request.data}")
        response = super().create(request, *args, **kwargs)
        logger.info(f"Response data:{response.data}")
        return response

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        customer_id = self.request.data.get('customer')
        assigned_delivery_boy_id = self.request.data.get('assigned_delivery_boy')
        delivery_location_id = self.request.data.get('delivery_location')
        pickup_location_id = self.request.data.get('pickup_location')
        warehouse_id = self.request.data.get('warehouse')
        
        if not customer_id:
            raise ValidationError('Customer ID is required.')
        if not assigned_delivery_boy_id:
            raise ValidationError('Assigned delivery boy ID is required.')
        if not delivery_location_id:
            raise ValidationError('Delivery location ID is required.')
        if not pickup_location_id:
            raise ValidationError('Pickup location ID is required.')
        if not warehouse_id:
            raise ValidationError('Warehouse ID is required.')

        try:
            customer = Customer.objects.get(id=customer_id)
        except Customer.DoesNotExist:
            raise ValidationError('Customer with provided ID does not exist.')

        try:
            assigned_delivery_boy = CustomUser.objects.get(id=assigned_delivery_boy_id)
        except CustomUser.DoesNotExist:
            raise ValidationError('Assigned delivery boy with provided ID does not exist.')

        try:
            delivery_location = Location.objects.get(id=delivery_location_id)
        except Location.DoesNotExist:
            raise ValidationError('Delivery location with provided ID does not exist.')

        try:
            pickup_location = Location.objects.get(id=pickup_location_id)
        except Location.DoesNotExist:
            raise ValidationError('Pickup location with provided ID does not exist.')

        try:
            warehouse = Warehouse.objects.get(id=warehouse_id)
        except Warehouse.DoesNotExist:
            raise ValidationError('Warehouse with provided ID does not exist.')

        order = serializer.save(
            customer=customer,
            assigned_delivery_boy=assigned_delivery_boy,
            delivery_location=delivery_location,
            pickup_location=pickup_location,
            warehouse=warehouse
        )
        # Handle DeliveryNote creation
        delivery_notes = self.request.data.get('delivery_notes', [])
        if isinstance(delivery_notes, list):
            for note in delivery_notes:
                DeliveryNote.objects.create(
                    order=order,
                    message=note
                )
        else:
            raise ValueError("Expected 'delivery_notes' to be a list.")

        # Handle PickupNote creation
        pickup_notes = self.request.data.get('pickup_notes', [])
        if isinstance(pickup_notes, list):
            for note in pickup_notes:
                PickupNote.objects.create(
                    order=order,
                    message=note
                )
        else:
            raise ValueError("Expected 'pickup_notes' to be a list.")
            
        # Creating an initial order event
        OrderEvent.objects.create(
            order=order,
            data={'status': order.status},
            message=f"Order {order.status}",
            code="status_upd"
        )

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
