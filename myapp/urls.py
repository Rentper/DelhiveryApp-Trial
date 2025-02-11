# myapp/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from myapp.serializers import CustomRegisterSerializer
from dj_rest_auth.registration.views import RegisterView
from .views import CustomConfirmEmailView, UserDetailsCreate,AccountDetailsCreate, LocationViewSet, CustomerViewSet, PartnerViewSet,OrderViewSet, OrderItemViewSet, OrderMediaFileViewSet, OrderTaskViewSet ,ProofOfDeliveryViewSet, WarehouseViewSet, WarehouseLogProductViewSet #import the custom view

router = DefaultRouter()
router.register(r'locations', LocationViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'partners', PartnerViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)
router.register(r'proof-of-delivery', ProofOfDeliveryViewSet)
router.register(r'warehouses', WarehouseViewSet)
router.register(r'warehouse-log-products', WarehouseLogProductViewSet)
router.register(r'media-files', OrderMediaFileViewSet)
router.register(r'tasks', OrderTaskViewSet)

urlpatterns = [
    path('auth/registration/', RegisterView.as_view(serializer_class=CustomRegisterSerializer), name='custom_register'),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/account-confirm-email/<key>/', CustomConfirmEmailView.as_view(), name="account_confirm_email"),  # Add the custom email confirmation URL
    path('user-details/', UserDetailsCreate.as_view(), name='user-details'),
    path('accountdetails/' , AccountDetailsCreate.as_view(), name='accountdetails'),
    path('', include(router.urls)),
]
