FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache bash

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it

RUN pnpm run build

EXPOSE 3000

CMD ["sh", "-c", "wait-for-it postgres:5432 -- pnpm run db:migrate && node dist/main.js"]
