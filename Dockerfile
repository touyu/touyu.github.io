FROM node:12.11.1

WORKDIR /app

RUN apt-get update && \
    apt-get install git && \
    yarn global add @vue/cli
    