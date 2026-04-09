pipeline {
    agent any

    tools {
        nodejs "nodejs" // phải config trong Jenkins
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/your-repo/mini-project.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test Run Backend') {
            steps {
                dir('backend') {
                    sh 'node server.js &'
                }
            }
        }
    }

    post {
        success {
            echo 'Build success!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}