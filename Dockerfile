FROM node:21.6-bookworm-slim
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm","run","start"]
EXPOSE 3000