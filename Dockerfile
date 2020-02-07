FROM node:13.7.0-alpine
WORKDIR /home/node/
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]