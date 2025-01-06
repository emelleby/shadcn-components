import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type Expense } from '@/types/expense';

const COLORS = {
  'Accommodation': 'hsl(var(--chart-2))',
  'Car distance-based': 'hsl(var(--chart-1))',
  'Fuel expenses': 'hsl(var(--chart-3))',
  'Flights': 'hsl(var(--chart-4))',
  'Other Miscellaneous': 'hsl(var(--chart-5))'
};

interface ExpenseChartProps {
  data: Expense[];
  type: 'amount' | 'emissions';
}

export function ExpenseChart({ data, type }: ExpenseChartProps) {
  const chartData = Object.entries(
    data.reduce((acc, expense) => {
      const value = type === 'amount' ? expense.amount : expense.emissions;
      acc[expense.category] = (acc[expense.category] || 0) + value;
      return acc;
    }, {} as Record<string, number>)
  ).map(([category, value]) => ({
    category,
    value
  }));

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>
          {type === 'amount' ? 'Expenses' : 'Emissions'}
          <span className="text-sm font-normal text-muted-foreground block">
            {new Date().toLocaleDateString()} - {new Date().toLocaleDateString()}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="h-[300px] w-[300px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((entry) => (
                  <Cell 
                    key={entry.category} 
                    fill={COLORS[entry.category as keyof typeof COLORS]} 
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">
                {Math.round(total)}
              </div>
              <div className="text-sm text-muted-foreground">
                {type === 'amount' ? 'NOK' : 'Kg CO2e'}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {chartData.map(({ category, value }) => (
            <div key={category} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[category as keyof typeof COLORS] }}
              />
              <span className="text-sm">{category}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}