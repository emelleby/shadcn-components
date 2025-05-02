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
  { scope: "Scope 1", value: 12.35, color: "text-rose-700" },
  { scope: "Scope 2", value: 8.72, color: "text-sky-700" },
  { scope: "Scope 3", value: 24.18, color: "text-amber-700" }
];

function TableDemo() {
  // Calculate the total emissions
  const totalEmissions = emissionsData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="mx-auto max-w-lg">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <h3 className="p-4 font-medium text-lg">Emissions For This Transaction</h3>
        <Table>
          <TableHeader>
            <TableRow className="border-b hover:bg-transparent">
              <TableHead className="py-3 px-4 text-gray-600 font-medium">Scope</TableHead>
              <TableHead className="py-3 px-4 text-right text-gray-600 font-medium">Emissions(CO2e)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emissionsData.map((item, index) => (
              <TableRow
                key={index}
                className="border-b hover:bg-gray-50"
              >
                <TableCell className="py-3 px-4 font-medium">{item.scope}</TableCell>
                <TableCell className={`py-3 px-4 text-right ${item.color} font-medium`}>
                  {item.value.toFixed(2)} kg
                </TableCell>
              </TableRow>
            ))}
            {/* Sum row */}
            <TableRow>
              <TableCell className="py-3 px-4 font-semibold">Total</TableCell>
              <TableCell className="py-3 px-4 text-right font-semibold">
                {totalEmissions.toFixed(2)} kg
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export { TableDemo }