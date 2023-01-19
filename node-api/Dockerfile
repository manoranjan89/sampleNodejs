FROM node:14-alpine
WORKDIR /app
COPY packge*.json /app/
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node","server.js"]
