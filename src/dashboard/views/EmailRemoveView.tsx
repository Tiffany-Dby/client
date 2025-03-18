import { useEffect, useState } from "react";
import BaseBlockedEmail from "@/dashboard/ui/components/BaseBlockedEmail";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

const EmailRemoveView = () => {
    const tableHeads = ["Envoyeur", "Sujet", "Contenu", "Raison", "Statut"];
    const [autoBlockedEmails, setAutoBlockedEmails] = useState([]);
  
    useEffect(() => {
      const fetchLogs = async () => {
        try {
          const response = await fetch("http://localhost:5000/emailchecked/non-envoye/details");
          const data = await response.json();
          setAutoBlockedEmails(data);  // Mettre à jour l'état des logs avec les données récupérées
        } catch (error) {
          console.error("Erreur lors de la récupération des logs :", error);
        }
      };
  
      fetchLogs();  // Appeler la fonction pour récupérer les logs
    }, []);
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Email Bloqué</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BaseBlockedEmail tableHeads={tableHeads} list={autoBlockedEmails} />
        </CardContent>
      </Card>
    );
};

export default EmailRemoveView;
