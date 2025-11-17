pipeline {
    agent any
    
    stages {
        stage('Extract Git Info') {
            steps {
                echo '🔍 Extracting Git information...'
                script {
                    // Try to get commit info, if it fails use fallback
                    try {
                        env.COMMIT_SHA = sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
                    } catch (Exception e) {
                        env.COMMIT_SHA = 'manual-build'
                    }
                    env.SHORT_SHA = env.COMMIT_SHA.substring(0, 7)
                    env.IMAGE_TAG = "build-${env.BUILD_NUMBER}-${env.SHORT_SHA}"
                    
                    echo "IMAGE_TAG: ${env.IMAGE_TAG}"
                    echo "COMMIT_SHA: ${env.COMMIT_SHA}"
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t yann177/yann-chatbot:${env.IMAGE_TAG} ."
                }
            }
        }
        
        stage('Push to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )]) {
                        sh """
                        echo \"\${DOCKER_PASS}\" | docker login -u \"\${DOCKER_USER}\" --password-stdin
                        docker push yann177/yann-chatbot:${env.IMAGE_TAG}
                        """
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "✅ Success! Image: yann177/yann-chatbot:${env.IMAGE_TAG}"
        }
    }
}