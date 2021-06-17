pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'node'){
                    echo 'Building..'
                    sh "npm install"
                }
            }
        }
        stage('Deploy') {
            steps {
                nodejs(nodeJSInstallationName: 'node'){
                    echo 'Deploying....'
                    sh "./scripts/startApp.sh"
                }
            }
        }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'node'){
                    echo 'Testing..'
                    sh "npm run test"
                }
            }
        }
    }
}