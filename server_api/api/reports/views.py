from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Report
from .serializers import ReportSerializer


@api_view(['GET', 'POST'])
def reports_list(request, format=None):
    """
    List all reports, or create a new one.
    """
    if request.method == 'GET':
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
