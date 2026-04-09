pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {

        stage('Clone') {
            steps {
                sh 'echo ===== CLONE STAGE ====='
                sh 'echo Cloning repository...'
                git 'https://github.com/your-repo/mini-project.git'
                sh 'echo Clone done!'
            }
        }

        stage('Install Backend') {
            steps {
                sh 'echo ===== INSTALL BACKEND ====='
                dir('backend') {
                    sh 'echo Installing backend dependencies...'
                    sh 'npm install'
                    sh 'echo Backend install done!'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                sh 'echo ===== INSTALL FRONTEND ====='
                dir('frontend') {
                    sh 'echo Installing frontend dependencies...'
                    sh 'npm install'
                    sh 'echo Frontend install done!'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'echo ===== BUILD FRONTEND ====='
                dir('frontend') {
                    sh 'echo Building frontend...'
                    sh 'npm run build'
                    sh 'echo Frontend build done!'
                }
            }
        }

        stage('Test Run Backend') {
            steps {
                sh 'echo ===== RUN BACKEND ====='
                dir('backend') {
                    sh 'echo Starting backend server...'
                    sh 'nohup node server.js > server.log 2>&1 &'
                    sh 'echo Backend started in background!'
                }
            }
        }
    }

    post {
        success {
            sh 'echo ===== BUILD SUCCESS ====='
        }
        failure {
            sh 'echo ===== BUILD FAILED ====='
        }
        always {
            sh 'echo ===== PIPELINE FINISHED ====='
        }
    }
}