FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache bash

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]
