pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {

        stage('DEBUG') {
            steps {
                sh 'pwd'
                sh 'ls -la'
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