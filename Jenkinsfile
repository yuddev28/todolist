pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {

        stage('Clone') {
            steps {
                bat 'echo ===== CLONE STAGE ====='
                git branch: 'main', url: 'https://github.com/yuddev28/todolist.git'
            }
        }

        stage('Install Backend') {
            steps {
                bat 'echo ===== INSTALL BACKEND ====='
                dir('backend') {
                    bat 'echo Installing backend dependencies...'
                    bat 'npm install'
                    bat 'echo Backend install done!'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                bat 'echo ===== INSTALL FRONTEND ====='
                dir('frontend') {
                    bat 'echo Installing frontend dependencies...'
                    bat 'npm install'
                    bat 'echo Frontend install done!'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'echo ===== BUILD FRONTEND ====='
                dir('frontend') {
                    bat 'echo Building frontend...'
                    bat 'npm run build'
                    bat 'echo Frontend build done!'
                }
            }
        }

        stage('Test Run Backend') {
            steps {
                bat 'echo ===== RUN BACKEND ====='
                dir('backend') {
                    bat 'echo Starting backend server...'
                    bat 'start /B node server.js'
                    bat 'echo Backend started!'
                }
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo ===== DEPLOY STAGE ====='

                bat 'npm install -g pm2'
                bat 'npm install -g serve'

                dir('backend') {
                    bat 'pm2 delete todolist-backend || exit 0'
                    bat 'pm2 start server.js --name todolist-backend'
                }

                dir('frontend') {
                    bat 'pm2 delete todolist-frontend || exit 0'
                    bat 'pm2 start "npx serve -s dist -l 3000" --name todolist-frontend'
                }

                bat 'echo Deploy done!'
            }
        }
    }

    post {
        success {
            bat 'echo ===== BUILD SUCCESS ====='
        }
        failure {
            bat 'echo ===== BUILD FAILED ====='
        }
        always {
            bat 'echo ===== PIPELINE FINISHED ====='
        }
    }
}