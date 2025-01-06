import { type Expense } from '@/types/expense';

export const sampleData: Expense[] = [
  {
    id: '1',
    category: 'Accommodation',
    amount: 1200.00,
    emissions: 54,
    date: '2025-01-01',
    description: 'Hotel stay'
  },
  {
    id: '2',
    category: 'Car distance-based',
    amount: 253.56,
    emissions: 85,
    date: '2025-01-02',
    description: 'Business travel by car'
  },
  {
    id: '3',
    category: 'Fuel expenses',
    amount: 755.00,
    emissions: 120,
    date: '2025-01-03',
    description: 'Fuel refill'
  },
  {
    id: '4',
    category: 'Flights',
    amount: 2500.00,
    emissions: 354,
    date: '2025-01-04',
    description: 'Return flight'
  },
  {
    id: '5',
    category: 'Other Miscellaneous',
    amount: 75.00,
    emissions: 15,
    date: '2025-01-05',
    description: 'Office supplies'
  }
];