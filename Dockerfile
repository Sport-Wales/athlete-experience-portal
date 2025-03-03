# Dockerfile

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm ci
RUN npm run build

EXPOSE $PORT

CMD ["npm", "start"]