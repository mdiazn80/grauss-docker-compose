#!/bin/bash

docker compose down
# docker rmi $(docker images -qa)
docker volume prune
docker builder prune

rm -rf ./data/alertmanager/*
rm -rf ./data/prometheus/*
rm -rf ./data/grafana/*
rm -rf ./data/alertmanager/.*
rm -rf ./data/prometheus/.*
rm -rf ./data/grafana/.*

touch ./data/alertmanager/.gitkeep
touch ./data/prometheus/.gitkeep
touch ./data/grafana/.gitkeep

rm -rf ./grauss/db.sqlite3
