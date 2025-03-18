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

// Route pour récupérer le nombre d'emails avec status 'non envoyé'
app.get('/emailchecked/non-envoye/count', (req, res) => {
  const query = `SELECT COUNT(*) AS count FROM emailchecked WHERE status = 'non envoyé'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération du nombre d'emails non envoyés:", err);
      return res.status(500).json({ error: "Erreur lors de la récupération du nombre d'emails non envoyés" });
    }

    res.json({ count: results[0].count }); // Renvoie le nombre d'emails non envoyés
  });
});

// Route pour récupérer les emails complets avec status 'non envoyé'
app.get('/emailchecked/non-envoye/details', (req, res) => {
  const query = `SELECT * FROM emailchecked WHERE status = 'non envoyé'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des emails non envoyés:", err);
      return res.status(500).json({ error: "Erreur lors de la récupération des emails non envoyés" });
    }

    res.json(results); // Renvoie les détails des emails non envoyés
  });
});

// Route pour récupérer le nombre d'emails avec status 'envoyé'
app.get('/emailchecked/envoye/count', (req, res) => {
  const query = `SELECT COUNT(*) AS count FROM emailchecked WHERE status = 'envoyé'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération du nombre d'emails envoyés:", err);
      return res.status(500).json({ error: "Erreur lors de la récupération du nombre d'emails envoyés" });
    }

    res.json({ count: results[0].count }); // Renvoie le nombre d'emails envoyés
  });
});

// Route pour récupérer les emails complets avec status 'envoyé'
app.get('/emailchecked/envoye/details', (req, res) => {
  const query = `SELECT * FROM emailchecked WHERE status = 'envoyé'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des emails envoyés:", err);
      return res.status(500).json({ error: "Erreur lors de la récupération des emails envoyés" });
    }

    res.json(results);
  });
});

app.get('/emails/en-attente/details', (req, res) => {
  const query = `SELECT * FROM email WHERE status = 'en attente'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des emails en attente:", err);
      return res.status(500).json({ error: "Erreur lors de la récupération des emails en attente" });
    }

    res.json(results);
  });
});

app.get('/emails/en-attente/count', (req, res) => {
  const query = `SELECT COUNT(*) AS count FROM email WHERE status = 'en attente'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération du nombre d'emails en attente:", err);
      return res.status(500).json({ error: "Erreur lors de la récupération du nombre d'emails en attente" });
    }

    res.json({ count: results[0].count });
  });
});


app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
