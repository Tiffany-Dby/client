import { useEffect, useState } from "react";
import BaseLogsTable from "@/dashboard/ui/components/BaseLogsTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

const LogsView = () => {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>Logs</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <BaseLogsTable tableHeads={tableHeads} list={list} />
      </CardContent>
    </Card>
  );
};

export default LogsView;
