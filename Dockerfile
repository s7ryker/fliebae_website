FROM nginx:latest

#Copy SSL certificate
COPY /etc/ssl/private/privkey.pem /etc/ssl/
COPY /etc/ssl/private/cert.pem /etc/ssl/

#Remove default nginx configuration
RUN rm /etc/nginx/nginx.conf
#Add new nginx configuration
COPY nginx-tcp.conf /etc/nginx

EXPOSE 443

CMD [ "nginx", "-g", "daemon off;" ]