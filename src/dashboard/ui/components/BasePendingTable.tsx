import { Button } from "@/lib/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";
import { CheckIcon, Trash2Icon } from "lucide-react";

interface Props {
  tableHeads: string[];
  list: List[];
}

type List = {
  from: string;
  subject: string;
  content: string;
};

const BasePendingTable = ({ tableHeads, list }: Props) => {
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
          <TableRow key={elt.from}>
            <TableCell className="max-w-[100px] truncate">{elt.from}</TableCell>
            <TableCell className="max-w-[100px] truncate">
              {elt.subject}
            </TableCell>
            <TableCell className="max-w-32 truncate">{elt.content}</TableCell>
            <TableCell className="flex gap-4">
              <Button>
                <CheckIcon /> Approuver
              </Button>
              <Button variant="destructive">
                <Trash2Icon /> Rejeter
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasePendingTable;
