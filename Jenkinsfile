pipeline {
  agent any
  stages {
    stage('Start') {
      when {
        expression {
          return currentBuild.result == 'SUCCESS'
        }
      }
      steps {
        // Spawn a new process that executes `npm run start`
        sh 'nohup npm run start &'
      }
    }
  }
}