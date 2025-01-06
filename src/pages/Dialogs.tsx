import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MealsDialog } from "@/components/dialogs/MealsDialog";
import { RatesDialog } from "@/components/dialogs/RatesDialog";

export function Dialogs() {
  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-8 space-y-8">
      <h1 className="text-3xl font-bold">Dialog Examples</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Basic Dialog</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline">Open Dialog</Button>
          </CardContent>
        </Card>
        <MealsDialog />
        <RatesDialog />
        
      </div>
    </div>
  );
}