
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, BarChart3, Calendar, DollarSign, Clock, ChevronRight } from "lucide-react";

const salesData = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 19000 },
  { name: 'Mar', value: 15000 },
  { name: 'Apr', value: 25000 },
  { name: 'May', value: 23000 },
  { name: 'Jun', value: 29000 },
];

const leadsData = [
  { name: 'Email', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Direct', value: 200 },
  { name: 'Organic', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const conversionData = [
  { name: 'Week 1', value: 65 },
  { name: 'Week 2', value: 58 },
  { name: 'Week 3', value: 72 },
  { name: 'Week 4', value: 80 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-grayScale-800">Dashboard</h1>
          <p className="text-grayScale-500">Overview of your sales and marketing performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-grayScale-700">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button className="bg-brandBlue hover:bg-brandBlue-dark text-white">
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Total Revenue</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">$123,456</h3>
                  <span className="flex items-center text-xs text-green-500 font-medium">
                    <ArrowUpRight className="h-3 w-3" />
                    12.5%
                  </span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-brandBlue-light flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-brandBlue" />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                <div className="h-full bg-brandBlue rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="mt-2 text-xs text-grayScale-500">75% of monthly goal</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Total Leads</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">1,234</h3>
                  <span className="flex items-center text-xs text-green-500 font-medium">
                    <ArrowUpRight className="h-3 w-3" />
                    8.2%
                  </span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-amber-500" />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="mt-2 text-xs text-grayScale-500">68% of monthly goal</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Conversion Rate</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">8.7%</h3>
                  <span className="flex items-center text-xs text-red-500 font-medium">
                    <ArrowDownRight className="h-3 w-3" />
                    2.1%
                  </span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '42%' }}></div>
              </div>
              <p className="mt-2 text-xs text-grayScale-500">42% of monthly goal</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Avg. Response Time</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">4.2 hrs</h3>
                  <span className="flex items-center text-xs text-green-500 font-medium">
                    <ArrowUpRight className="h-3 w-3" />
                    12.5%
                  </span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="mt-2 text-xs text-grayScale-500">85% of monthly goal</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                  cursor={{ fill: 'rgba(0, 123, 255, 0.1)' }}
                />
                <Bar dataKey="value" fill="#007BFF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-grayScale-600">Total Revenue</p>
              <p className="text-lg font-semibold">$123,000</p>
            </div>
            <Button variant="ghost" className="text-sm text-brandBlue hover:text-brandBlue-dark">
              View detailed report
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Distribution by channel</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {leadsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-grayScale-600">Total Leads</p>
              <p className="text-lg font-semibold">1,100</p>
            </div>
            <Button variant="ghost" className="text-sm text-brandBlue hover:text-brandBlue-dark">
              View all
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <Card className="md:col-span-6">
          <CardHeader>
            <CardTitle>Conversion Rates</CardTitle>
            <CardDescription>Weekly lead to customer conversion</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={conversionData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Conversion Rate']}
                  cursor={{ stroke: 'rgba(0, 123, 255, 0.1)', strokeWidth: 10 }}
                />
                <Line type="monotone" dataKey="value" stroke="#007BFF" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-6">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-brandBlue-light flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-brandBlue" />
                  </div>
                  <div>
                    <p className="text-sm text-grayScale-800 font-medium">New lead assigned to your team</p>
                    <p className="text-xs text-grayScale-500">John Doe from XYZ Corp. was assigned to your sales pipeline</p>
                    <p className="text-xs text-grayScale-400 mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-brandBlue hover:text-brandBlue-dark">
              View all activities
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
