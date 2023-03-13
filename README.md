#Build Docker Image:
docker build -t fliebaeonline:dev .

#Run application on container
docker run -it -p 3000:3000 fliebaeonline:dev