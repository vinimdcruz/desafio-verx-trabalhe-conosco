FROM node:22.13.1-alpine

WORKDIR /app

RUN apk add --no-cache bash

COPY . .

RUN npm install -g pnpm

EXPOSE 3000
