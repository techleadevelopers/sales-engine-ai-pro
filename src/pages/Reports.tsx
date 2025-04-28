
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Calendar, 
  PieChart, 
  BarChart3, 
  LineChart, 
  Share2
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
  Legend,
} from "recharts";

const salesData = [
  { name: 'Jan', value: 23000 },
  { name: 'Feb', value: 19000 },
  { name: 'Mar', value: 27000 },
  { name: 'Apr', value: 25000 },
  { name: 'May', value: 32000 },
  { name: 'Jun', value: 37000 },
  { name: 'Jul', value: 42000 },
  { name: 'Aug', value: 39000 },
  { name: 'Sep', value: 43000 },
  { name: 'Oct', value: 47000 },
  { name: 'Nov', value: 51000 },
  { name: 'Dec', value: 58000 },
];

const campaignData = [
  { name: 'Email', value: 27 },
  { name: 'Social', value: 33 },
  { name: 'Direct', value: 15 },
  { name: 'Organic', value: 25 },
];

const COLORS = ['#007BFF', '#28a745', '#ffc107', '#6c757d'];

const conversionData = [
  {
    name: 'Week 1',
    current: 65,
    previous: 58,
  },
  {
    name: 'Week 2',
    current: 72,
    previous: 60,
  },
  {
    name: 'Week 3',
    current: 68,
    previous: 65,
  },
  {
    name: 'Week 4',
    current: 75,
    previous: 68,
  },
];

const productData = [
  { name: 'Product A', value: 45000 },
  { name: 'Product B', value: 37000 },
  { name: 'Product C', value: 28000 },
  { name: 'Product D', value: 18000 },
  { name: 'Product E', value: 12000 },
];

const Reports: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-grayScale-800">Analytics & Reports</h1>
          <p className="text-grayScale-500">Comprehensive insights into your sales and marketing performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-grayScale-700">
            <Calendar className="mr-2 h-4 w-4" />
            Last 12 Months
          </Button>
          <Button className="bg-brandBlue hover:bg-brandBlue-dark text-white">
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Total Revenue</p>
                <h3 className="text-2xl font-bold">$443,000</h3>
                <p className="text-xs text-green-500 font-medium">+12.5% from previous year</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-brandBlue-light flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-brandBlue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Total Leads</p>
                <h3 className="text-2xl font-bold">6,287</h3>
                <p className="text-xs text-green-500 font-medium">+8.2% from previous year</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <LineChart className="h-5 w-5 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Conversion Rate</p>
                <h3 className="text-2xl font-bold">8.7%</h3>
                <p className="text-xs text-green-500 font-medium">+1.3% from previous year</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Share2 className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-grayScale-500">Avg. Deal Size</p>
                <h3 className="text-2xl font-bold">$15,200</h3>
                <p className="text-xs text-red-500 font-medium">-2.1% from previous year</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <PieChart className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Annual Revenue</CardTitle>
              <CardDescription>Monthly revenue for the current year</CardDescription>
            </div>
            <Select defaultValue="current">
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="current">Current Year</SelectItem>
                  <SelectItem value="previous">Previous Year</SelectItem>
                  <SelectItem value="compare">Year-over-Year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Distribution by channel</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={campaignData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {campaignData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <Card className="md:col-span-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Conversion Rates</CardTitle>
              <CardDescription>Weekly lead to customer conversion</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart
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
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  name="Current Period"
                  stroke="#007BFF" 
                  strokeWidth={3} 
                  dot={{ r: 4 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="previous" 
                  name="Previous Period"
                  stroke="#6c757d" 
                  strokeWidth={3} 
                  strokeDasharray="5 5"
                  dot={{ r: 4 }} 
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Revenue by product category</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={productData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" 
                  tickFormatter={(value) => `$${(value / 1000)}k`}
                />
                <YAxis type="category" dataKey="name" />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                  cursor={{ fill: 'rgba(0, 123, 255, 0.1)' }}
                />
                <Bar dataKey="value" fill="#28a745" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
            <CardDescription>Comparison with previous period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Customer Acquisition Cost</span>
                  <span className="text-sm font-medium">$125</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-grayScale-500">vs previous</span>
                  <span className="text-xs text-green-500">-7.2%</span>
                </div>
                <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brandBlue rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Average Response Time</span>
                  <span className="text-sm font-medium">3.2 hrs</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-grayScale-500">vs previous</span>
                  <span className="text-xs text-green-500">-12.5%</span>
                </div>
                <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Customer Lifetime Value</span>
                  <span className="text-sm font-medium">$4,250</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-grayScale-500">vs previous</span>
                  <span className="text-xs text-green-500">+5.3%</span>
                </div>
                <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Sales Cycle Length</span>
                  <span className="text-sm font-medium">32 days</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-grayScale-500">vs previous</span>
                  <span className="text-xs text-red-500">+2.1%</span>
                </div>
                <div className="h-1 w-full bg-grayScale-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campaign Effectiveness</CardTitle>
            <CardDescription>Performance metrics by campaign type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 bg-brandBlue rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email Campaigns</p>
                    <p className="text-xs text-grayScale-500">23 campaigns</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">5.7%</p>
                  <p className="text-xs text-grayScale-500">CTR</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-green-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Social Media</p>
                    <p className="text-xs text-grayScale-500">15 campaigns</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">3.2%</p>
                  <p className="text-xs text-grayScale-500">CTR</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-amber-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 bg-amber-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">PPC Advertising</p>
                    <p className="text-xs text-grayScale-500">8 campaigns</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">2.5%</p>
                  <p className="text-xs text-grayScale-500">CTR</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Content Marketing</p>
                    <p className="text-xs text-grayScale-500">12 campaigns</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">4.1%</p>
                  <p className="text-xs text-grayScale-500">CTR</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Access your saved reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-grayScale-100 flex items-center justify-center mr-3">
                    <BarChart3 className="h-4 w-4 text-grayScale-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Q2 Sales Report</p>
                    <p className="text-xs text-grayScale-500">Last updated 2 days ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-grayScale-100 flex items-center justify-center mr-3">
                    <PieChart className="h-4 w-4 text-grayScale-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Campaign ROI Analysis</p>
                    <p className="text-xs text-grayScale-500">Last updated 1 week ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-grayScale-100 flex items-center justify-center mr-3">
                    <LineChart className="h-4 w-4 text-grayScale-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Lead Conversion Trends</p>
                    <p className="text-xs text-grayScale-500">Last updated 3 days ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-grayScale-100 flex items-center justify-center mr-3">
                    <Share2 className="h-4 w-4 text-grayScale-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sales Channel Performance</p>
                    <p className="text-xs text-grayScale-500">Last updated 5 days ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
