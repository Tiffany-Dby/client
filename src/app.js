const mysql = require('mysql2');

// Créer une connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',   
  password: '',      
  database: 'camarol',
});

// Vérifier la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err.stack);
    return;
  }
  console.log('Connecté à MySQL avec l\'ID de connexion', connection.threadId);
});

module.exports = connection;
