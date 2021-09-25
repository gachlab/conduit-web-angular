
FROM node:lts-alpine 
WORKDIR /home/node/app
COPY package.json package-lock.json angular.json tsconfig* ./
RUN npm i
CMD ["npm", "start"]
