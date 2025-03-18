import { Pie, PieChart } from "recharts";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/lib/components/ui/chart";

interface EmailCount {
  count: number;
}

const BaseChart = () => {
  const [emailBlocked, setEmailBlocked] = useState<EmailCount>({ count: 0 });

useEffect(() => {
  const fetchLogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/emailchecked/non-envoye/count");
      const data = await response.json();
      setEmailBlocked(data);  // Mettre à jour l'état des logs avec les données récupérées
    } catch (error) {
      console.error("Erreur lors de la récupération des logs :", error);
    }
  };

  fetchLogs();  // Appeler la fonction pour récupérer les logs
}, []);

const [emailPendind, setEmailPendind] = useState<EmailCount>({ count: 0 });

useEffect(() => {
  const fetchLogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/emails/en-attente/count");
      const data = await response.json();
      setEmailPendind(data);  // Mettre à jour l'état des logs avec les données récupérées
    } catch (error) {
      console.error("Erreur lors de la récupération des logs :", error);
    }
  };

  fetchLogs();  // Appeler la fonction pour récupérer les logs
}, []);

const [emailSend, setEmailSend] = useState<EmailCount>({ count: 0 });

useEffect(() => {
  const fetchLogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/emailchecked/envoye/count");
      const data = await response.json();
      setEmailSend(data);  // Mettre à jour l'état des logs avec les données récupérées
    } catch (error) {
      console.error("Erreur lors de la récupération des logs :", error);
    }
  };

  fetchLogs();  // Appeler la fonction pour récupérer les logs
}, []);
  const chartData = [
    { status: "blocked", emails: emailBlocked.count, fill: "var(--chart-1)" },
    { status: "pending", emails: emailPendind.count, fill: "var(--chart-2)" },
    { status: "accepted", emails: emailSend.count, fill: "var(--chart-3)" },
  ];
  console.log(emailBlocked);
  console.log(emailPendind);
  console.log(emailSend);
  const chartConfig = {
    emails: {
      label: "Emails",
    },
    blocked: {
      label: "Bloqué",
      color: "var(--chart-1)",
    },
    pending: {
      label: "En attente",
      color: "var(--chart-2)",
    },
    accepted: {
      label: "Accepté",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col mx-auto lg:mx-0 w-full max-w-96">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          <h2>Statistiques</h2>
        </CardTitle>
        <CardDescription>January - Mars 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="emails" nameKey="status" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          <p>Répartition des statuts des emails </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BaseChart;
