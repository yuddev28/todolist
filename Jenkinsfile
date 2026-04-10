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
                bat 'echo ===== TEST BACKEND API ====='

                dir('backend') {
                    // chạy server tạm
                    bat 'start /B node server.js'
                }

                // đợi server chạy
                bat 'timeout /t 5'

                // test API (quan trọng)
                bat '''
                curl http://localhost:3000
                if %errorlevel% neq 0 exit /b 1
                '''
            }
        }
        
        stage('Run Backend') {
            steps {
                bat 'echo ===== START BACKEND ====='
                dir('backend') {
                    bat 'start /B node server.js'
                }
            }
        }

        stage('Run Frontend') {
            steps {
                bat 'echo ===== START FRONTEND ====='
                dir('frontend') {
                    bat 'start /B npm run dev'
                }
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