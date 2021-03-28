pipeline {
    agent any
    stages {
        stage('Clone') {
            steps{
                script {
                    git branch: 'main', credentialsId: 'git-hub', url: 'https://github.com/khoa-luan/user-service.git'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                     sshagent (credentials: ['ssh-jenkins']) {
                        sh "ssh -T -v -o StrictHostKeyChecking=no azureuser@10.104.0.2"
                        sh "docker-compose stop"
                        sh "docker-compose rm -f"
                        sh "docker-compose up -d --build"
                        sh "curl -s -X POST https://api.telegram.org/bot1660098893:AAEEmYUS44rWcJbdqaPdw0DJtj4GY-rd37A/sendMessage -d chat_id=-582327842 -d text='Jenkins CI/CD deploy successfully!'"

                      }
                }
            }
        }
    }
    post {
        success {
            echo "SUCCESSFUL"
        }
        failure {
            echo "FAILED"
        }
    }
}
