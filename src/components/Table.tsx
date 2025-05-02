import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Emissions data as a list of objects
const emissionsData = [
  { scope: "Scope 1", value: 12.35 },
  { scope: "Scope 2", value: 8.72 },
  { scope: "Scope 3", value: 24.18 }
];

function TableDemo() {
  // Calculate the total emissions
  const totalEmissions = emissionsData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="mx-auto max-w-lg">
      <div className="overflow-hidden rounded-lg border border-border bg-background">
        <h3 className="p-4 font-medium text-lg bg-slate-50">Emissions For This Transaction</h3>
        <Table>
          <TableHeader>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableHead className="py-2 font-bold">Scope</TableHead>
              <TableHead className="py-2 font-bold text-right">Emissions(CO2e)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emissionsData.map((item, index) => (
              <TableRow
                key={index}
                className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
              >
                <TableCell className="py-2 text-sm">{item.scope}</TableCell>
                <TableCell className="py-2 text-right">{item.value.toFixed(2)} kg</TableCell>
              </TableRow>
            ))}
            {/* Sum row */}
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r bg-slate-50">
              <TableCell className="py-2 font-medium">Total</TableCell>
              <TableCell className="py-2 text-right font-medium">{totalEmissions.toFixed(2)} kg</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export { TableDemo }