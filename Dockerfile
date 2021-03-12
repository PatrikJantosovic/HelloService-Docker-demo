FROM node:14

WORKDIR /usr/src/node-server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888

CMD ["node", "index.js"]
