# syntax=docker/dockerfile:1

FROM node:latest
WORKDIR /Desafio_WebAnalysis/Backend
COPY . .

RUN rm -rf node_modules package-lock.json
RUN npm i --omit=dev
RUN npm i express cors @anthropic-ai/sdk dotenv
CMD ["node", "server.js"]
EXPOSE 3000