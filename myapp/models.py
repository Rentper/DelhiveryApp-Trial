# myapp/models.py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    phone = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.user.username

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class UserDetail(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    aadhar_card = models.CharField(max_length=12, unique=True)
    aadhar_photo = models.ImageField(upload_to='aadhar_photos/', blank=True, null=True)
    pan_card = models.CharField(max_length=10, unique=True)
    pan_photo = models.ImageField(upload_to='pan_photos/', blank=True, null=True)
    driving_license_number = models.CharField(max_length=15, blank=True, null=True)
    driving_license_photo = models.ImageField(upload_to='driving_license_photos/', blank=True, null=True)
    primary_address = models.TextField()
    secondary_address = models.TextField(blank=True, null=True)
    landmark = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField()
    status = models.CharField(max_length=20, choices=[
        ('submitted', 'Submitted'),
        ('under_process', 'Under Process'),
        ('pending', 'Pending')
    ], default='submitted')

    def __str__(self):
        return f"{self.user.username} - User Details"

class AccountDetail(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    account_name = models.CharField(max_length=255)
    account_number = models.CharField(max_length=20)
    ifsc_code = models.CharField(max_length=11)
    account_address = models.TextField()

    def __str__(self):
        return f"{self.user.username} - Account Details"

class Location(models.Model):
    address = models.CharField(max_length=255)
    address2 = models.CharField(max_length=255, blank=True, null=True)
    landmark = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=10)

class Customer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, unique=False, blank=True, null=True)
    partner = models.ForeignKey('Partner', on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return self.name
class Partner(models.Model):
    partner_id = models.CharField(max_length=100, unique=True)

class Warehouse(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    landmark = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255)
    
    @property

    def warehouse(self):
        return self.warehouse_log.filter(exit_by= None).first()

    def __str__(self):
        return self.name

class WarehouseLogProduct(models.Model):
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    entry_by = models.ForeignKey(CustomUser, related_name='entry_logs', on_delete=models.SET_NULL, null=True)
    entry_time = models.DateTimeField(auto_now_add=True)
    exit_by = models.ForeignKey(CustomUser, related_name='exit_logs', on_delete=models.SET_NULL, null=True)
    exit_time = models.DateTimeField(null=True, blank=True)
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='warehouse_log', default=1)

    def __str__(self):
        return f"Log for warehouse {self.warehouse} at {self.entry_time}"

class Order(models.Model):
    STATUS_CHOICES = [
        ('created', 'Created'),
        ('confirmed', 'Confirmed'),
        ('out_for_pickup', 'Out for Pickup'),
        ('shipped', 'Shipped'),
        ('out_for_delivery', 'Out for Delivery'),
        ('delivered', 'Delivered'),
    ]
    customer = models.ForeignKey(Customer, related_name='orders',on_delete=models.CASCADE, null=False)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE, default=1)
    assigned_delivery_boy = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='assigned_orders')
    order_date = models.DateTimeField(auto_now_add=True)
    delivery_location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, related_name='delivery_orders')
    pickup_location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, related_name='pickup_orders')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='created')
    
    def __str__(self):
        return f"Order {self.id } for {self.customer.name}"

        
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product_name = models.CharField(max_length=255)
    partner = models.ForeignKey(Partner, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

class ProofOfDelivery(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    delivery_time = models.DateTimeField()
    signature = models.CharField(max_length=255)  # You might want to use a FileField for actual signatures

class OrderEvent(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='events')
    order_time = models.DateTimeField(auto_now_add=True)
    data = models.JSONField()
    message = models.TextField()
    code = models.CharField(max_length=10)

class DeliveryNote(models.Model):
    order = models.ForeignKey(Order, related_name='delivery_notes', on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self):
        return f"Delivery Note for Order {self.order.id}"

class PickupNote(models.Model):
    order = models.ForeignKey(Order, related_name='pickup_notes', on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self):
        return f"Pickup Note for Order {self.order.id}"

class Order_Media_File(models.Model):
    id = models.AutoField(primary_key=True)
    media_file = models.ImageField(upload_to='media_files/', blank=True, null=True)
    name = models.CharField(max_length=255)
    time = models.DateTimeField(auto_now_add=True)
    order = models.ForeignKey(Order, related_name='media_files', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Order_Task(models.Model):
    TASK_TYPE_CHOICES = [
        ('pickup', 'Pickup'),
        ('delivery', 'Delivery'),
    ]

    id = models.AutoField(primary_key=True)
    task_type = models.CharField(max_length=50, choices=TASK_TYPE_CHOICES)
    task_description = models.TextField()
    task_title =models.CharField(max_length=100)
    media_files = models.ManyToManyField(Order_Media_File, related_name='tasks')

    def __str__(self):
        return f'{self.task_type} - {self.task_description}'    