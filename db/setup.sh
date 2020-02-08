#!/bin/bash

createdb webapp
psql -d webapp -a -f setup.sql
