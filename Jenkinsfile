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
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                nodejs(nodeJSInstallationName: 'node'){
                    echo 'Deploying....'
                    sh "node app"
                }
            }
        }
    }
}