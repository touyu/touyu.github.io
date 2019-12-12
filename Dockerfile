FROM node:12.11.1

WORKDIR /app

RUN apt-get update

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install
