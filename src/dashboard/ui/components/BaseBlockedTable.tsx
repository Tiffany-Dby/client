import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";
import { SquareCheckBigIcon, SquareXIcon } from "lucide-react";

interface Props {
  tableHeads: string[];
  list: List[];
}

type List = {
  from: string;
  subject: string;
  reason: string;
  report: boolean;
  content: string;
};

const BaseBlockedTable = ({ tableHeads, list }: Props) => {
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
            <TableCell>{elt.reason}</TableCell>
            <TableCell>
              {elt.report ? (
                <SquareCheckBigIcon className="text-green-600" />
              ) : (
                <SquareXIcon className="text-destructive" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BaseBlockedTable;
