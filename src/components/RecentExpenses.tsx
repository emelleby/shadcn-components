import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type Expense } from '@/types/expense';

interface RecentExpensesProps {
  expenses: Expense[];
  displayType: 'amount' | 'emissions';
}

export function RecentExpenses({ expenses, displayType }: RecentExpensesProps) {
  const sortedExpenses = [...expenses]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {sortedExpenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between p-4 rounded-lg bg-white border border-gray-100"
          >
            <div className="space-y-1">
              <p className="font-medium text-gray-900">{expense.category}</p>
              <p className="text-sm text-gray-500">
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-lg font-bold text-gray-900">
                {displayType === 'amount' ? (
                  <>
                    {expense.amount.toFixed(2)}
                    <span className="text-base font-bold text-gray-500"> NOK</span>
                  </>
                ) : (
                  <>
                    {expense.emissions.toFixed(2)}
                    <span className="text-base font-bold text-gray-500"> Kg CO2e</span>
                  </>
                )}
              </p>
              <a href="#" className="expense-link">
                View Expense
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}