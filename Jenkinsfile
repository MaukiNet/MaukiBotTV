pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Holen Sie den Code aus dem Repository
                checkout scm
            }
        }

        stage('Create dist directory') {
            steps {
                // Erstellen Sie das 'dist'-Verzeichnis
                sh 'mkdir dist'
            }
        }

        stage('Install npm dependencies') {
            steps {
                // Installieren Sie npm-Abhängigkeiten
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Führen Sie den Build aus (Annehmen, dass npm run build den Build ausführt)
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            // Wenn der Build erfolgreich ist, starten Sie den Anwendungsprozess in einem neuen Prozess
            bat 'start npm run start'
        }
    }
}
