FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 3004

CMD ["npm", "start"]