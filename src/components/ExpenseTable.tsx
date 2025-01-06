import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { ExpenseActions } from "./ExpenseActions";
import ImageDialog from "@/components/dialogs/ImageDialog";
import { sampleData } from "@/data/sampleData";

export function ExpenseTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Actions</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Emissions</TableHead>
            <TableHead className="text-right">Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>
                <ExpenseActions />
              </TableCell>
              <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell className="text-right">{expense.amount.toFixed(2)} NOK</TableCell>
              <TableCell className="text-right">{expense.emissions} kg Co2e</TableCell>
              <TableCell className="text-right"> 
                <ImageDialog
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sEyJx_biWxlnlbdasKLDjgHaIn%26pid%3DApi&f=1&ipt=743585bb3abb353febec21a3a4dd26b130b84e4f91c307d8d4a28dd68e68afee&ipo=images"
        title="Example Image"
        
      />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1000} className="text-center">
              <Button variant="" size="sm">Reimburse</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}