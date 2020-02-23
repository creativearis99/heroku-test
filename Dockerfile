FROM node:12 AS builder

#ARG distFolder=dist
#ARG modulePath=.
#ENV MODULE_PATH=$modulePath
WORKDIR /app
ARG port=8080
ENV PORT=$port
COPY . .
RUN npm i
RUN npm run build

FROM node:12-alpine

ARG port=8080
ENV PORT=$port

#ARG distFolder=dist
#ARG modulePath=.
#ENV DIST_FOLDER=$distFolder
#ENV MODULE_PATH=$modulePath
WORKDIR /usr/src/app
COPY --from=builder /app/dist .
RUN npm install --only=production

EXPOSE ${PORT}

CMD ["npm", "start"]
