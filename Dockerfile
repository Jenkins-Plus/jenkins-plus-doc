FROM nginx:latest
#设置时区
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo 'Asia/Shanghai' >/etc/timezone \
ADD conf/nginx.conf /etc/nginx/nginx.conf
ADD conf/app.conf /etc/nginx/conf.d/default.conf
ADD conf/gzip.conf /etc/nginx/conf.d/gzip.conf

RUN mkdir /app
WORKDIR /app
ADD docs/.vuepress/dist/ /app

CMD ["nginx", "-g", "daemon off;"]
