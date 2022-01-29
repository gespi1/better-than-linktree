FROM node:16.13-alpine

COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "run", "start" ]
