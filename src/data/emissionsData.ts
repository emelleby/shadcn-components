import { type EmissionsData } from '@/types/emissions';

export const emissionsData: EmissionsData[] = [
  // Scope 1 - Direct emissions from owned or controlled sources
  {
    id: '1',
    category: 'Stationary Combustion',
    scope: 'Scope 1',
    source: 'Natural Gas for Heating',
    emissions: 125.4,
    year: '2023',
    unit: 'tCO2e'
  },
  {
    id: '2',
    category: 'Mobile Combustion',
    scope: 'Scope 1',
    source: 'Company Vehicle Fleet',
    emissions: 87.2,
    year: '2023',
    unit: 'tCO2e'
  },
  {
    id: '3',
    category: 'Fugitive Emissions',
    scope: 'Scope 1',
    source: 'Refrigerant Leakage',
    emissions: 32.6,
    year: '2023',
    unit: 'tCO2e'
  },
  
  // Scope 2 - Indirect emissions from purchased electricity, steam, heating and cooling
  {
    id: '4',
    category: 'Purchased Electricity',
    scope: 'Scope 2',
    source: 'Grid Electricity',
    emissions: 215.8,
    year: '2023',
    unit: 'tCO2e'
  },
  {
    id: '5',
    category: 'Purchased Heat',
    scope: 'Scope 2',
    source: 'District Heating',
    emissions: 45.3,
    year: '2023',
    unit: 'tCO2e'
  },
  
  // Scope 3 - All other indirect emissions in a company's value chain
  {
    id: '6',
    category: 'Business Travel',
    scope: 'Scope 3',
    source: 'Air Travel',
    emissions: 178.9,
    year: '2023',
    unit: 'tCO2e'
  },
  {
    id: '7',
    category: 'Employee Commuting',
    scope: 'Scope 3',
    source: 'Personal Vehicles',
    emissions: 92.4,
    year: '2023',
    unit: 'tCO2e'
  },
  {
    id: '8',
    category: 'Purchased Goods & Services',
    scope: 'Scope 3',
    source: 'Raw Materials',
    emissions: 345.7,
    year: '2023',
    unit: 'tCO2e'
  },
  {
    id: '9',
    category: 'Waste Generated',
    scope: 'Scope 3',
    source: 'Landfill Waste',
    emissions: 28.6,
    year: '2023',
    unit: 'tCO2e'
  },
  {
    id: '10',
    category: 'Transportation & Distribution',
    scope: 'Scope 3',
    source: 'Upstream Logistics',
    emissions: 156.2,
    year: '2023',
    unit: 'tCO2e'
  }
];
