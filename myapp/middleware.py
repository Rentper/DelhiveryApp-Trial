# myapp/middleware.py
from django.utils.deprecation import MiddlewareMixin

class CustomCSRFMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.method == 'POST' and 'application/json' in request.META.get('CONTENT_TYPE', ''):
            request.csrf_processing_done = True
