docker run -p 80:80 --name some-other-nginx -v $(pwd):/usr/share/nginx/html:ro -d nginx
