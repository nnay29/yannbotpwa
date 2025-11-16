pipeline {
    agent any
    
    // Remove the triggers section - we'll use webhook directly
    // triggers {
    //     githubPush()
    // }
    
    stages {
        stage('Hello') {
            steps {
                echo '🎉 GitHub webhook triggered this build!'
                script {
                    // Let's see what environment variables Jenkins receives
                    echo "GIT_URL: ${env.GIT_URL ?: 'NOT SET'}"
                    echo "GIT_BRANCH: ${env.GIT_BRANCH ?: 'NOT SET'}"
                    echo "GIT_COMMIT: ${env.GIT_COMMIT ?: 'NOT SET'}"
                    
                    // Print all environment variables to debug
                    sh 'printenv'
                }
            }
        }
    }
    
    post {
        always {
            echo '📦 Build completed - this is just a test'
        }
        success {
            echo '✅ Build succeeded! Webhook is working!'
        }
    }
}