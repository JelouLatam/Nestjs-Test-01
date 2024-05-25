FROM node:20.13.1

# Define de the working directory
WORKDIR /usr/src/to_do_list

# Install app dependencies
COPY package.json ./

RUN npm install

# Set deploy enviroment

#ENV NODE_ENV production
ENV NODE_ENV dev

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000
#EXPOSE 80

# ENTRYPOINT [ "nest" ]

CMD ["npm", "run", "start:prod"]