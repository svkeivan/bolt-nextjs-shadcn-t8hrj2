import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', profit: 4000 },
  { name: 'Feb', profit: 3000 },
  { name: 'Mar', profit: 5000 },
  { name: 'Apr', profit: 2780 },
  { name: 'May', profit: 1890 },
  { name: 'Jun', profit: 2390 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$18,060</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">68%</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profit Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="profit" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}