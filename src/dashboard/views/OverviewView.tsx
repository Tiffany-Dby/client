import BaseChart from "@/dashboard/ui/components/BaseChart";
import BaseBlockedTable from "../ui/components/BaseBlockedTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

const OverviewView = () => {
  const tableHeads = ["De", "Sujet", "Raison", "Statut"];
  const autoBlockedEmails = [
    {
      from: "example@example.com",
      subject: "Important update about your account",
      reason: "Spam detection",
      report: true,
    },
    {
      from: "suspicious@suspicious-site.org",
      subject: "Confirm your account details",
      reason: "Phishing attempt",
      report: true,
    },
    {
      from: "untrusted@untrusted-sender.net",
      subject: "Your weekly newsletter",
      reason: "Spam detection",
      report: true,
    },
    {
      from: "random@random-domain.xyz",
      subject: "Invoice details for your purchase",
      reason: "Malware detection",
      report: true,
    },
    {
      from: "mlwr@random-domain.xyz",
      subject: "Invoice details for your purchase",
      reason: "Malware detection",
      report: true,
    },
    {
      from: "phsing@random-domain.xyz",
      subject: "Invoice details for your purchase",
      reason: "Phishing attempt",
      report: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <BaseChart />
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Bloqués</CardTitle>
            <CardDescription>
              Les derniers emails qui ont été automatiquement bloqués
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BaseBlockedTable
              tableHeads={tableHeads}
              list={autoBlockedEmails}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewView;
