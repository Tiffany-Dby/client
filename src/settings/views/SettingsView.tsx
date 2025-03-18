import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/lib/components/ui/tabs";
import BaseSettingsTable from "../ui/components/BaseSettingsTable";

const SettingsView = () => {
  const tableHeads = ["Domaine", "Date d'ajout", "Actions"];
  const whitelist = [
    {
      domain: "example1.com",
      addedAt: "2025-03-10",
    },
    {
      domain: "securedomain.org",
      addedAt: "2025-02-25",
    },
    {
      domain: "trustedpartner.net",
      addedAt: "2025-03-05",
    },
  ];
  const blacklist = [
    {
      domain: "spamdomain.com",
      addedAt: "2025-03-12",
    },
    {
      domain: "phishingexample.co",
      addedAt: "2025-03-07",
    },
    {
      domain: "maliciousdomain.org",
      addedAt: "2025-03-08",
    },
  ];

  return (
    <Tabs defaultValue="whitelist" className="container mx-auto">
      <TabsList className="w-full">
        <TabsTrigger value="whitelist">Liste blanche</TabsTrigger>
        <TabsTrigger value="blacklist">Liste noire</TabsTrigger>
      </TabsList>
      <TabsContent value="whitelist">
        <BaseSettingsTable tableHeads={tableHeads} list={whitelist} />
      </TabsContent>
      <TabsContent value="blacklist">
        <BaseSettingsTable tableHeads={tableHeads} list={blacklist} />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsView;
