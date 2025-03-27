from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import FormLoginSerialzers, SchedulingSerializer
from .models import FormLogin, SchedulingModel




class FormLoginAPIView(APIView):
    def post(self, request):
        serializer = FormLoginSerialzers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(status.HTTP_201_CREATED)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class SchedulingAPIView(APIView):
   
#    def post(self, request):
#         serializer = SchedulingSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED )
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SchedulingViewSet(viewsets.ModelViewSet):
    queryset = SchedulingModel.objects.all()
    serializer_class = SchedulingSerializer