import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { emissionsData } from "@/data/emissionsData";

export function EmissionsTable() {
  // Group data by scope
  const scope1Data = emissionsData.filter(item => item.scope === 'Scope 1');
  const scope2Data = emissionsData.filter(item => item.scope === 'Scope 2');
  const scope3Data = emissionsData.filter(item => item.scope === 'Scope 3');

  // Calculate totals
  const scope1Total = scope1Data.reduce((sum, item) => sum + item.emissions, 0);
  const scope2Total = scope2Data.reduce((sum, item) => sum + item.emissions, 0);
  const scope3Total = scope3Data.reduce((sum, item) => sum + item.emissions, 0);
  const grandTotal = scope1Total + scope2Total + scope3Total;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-lg border border-border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Scope</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Source</TableHead>
              <TableHead className="text-right">Emissions (tCO2e)</TableHead>
              <TableHead className="text-right">% of Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Scope 1 Data */}
            {scope1Data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.scope}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell className="text-right">{item.emissions.toFixed(1)}</TableCell>
                <TableCell className="text-right">
                  {((item.emissions / grandTotal) * 100).toFixed(1)}%
                </TableCell>
              </TableRow>
            ))}
            
            {/* Scope 1 Subtotal */}
            <TableRow className="bg-muted/50">
              <TableCell colSpan={3} className="font-medium">Scope 1 Subtotal</TableCell>
              <TableCell className="text-right font-medium">{scope1Total.toFixed(1)}</TableCell>
              <TableCell className="text-right font-medium">
                {((scope1Total / grandTotal) * 100).toFixed(1)}%
              </TableCell>
            </TableRow>
            
            {/* Scope 2 Data */}
            {scope2Data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.scope}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell className="text-right">{item.emissions.toFixed(1)}</TableCell>
                <TableCell className="text-right">
                  {((item.emissions / grandTotal) * 100).toFixed(1)}%
                </TableCell>
              </TableRow>
            ))}
            
            {/* Scope 2 Subtotal */}
            <TableRow className="bg-muted/50">
              <TableCell colSpan={3} className="font-medium">Scope 2 Subtotal</TableCell>
              <TableCell className="text-right font-medium">{scope2Total.toFixed(1)}</TableCell>
              <TableCell className="text-right font-medium">
                {((scope2Total / grandTotal) * 100).toFixed(1)}%
              </TableCell>
            </TableRow>
            
            {/* Scope 3 Data */}
            {scope3Data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.scope}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell className="text-right">{item.emissions.toFixed(1)}</TableCell>
                <TableCell className="text-right">
                  {((item.emissions / grandTotal) * 100).toFixed(1)}%
                </TableCell>
              </TableRow>
            ))}
            
            {/* Scope 3 Subtotal */}
            <TableRow className="bg-muted/50">
              <TableCell colSpan={3} className="font-medium">Scope 3 Subtotal</TableCell>
              <TableCell className="text-right font-medium">{scope3Total.toFixed(1)}</TableCell>
              <TableCell className="text-right font-medium">
                {((scope3Total / grandTotal) * 100).toFixed(1)}%
              </TableCell>
            </TableRow>
            
            {/* Grand Total */}
            <TableRow className="bg-muted font-bold">
              <TableCell colSpan={3}>Total Emissions</TableCell>
              <TableCell className="text-right">{grandTotal.toFixed(1)}</TableCell>
              <TableCell className="text-right">100.0%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Emissions by Scope (1, 2, and 3) - Year 2023
      </p>
    </div>
  );
}

export default EmissionsTable;
