node {
  stage 'Building'
  checkout scm
  stage 'Building image'
	sh "sudo docker build -t gtec_ws:1.0 ." 
  // we want to pick up the version from the pom
  // Mark the code build 'stage'....
  stage 'Cleaning old build'
  	sh "sudo docker rm -f gtec_ws || true"
  stage 'Deployment'
	sh "sudo docker run --name gtecWS -e NODE_ENV=testing -p 3000:3000 gtec_ws:1.0"
}
