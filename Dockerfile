FROM node:12 AS builder

WORKDIR /usr/app
COPY . .
RUN npm i
RUN npm run build

FROM node:12-alpine

ARG port=8080
ENV PORT=$port

WORKDIR /usr/src/app
COPY --from=builder /usr/app/dist .
RUN npm install --only=production

EXPOSE ${PORT}

CMD ["npm", "start"]
