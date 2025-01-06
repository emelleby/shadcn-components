import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Report } from './pages/Report'
import { ExpenseChart } from '@/components/ExpenseChart';
import { RecentExpenses } from '@/components/RecentExpenses';
import { sampleData } from '@/data/sampleData';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  // const [activeTab, setActiveTab] = useState('expenses');
  // const navigate = useNavigate();

  return (
    <>
    <div className="p-8">This is the dashboard page and below you see the Report component rendered. That is also available to see at the link above.</div>
    <Report />
    <div>Hello World</div>
    </>
  );
}

export default App;