# grauss

## Intro

### Clean

```sh
./clean.sh
```

### Develop

```sh
virtualenv venv
source ./venv/bin/activate
pip install --upgrade pip
pip install -r grauss/requirements.txt
```

```sh
python grauss/manage.py migrate
python grauss/manage.py createsuperuser
python grauss/manage.py runserver
```

 docker compose up -d mongodb postgres-grauss

### Production

```sh
docker compose up -d --force-recreate --build 
```

```sh
docker compose down 
```

## Referencias

* https://github.com/raffis/mongodb-query-exporter