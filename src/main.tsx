import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Dialogs } from './pages/Dialogs';
import { Report } from './pages/Report';
import { ExpenseDetails } from './pages/ExpenseDetails';
import App from './App';
import './index.css';
import { Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trip-report" element={<Report />} />
            <Route path="/trip-report/details" element={<ExpenseDetails />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);