
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Plus, 
  ChevronRight, 
  DollarSign, 
  Users, 
  Calendar, 
  BarChart 
} from "lucide-react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const stageData = [
  { name: "Lead", value: 38 },
  { name: "Qualified", value: 25 },
  { name: "Meeting", value: 18 },
  { name: "Proposal", value: 12 },
  { name: "Negotiation", value: 8 },
  { name: "Closed", value: 5 },
];

const monthlyData = [
  { name: "Jan", value: 40000 },
  { name: "Feb", value: 55000 },
  { name: "Mar", value: 48000 },
  { name: "Apr", value: 70000 },
  { name: "May", value: 95000 },
  { name: "Jun", value: 78000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"];

const deals = [
  {
    id: 1,
    name: "Enterprise Package - TechFlow Inc.",
    value: 75000,
    stage: "Negotiation",
    probability: 80,
    contact: "Marcus Wilson",
    closeDate: "May 15, 2025",
  },
  {
    id: 2,
    name: "Annual Subscription - Global Retail",
    value: 48000,
    stage: "Proposal",
    probability: 65,
    contact: "Sarah Chen",
    closeDate: "May 22, 2025",
  },
  {
    id: 3,
    name: "Premium Plan - Innovate Media",
    value: 36000,
    stage: "Meeting",
    probability: 40,
    contact: "Diego Martinez",
    closeDate: "June 5, 2025",
  },
  {
    id: 4,
    name: "Custom Solution - Summit Health",
    value: 120000,
    stage: "Qualified",
    probability: 25,
    contact: "Jennifer Taylor",
    closeDate: "June 15, 2025",
  },
  {
    id: 5,
    name: "Expansion Deal - Fusion Hospitality",
    value: 85000,
    stage: "Meeting",
    probability: 55,
    contact: "Michael Okonkwo",
    closeDate: "May 30, 2025",
  },
];

const SalesPipeline = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Sales Pipeline</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Deal
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$364,000</div>
            <p className="text-xs text-muted-foreground">
              +15.8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deals in Pipeline</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              +3 new this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Deal Size</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$13,000</div>
            <p className="text-xs text-muted-foreground">
              +$1,250 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Deal Forecast</CardTitle>
            <CardDescription>Monthly projected revenue from deals</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <RechartsBarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value}`} />
                <Bar dataKey="value" fill="#0088FE" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Pipeline by Stage</CardTitle>
            <CardDescription>Distribution of deals across stages</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} deals`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Deals</CardTitle>
          <CardDescription>Your top deals in the pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deals.map((deal) => (
              <div key={deal.id} className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <div className="flex items-center">
                    <h4 className="font-medium">{deal.name}</h4>
                    <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>${deal.value.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{deal.contact}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{deal.closeDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    className={
                      deal.stage === "Negotiation" ? "bg-blue-500" :
                      deal.stage === "Proposal" ? "bg-indigo-500" :
                      deal.stage === "Meeting" ? "bg-yellow-500" :
                      "bg-gray-500"
                    }
                  >
                    {deal.stage}
                  </Badge>
                  <div className="text-right">
                    <div className="font-medium">{deal.probability}%</div>
                    <div className="text-xs text-muted-foreground">Probability</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesPipeline;
