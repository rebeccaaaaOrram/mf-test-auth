# Declare the base image
FROM node:lts-alpine3.14

WORKDIR /app
RUN rm -rf node_modules package-lock.json
# Setup a path for using local npm packages
RUN mkdir -p /opt/node_modules

COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm install

RUN npm ci

COPY . /app

RUN npm cache clean --force
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "preview"]