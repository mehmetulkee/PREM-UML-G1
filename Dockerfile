FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV PORT=10000
EXPOSE 10000

CMD ["npm", "start"]
