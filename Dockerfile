FROM node:alpine

WORKDIR /usr/src/app
COPY dist .
RUN npm install --only=production

CMD ["npm", "start"]
