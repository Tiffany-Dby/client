import BaseChart from "@/dashboard/ui/components/BaseChart";
import BaseBlockedTable from "../ui/components/BaseBlockedTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import BasePendingTable from "../ui/components/BasePendingTable";
import { useEffect, useState } from "react";

const OverviewView = () => {
  const tableHeadsBlocked = ["De", "Sujet", "Contenu", "Raison", "Statut"];
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

  const tableHeadsPending = ["De", "Sujet", "Contenu","Actions"];
  const [pendingEmails, setPendingEmails] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/emails/en-attente/details");
        const data = await response.json();
        setPendingEmails(data);  // Mettre à jour l'état des logs avec les données récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération des logs :", error);
      }
    };

    fetchLogs();  // Appeler la fonction pour récupérer les logs
  }, []);

  return (
    <div>
      <div className="flex flex-col  gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <BaseChart />
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                <h2>Bloqués</h2>
              </CardTitle>
              <CardDescription>
                Les derniers emails automatiquement bloqués
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BaseBlockedTable
                tableHeads={tableHeadsBlocked}
                list={autoBlockedEmails}
              />
            </CardContent>
          </Card>
        </div>

        <div className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                <h2>En attente</h2>
              </CardTitle>
              <CardDescription>
                Les derniers emails en attente de validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BasePendingTable
                tableHeads={tableHeadsPending}
                list={pendingEmails}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverviewView;
