import BaseLogsTable from "@/dashboard/ui/components/BaseLogsTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

const LogsView = () => {
  const formattedDateTime =
    new Date().toLocaleDateString("fr-FR") +
    " " +
    new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const tableHeads = [
    "Domaine",
    "Date",
    "Description",
    "Contenu",
    "Opérations",
  ];
  const list = [
    {
      domain: "example1.com",
      date: formattedDateTime,
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
    {
      domain: "example2.com",
      date: formattedDateTime,
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
    {
      domain: "example3.com",
      date: formattedDateTime,
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
    {
      domain: "example4.com",
      date: formattedDateTime,
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
  ];

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
