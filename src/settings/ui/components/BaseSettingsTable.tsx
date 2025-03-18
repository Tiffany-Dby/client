import { Button } from "@/lib/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";

interface Props {
  tableHeads: string[];
  list: Record<string, string>[];
  btnClick: () => void;
}

const BaseSettingsTable = ({ tableHeads, list, btnClick }: Props) => {
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
          <TableRow key={elt.domain + elt.addedAt}>
            <TableCell>{elt.domain}</TableCell>
            <TableCell>{elt.addedAt}</TableCell>
            <TableCell className="min-w-fit max-w-0">
              <Button variant={"destructive"} onClick={btnClick}>
                Supprimer
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BaseSettingsTable;
