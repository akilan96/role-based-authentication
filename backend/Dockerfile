FROM node:24
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4500
CMD ["node", "index.js"]