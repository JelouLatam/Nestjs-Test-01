FROM node:12-alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm uninstall bcrypt
RUN npm install bcrypt
CMD ["npm", "run", "start:dev"]