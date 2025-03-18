import BaseLogsTable from "@/dashboard/ui/components/BaseLogsTable";

const LogsView = () => {
  const tableHeads = [
    "Domaine",
    "Date",
    "Heure",
    "Description",
    "Contenu",
    "Actions",
  ];
  const list = [
    {
      domain: "example1.com",
      date: "2025-03-10",
      hour: "10:30",
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
    {
      domain: "example1.com",
      date: "2025-03-10",
      hour: "10:30",
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
    {
      domain: "example1.com",
      date: "2025-03-10",
      hour: "10:30",
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
    {
      domain: "example1.com",
      date: "2025-03-10",
      hour: "10:30",
      description: "Lorem ipsum dolor sit.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptates?",
    },
  ];

  return <BaseLogsTable tableHeads={tableHeads} list={list} />;
};

export default LogsView;
