import { Button } from "@/lib/components/ui/button";
import { useNavigate } from "react-router";
import { AppRoutes } from "@/shared/types/Routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Card className=" mx-auto my-10 w-fit min-w-100 text-center">
      <CardHeader className="py-6">
        <CardTitle>
          <h2 className="text-6xl">404</h2>
        </CardTitle>
        <CardDescription>
          <p className="text-2xl">Oops! Page introuvable.</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <Button onClick={() => navigate(AppRoutes.home)} variant="default">
          Retour à l'aperçu
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotFound;
