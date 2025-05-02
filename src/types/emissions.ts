export interface EmissionsData {
  id: string;
  category: string;
  scope: 'Scope 1' | 'Scope 2' | 'Scope 3';
  source: string;
  emissions: number;
  year: string;
  unit: string;
}
