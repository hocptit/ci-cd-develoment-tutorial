FROM node:16 as depend
LABEL app=backend
WORKDIR /usr/src/build/app

COPY package*.json ./
RUN npm install
RUN ls
COPY index.js ./

FROM node:16-alpine as runtime
WORKDIR /usr/src/app
COPY --from=depend /usr/src/build/app/node_modules /usr/src/app
COPY . .
EXPOSE 3001
CMD [ "node", "index.js" ]



