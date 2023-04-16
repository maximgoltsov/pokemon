FROM node:14

WORKDIR /

COPY . .

RUN yarn install --pure-lockfile && yarn build && rm -rf node_modules

RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]
