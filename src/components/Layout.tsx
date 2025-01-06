import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <nav className="flex gap-4">
              <Link to="/" className="text-foreground hover:text-primary">
                Dashboard
              </Link>
              <Link to="/trip-report" className="text-foreground hover:text-primary">
                Trip Report
              </Link>
              <Link to="/dialogs" className="text-foreground hover:text-primary">
                Dialogs
              </Link>
              <Link to="/trip-report/details" className="text-foreground hover:text-primary">
                Reportdetails
              </Link>
              
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}