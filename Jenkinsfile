pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t ecommerce-ui .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker rm -f ecommerce-ui-container'
                bat 'docker run -d --name ecommerce-ui-container -p 4200:80 ecommerce-ui'
            }
        }
    }
}