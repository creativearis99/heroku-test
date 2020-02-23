FROM node:alpine

WORKDIR /usr/src/app
COPY dist .
RUN npm install --only=production

#EXPOSE 8080
CMD ["npm", "start"]
