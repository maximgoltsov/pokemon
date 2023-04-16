FROM node:14

WORKDIR /

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]
