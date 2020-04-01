#FROM node:11.15.0-alpine as build-step
#WORKDIR /app
#COPY package.json ./
#RUN npm install
#COPY . .
#RUN npm run build

#FROM nginx:1.16.0-alpine as prod-stage
#COPY --from=build-step /app/dist/ngApp /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

#################

# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:11.15.0-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration
#RUN npm run build -- --output-path=./dist/ngApp --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#COPY --from=build-stage /app/dist/ngApp/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
