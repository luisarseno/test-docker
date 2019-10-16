FROM node:10
WORKDIR /usr/app
RUN yarn
CMD ["yarn", "dev"]
EXPOSE 3000