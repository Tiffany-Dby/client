import { useEffect, useState } from "react";
import BaseLogsTable from "@/dashboard/ui/components/BaseLogsTable";

const LogsView = () => {
  const [logs, setLogs] = useState([]);
  const tableHeads = ["Domaine", "Date", "Description", "Contenu", "Opérations", "Statut"];

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/logs");
        const data = await response.json();
        setLogs(data);  // Mettre à jour l'état des logs avec les données récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération des logs :", error);
      }
    };

    fetchLogs();  // Appeler la fonction pour récupérer les logs
  }, []);

  return <BaseLogsTable tableHeads={tableHeads} list={logs} />;
};

export default LogsView;
