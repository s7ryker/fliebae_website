FROM node:19-alpine3.16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . ./

CMD ["npm", "start"]