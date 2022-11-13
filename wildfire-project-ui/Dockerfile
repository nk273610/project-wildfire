FROM node:18-alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install -g http-server

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist", "-P http://api:5000", "-R /api/" ]