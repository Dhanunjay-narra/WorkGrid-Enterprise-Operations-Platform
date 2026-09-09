FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY apps/web/ ./apps/web/
RUN npm install
CMD ["npm", "run", "dev", "--workspace=@nexora/web"]
