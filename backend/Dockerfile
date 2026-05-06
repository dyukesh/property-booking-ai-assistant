FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++ curl

COPY package*.json ./

RUN npm ci --only=production

COPY src ./src
COPY tsconfig.json ./
COPY migrations ./migrations

RUN npm run build

EXPOSE 5000

HEALTHCHECK --interval=10s --timeout=5s --retries=5 \
  CMD curl -f http://localhost:5000/api/health || exit 1

CMD ["npm", "start"]
