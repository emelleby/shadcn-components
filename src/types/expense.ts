export type ExpenseCategory = 
  | 'Accommodation'
  | 'Car distance-based'
  | 'Fuel expenses'
  | 'Flights'
  | 'Other Miscellaneous';

export interface Expense {
  id: string;
  category: ExpenseCategory;
  amount: number;
  emissions: number;
  date: string;
  description: string;
}