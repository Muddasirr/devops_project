# Stage 1: Install deps
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Copy and run
COPY . .
EXPOSE 80
CMD ["npm", "run", "dev"]
