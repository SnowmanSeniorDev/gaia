FROM node:16.17-alpine

WORKDIR /reader

COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src

RUN npm install && \
    npm run build && \
    npm prune --production

CMD ["npm", "run", "start"]
