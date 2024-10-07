import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Strategy1Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Strategy 1</h1>
      <Card>
        <CardHeader>
          <CardTitle>Strategy 1 Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can display and manage Strategy 1 for option trading.</p>
        </CardContent>
      </Card>
    </div>
  );
}