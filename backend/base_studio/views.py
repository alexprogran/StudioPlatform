from django.forms import ValidationError
from rest_framework.views import APIView
from rest_framework.decorators import action
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


# class SchedulingViewSet(viewsets.ModelViewSet):
#     queryset = SchedulingModel.objects.all()
#     serializer_class = SchedulingSerializer
#     ordering = ['date']




class SchedulingViewSet(viewsets.ModelViewSet):
    queryset = SchedulingModel.objects.all()
    serializer_class = SchedulingSerializer
    ordering = ['date']

    @action(detail=False, methods=['patch'])
    def update_multiple(self, request):
        data = request.data  # Dados recebidos no formato {1: {confirm: false, canceled: true}, ...}

        if not isinstance(data, dict) or not data:
            return Response({"error": "Dados inválidos ou vazios"}, status=400)

        errors = []
        updated_objects = []

        for scheduling_id, status in data.items():
            try:
                scheduling = SchedulingModel.objects.get(id=int(scheduling_id))
                scheduling.confirm = status.get('confirm', scheduling.confirm)
                scheduling.canceled = status.get('canceled', scheduling.canceled)
                updated_objects.append(scheduling)
            except (SchedulingModel.DoesNotExist, ValueError, ValidationError):
                errors.append(f"ID {scheduling_id} não encontrado ou inválido.")

        if updated_objects:
            SchedulingModel.objects.bulk_update(updated_objects, ['confirm', 'canceled'])

        response_data = {"status": "Atualizações realizadas com sucesso!"}
        if errors:
            response_data["errors"] = errors

        return Response(response_data, status=207 if errors else 200)
