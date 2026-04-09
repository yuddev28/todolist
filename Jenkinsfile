pipeline {
    agent any

    tools {
        nodejs "nodejs" // phải config trong Jenkins
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning repository'
                git 'https://github.com/your-repo/mini-project.git'
            }
        }

        stage('Install Backend') {
            steps {
                echo 'Installing backend dependencies'
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                echo 'Installing frontend dependencies'
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building frontend'
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test Run Backend') {
            steps {
                echo 'Testing backend'
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