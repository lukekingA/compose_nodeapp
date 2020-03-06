#!/bin/bash

if [ ! -z "$2" ] && [ "$2" = "build" ]
then
    docker-compose build
fi
if [ "$1" = "up" ] || [ "$1" = "" ]
then
    docker-compose up -d
    sleep 5s
    docker exec -i compose_nodeapp_db_1 sh -c "psql -Upostgres -dwebapp -1 -f schema.sql"
fi

if [ "$1" = "down" ]
then
    docker-compose down
fi

