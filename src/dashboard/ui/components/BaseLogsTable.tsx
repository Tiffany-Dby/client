import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";
/*
import { AppRoutes } from "@/shared/types/Routes";
import { Link } from "react-router";
*/

interface Props {
  tableHeads: string[];
  list: Record<string, string>[];
}

const BaseLogsTable = ({ tableHeads, list }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeads.map((tableHead) => (
            <TableHead key={tableHead}>{tableHead}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((elt) => (
          <TableRow key={elt.domain + elt.Date}>
            <TableCell>{elt.domain}</TableCell>
            <TableCell>{elt.date}</TableCell>
            <TableCell>{elt.description}</TableCell>
            <TableCell>{elt.content}</TableCell>
            <TableCell>{elt.operation}</TableCell>
            <TableCell>{elt.statut}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

/*
            <TableCell>
              <Link
                className="px-4 py-1.5 bg-primary rounded-md text-primary-foreground"
                to={`${AppRoutes.review}/${elt.id}`}
              >
                Revue
              </Link>
            </TableCell>
*/
export default BaseLogsTable;
