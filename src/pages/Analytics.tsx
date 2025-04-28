
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const analyticsData = [
  { month: "Jan", users: 400, conversions: 240 },
  { month: "Feb", users: 300, conversions: 139 },
  { month: "Mar", users: 200, conversions: 980 },
  { month: "Apr", users: 278, conversions: 390 },
  { month: "May", users: 189, conversions: 480 },
  { month: "Jun", users: 239, conversions: 380 },
  { month: "Jul", users: 349, conversions: 430 },
];

const marketingData = [
  { name: "Email", value: 400 },
  { name: "Social", value: 300 },
  { name: "Organic", value: 300 },
  { name: "Referral", value: 200 },
  { name: "Direct", value: 150 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Traffic</CardTitle>
            <CardDescription>User visits and conversions over time</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="conversions" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketing Channels</CardTitle>
            <CardDescription>Traffic source breakdown</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketingData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-grayScale-100 rounded-lg">
                <p className="text-sm font-medium text-grayScale-500">Bounce Rate</p>
                <h3 className="text-2xl font-bold mt-1">32.5%</h3>
                <p className="text-xs text-green-500 flex items-center mt-2">
                  <span>↓ 2.3%</span>
                  <span className="ml-1 text-grayScale-500">vs last month</span>
                </p>
              </div>

              <div className="p-4 bg-grayScale-100 rounded-lg">
                <p className="text-sm font-medium text-grayScale-500">Average Session</p>
                <h3 className="text-2xl font-bold mt-1">3:12</h3>
                <p className="text-xs text-green-500 flex items-center mt-2">
                  <span>↑ 8.1%</span>
                  <span className="ml-1 text-grayScale-500">vs last month</span>
                </p>
              </div>

              <div className="p-4 bg-grayScale-100 rounded-lg">
                <p className="text-sm font-medium text-grayScale-500">Conversion Rate</p>
                <h3 className="text-2xl font-bold mt-1">4.6%</h3>
                <p className="text-xs text-green-500 flex items-center mt-2">
                  <span>↑ 1.2%</span>
                  <span className="ml-1 text-grayScale-500">vs last month</span>
                </p>
              </div>

              <div className="p-4 bg-grayScale-100 rounded-lg">
                <p className="text-sm font-medium text-grayScale-500">New Users</p>
                <h3 className="text-2xl font-bold mt-1">823</h3>
                <p className="text-xs text-red-500 flex items-center mt-2">
                  <span>↓ 5.8%</span>
                  <span className="ml-1 text-grayScale-500">vs last month</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
