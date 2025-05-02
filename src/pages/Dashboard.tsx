import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Briefcase, User, BarChart3 } from 'lucide-react';
import EmissionsDetailSheet from '@/components/dialogs/EmissionsDetailSheet';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-2 md:p-4 lg:p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/trip-report">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Trip Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                View expenses and emissions for your business travel
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dialogs">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Dialog examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                See the dialogs in action
              </p>
            </CardContent>
          </Card>
        </Link>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Emissions Detail
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Edit and manage your emissions data by scope
            </p>
            <EmissionsDetailSheet />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}