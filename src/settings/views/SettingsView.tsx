import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/lib/components/ui/tabs";
import BaseSettingsTable from "../ui/components/BaseSettingsTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

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
    <Card>
      <Tabs defaultValue="whitelist" className="container mx-auto">
        <CardHeader>
          <TabsList className="w-full">
            <TabsTrigger value="whitelist">Liste blanche</TabsTrigger>
            <TabsTrigger value="blacklist">Liste noire</TabsTrigger>
          </TabsList>
        </CardHeader>
        <TabsContent value="whitelist">
          <CardHeader className="py-3">
            <CardTitle>
              <h2>Liste blanche</h2>
            </CardTitle>
            <CardDescription>
              <p>Retirer un domaine de confiance</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BaseSettingsTable
              tableHeads={tableHeads}
              list={whitelist}
              btnClick={() => {}}
            />
          </CardContent>
        </TabsContent>
        <TabsContent value="blacklist">
          <CardHeader className="py-3">
            <CardTitle>
              <h2>Liste noire</h2>
            </CardTitle>
            <CardDescription>
              <p>Retirer un domaine malveillant ou indésirable</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BaseSettingsTable
              tableHeads={tableHeads}
              list={blacklist}
              btnClick={() => {}}
            />
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default SettingsView;
