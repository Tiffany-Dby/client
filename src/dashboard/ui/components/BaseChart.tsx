import { Pie, PieChart } from "recharts";

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

const BaseChart = () => {
  const chartData = [
    { status: "blocked", emails: 75, fill: "var(--chart-1)" },
    { status: "pending", emails: 20, fill: "var(--chart-2)" },
    { status: "accepted", emails: 87, fill: "var(--chart-3)" },
  ];

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
    <Card className="flex flex-col mx-auto md:mx-0 w-full max-w-96">
      <CardHeader className="items-center pb-0">
        <CardTitle>Statistiques</CardTitle>
        <CardDescription>January - Mars 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="emails" label nameKey="status" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          <p>Répartition des statuts des emails </p>
        </div>
        <div className="leading-none text-muted-foreground">
          Aperçu sur les 3 derniers mois
        </div>
      </CardFooter>
    </Card>
  );
};

export default BaseChart;
