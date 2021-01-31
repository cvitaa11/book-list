FROM node:12.2.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "node", "app.js" ]