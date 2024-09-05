# React App for Emital


## Dockerfile
React app with nginx - serves the index.html generated from build

## To run the application
1. npm install
2. npm run dev
   
## GitHub Actions
1.  pipeline-pre-prod.yaml - Build the docker image and push it to docker hub. Then update the AWS ECS service with forced deployment
2.  pipeline-prod.yaml - Build the application and serve it through GitHub pages
