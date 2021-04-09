FROM node:14.15.4 as build


# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH 

COPY package.json /app/package.json

RUN npm install

COPY . ./


# RUN npm run build
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/public /usr/share/nginx/html
# nginx conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]