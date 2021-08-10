pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'echo \'hello world\''
      }
    }

    stage('step2') {
      steps {
        sh 'echo "step2"'
      }
    }

    stage('step3') {
      steps {
        echo 'step3'
      }
    }

    stage('step4') {
      steps {
        sh 'echo "step4"'
      }
    }

  }
}