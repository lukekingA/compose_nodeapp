#!/bin/bash

if [ ! -z "$2" ] && [ "$2" = "build" ]
then
    docker-compose build
fi
if [ "$1" = "up" ] || [ "$1" = "" ]
then
    docker-compose up -d
fi

if [ "$1" = "down" ]
then
    docker-compose down
fi

