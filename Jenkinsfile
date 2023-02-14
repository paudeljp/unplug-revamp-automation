pipeline {
  agent {
    label 'node-5.16'
  }

  tools {
    nodejs "nodejs-16"
  }
  environment {
    BUILD_IDS = "${env.BUILD_ID}"
  }
  stages {
    stage("Start") {
      steps {
        echo "Test from Electron  Browser start. Build id: $BUILD_IDS"
        sh 'node --version'
        sh 'npm ci'
        sh 'npm run cy:verify'
        sh 'npm run pretest'
      }

    }
    stage("Parallel  Testing") {
      // parallel execution of test happens in this stage
      parallel {
        stage("CI Machine #1") {
          steps {

            sh 'npm run cy:parallel'

          }
        }
        stage("CI Machine #2") {
          steps {

            sh 'npm run cy:parallel'
          }
        }
        stage("CI Machine #3") {
          steps {

            sh 'npm run cy:parallel'
          }
        }
        stage("CI Machine #4") {
          steps {

            sh 'npm run cy:parallel'
          }
        }
        stage("CI Machine #5") {
          steps {

            sh 'npm run cy:parallel'
          }
        }


      }
    }


  }
  post {
    always {
      sh 'npm run posttest'
      publishHTML(target: [allowMissing: false,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'cypress/reports/mochareports/',
        reportFiles: 'report.html',
        reportName: 'HTML Report',
        reportTitles: 'Cypress Report'
      ])
    }
  }
}