# FROM node:alpine
# COPY . /app
# WORKDIR /app
# CMD node server.js


FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "run", "start"]
