# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN npm install --production
EXPOSE 80
ENV PORT=80
CMD ["npm", "start"]
