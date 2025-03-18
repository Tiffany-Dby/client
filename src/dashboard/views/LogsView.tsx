import BaseLogsTable from "@/dashboard/ui/components/BaseLogsTable";

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

  return <BaseLogsTable tableHeads={tableHeads} list={list} />;
};

export default LogsView;
