import { DataTable } from "@/lib/components/ui/data-table";
import { columns } from "@/dashboard/ui/components/Columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

type PendingEmails = {
  id: string;
  from: string;
  subject: string;
  status: "pending";
};

const PendingView = () => {
  const pendingEmails: PendingEmails[] = [
    {
      id: "123jhoh123",
      from: "example@example.com",
      subject: "Important update about your account",
      status: "pending",
    },
    {
      id: "123jhoh234",
      from: "suspicious@suspicious-site.org",
      subject: "Confirm your account details",
      status: "pending",
    },
    {
      id: "123jhoh383",
      from: "untrusted@untrusted-sender.net",
      subject: "Your weekly newsletter",
      status: "pending",
    },
    {
      id: "123jhoh874",
      from: "random@random-domain.xyz",
      subject: "Invoice details for your purchase",
      status: "pending",
    },
    {
      id: "123jhoh218",
      from: "mlwr@random-domain.xyz",
      subject: "Invoice details for your purchase",
      status: "pending",
    },
    {
      id: "123jhoh233",
      from: "phsing@random-domain.xyz",
      subject: "Invoice details for your purchase",
      status: "pending",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>Emails</h2>
        </CardTitle>
        <CardDescription>
          <p>Liste des emails en attente de traîtement</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={pendingEmails} />
      </CardContent>
    </Card>
  );
};

export default PendingView;
