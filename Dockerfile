FROM harbor.stageogip.ru/hub/library/node:14 as build

WORKDIR /app
COPY . .

RUN npm install -g @angular/cli
RUN npm i
RUN ng build --optimization=false

FROM harbor.stageogip.ru/hub/library/nginx:1.21.6
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/rga-well /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
