FROM node:20.14.0-alpine

WORKDIR /app

COPY src src
COPY package.json .
COPY package-lock.json .

RUN npm install

CMD ["npm", "start"]