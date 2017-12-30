node {
  stage 'Building'
  checkout scm
  stage 'Building image'
	sh "sudo docker build -t gtec_ws:1.0 ." 
  // we want to pick up the version from the pom
  // Mark the code build 'stage'....
 if (env.BRANCH_NAME.equals("develop")){
  stage 'Cleaning old build'
  	sh "sudo docker rm -f gtecWS || true"
  stage 'Deployment'
	sh "sudo docker run -d --name gtecWS --link strutsWsDb:strutsWsDb -e NODE_ENV=testing -p 3000:3000 gtec_ws:1.0"
 }else if (env.BRANCH_NAME.equals("master")){
	   stage 'Cleaning old build'
  	sh "sudo docker rm -f gtecWS-prod || true"
  stage 'Deployment'
	sh "sudo docker run -d --name gtecWS-prod --link strutsWsDb:strutsWsDb -e NODE_ENV=production -p 3005:3000 gtec_ws:1.0"
 }
}
