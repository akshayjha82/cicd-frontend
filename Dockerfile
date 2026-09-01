FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist/ecommerce-ui/browser /usr/share/nginx/html

EXPOSE 80