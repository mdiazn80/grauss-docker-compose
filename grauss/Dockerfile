ARG PYTHON_VERSION

FROM python:${PYTHON_VERSION}

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT ["python3"] 

CMD ["manage.py", "runserver", "0.0.0.0:8000"]