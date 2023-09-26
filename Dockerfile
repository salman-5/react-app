FROM node:20-alpine3.17 as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build 

EXPOSE 5173

FROM nginx
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html/

