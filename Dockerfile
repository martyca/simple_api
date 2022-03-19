FROM node:17-alpine
WORKDIR /site
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]