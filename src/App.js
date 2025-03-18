import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'camarol',
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err.stack);
    return;
  }
  console.log('Connecté à MySQL avec l\'ID de connexion', connection.threadId);
});

app.use(cors());

app.get('/emails', (req, res) => {
  connection.query('SELECT * FROM emails', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur de requête' });
    } else {
      res.json(results);
    }
  });
});

app.get('/logs', (req, res) => {
  const query = `
    SELECT 
      log.id, 
      log.domain, 
      DATE_FORMAT(log.date_operation, '%Y-%m-%dT%H:%i:%s') AS formatted_date, 
      log.description, 
      email.content, 
      log.statut, 
      log.operation
    FROM log
    JOIN email ON log.email_id = email.id;
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des logs:", err);
      return res.status(500).json({ error: "Erreur lors de la récupération des logs" });
    }

    const formattedLogs = results.map((log) => {
      // Convertir le champ 'formatted_date' en un objet Date
      const dateObj = new Date(log.formatted_date); // Utilisation de la date formatée

      if (isNaN(dateObj.getTime())) {
        console.error(`Date invalide: ${log.formatted_date}`);
        return { ...log, date: "Date non valide" }; // Dans le cas d'une date invalide
      }

      // Formater la date au format "JJ/MM/AAAA HH:MM"
      const formattedDate = dateObj.toLocaleDateString("fr-FR") + " " + dateObj.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      return {
        ...log,
        date: formattedDate,
      };
    });

    res.json(formattedLogs); // Renvoie les logs avec les dates formatées
  });
});


app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
