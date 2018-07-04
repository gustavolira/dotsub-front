#How to run

##Build image

`docker build -t dotsub-front .`

##Run image (make sure port 80 is not in use)
`docker run -p 80:80 dotsub-front`

Open your browser in http://localhost

Link to upload page: http://localhost/upload
