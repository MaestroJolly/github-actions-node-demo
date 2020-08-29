FROM node:14-apline
WORKDIR  /usr/src
COPY packages*json app.js ./
RUN npm install
EXPOSE 5000
CMD ["node", "app.js"]
