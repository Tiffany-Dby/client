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
            <TableCell className="max-w-32 truncate">
              {elt.description}
            </TableCell>
            <TableCell className="max-w-32 truncate">{elt.content}</TableCell>
            <TableCell>{elt.operation}</TableCell>
            <TableCell>{elt.statut}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BaseLogsTable;
