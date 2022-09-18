# Simple Docker Container 

1. Create simple node/express app. (see index.js)

        npm init -y
        npm install express
        npm run app

2. Stop the app (Ctrl-C) and create Dockerfile (see Dockerfile)

        docker build -t nodeapp .
        docker run --name nodeapp -p 9999:9999 nodeapp

3. To remove

        docker stop nodeapp
        docker rm nodeapp

4. Spin up multiple containers 

        docker run -d -p 8000:9999 nodeapp 
        docker run -d -p 8001:9999 nodeapp
        docker run -d -p 8002:9999 nodeapp

5. User docker-compose for a load balancer. Create docker-compose.yml 

        docker-compose up

6. Test! visit localhost:8080 in your browser and refresh!