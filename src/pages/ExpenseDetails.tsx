import { Button } from "@/components/ui/button";
import { ExpenseTable } from "@/components/ExpenseTable";
import { Badge } from "@/components/ui/badge";

export function ExpenseDetails() {
  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Trip Name</h1>
          <p className="text-muted-foreground">A list of all expenses for the trip</p>
        </div>
        <Badge variant="danger">NOT REIMBURSED</Badge>
      </div>
      
      <ExpenseTable />

    </div>
  );
}