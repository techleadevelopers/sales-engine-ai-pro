
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Calendar, 
  Filter, 
  MoreHorizontal, 
  PlusCircle, 
  Search, 
  Target 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const campaignData = [
  {
    id: 1,
    name: "Q2 Email Newsletter",
    status: "active",
    type: "Email",
    leads: 423,
    conversion: 5.2,
    budget: 1200,
    spent: 650,
    startDate: "2023-04-01",
    endDate: "2023-06-30",
  },
  {
    id: 2,
    name: "Summer Sale Social Ads",
    status: "active",
    type: "Social",
    leads: 852,
    conversion: 7.8,
    budget: 3500,
    spent: 2200,
    startDate: "2023-06-01",
    endDate: "2023-08-15",
  },
  {
    id: 3,
    name: "Product Launch Webinar",
    status: "scheduled",
    type: "Event",
    leads: 0,
    conversion: 0,
    budget: 5000,
    spent: 1500,
    startDate: "2023-07-15",
    endDate: "2023-07-15",
  },
  {
    id: 4,
    name: "Google Ads - Core Products",
    status: "active",
    type: "PPC",
    leads: 1204,
    conversion: 3.7,
    budget: 7500,
    spent: 4200,
    startDate: "2023-01-01",
    endDate: "2023-12-31",
  },
  {
    id: 5,
    name: "Trade Show Booth",
    status: "completed",
    type: "Event",
    leads: 87,
    conversion: 12.6,
    budget: 8500,
    spent: 8500,
    startDate: "2023-03-10",
    endDate: "2023-03-12",
  },
  {
    id: 6,
    name: "Content Marketing - Blog Series",
    status: "active",
    type: "Content",
    leads: 327,
    conversion: 2.9,
    budget: 2000,
    spent: 1100,
    startDate: "2023-02-01",
    endDate: "2023-08-01",
  },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let bgColor;
  
  switch (status) {
    case "active":
      bgColor = "bg-green-100 text-green-700";
      break;
    case "scheduled":
      bgColor = "bg-blue-100 text-blue-700";
      break;
    case "completed":
      bgColor = "bg-gray-100 text-gray-700";
      break;
    default:
      bgColor = "bg-gray-100 text-gray-700";
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const Campaigns: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-grayScale-800">Marketing Campaigns</h1>
          <p className="text-grayScale-500">Manage and track all your marketing initiatives</p>
        </div>
        <Button className="bg-brandBlue hover:bg-brandBlue-dark text-white">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Campaign
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <CardHeader className="pb-3">
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Total results from all active campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col p-4 bg-grayScale-50 rounded-lg">
                <span className="text-sm text-grayScale-500 mb-1">Total Leads</span>
                <span className="text-2xl font-semibold">2,893</span>
                <span className="text-xs text-green-500 mt-1">+12.5% from last month</span>
              </div>
              <div className="flex flex-col p-4 bg-grayScale-50 rounded-lg">
                <span className="text-sm text-grayScale-500 mb-1">Avg. Conversion</span>
                <span className="text-2xl font-semibold">4.8%</span>
                <span className="text-xs text-red-500 mt-1">-2.3% from last month</span>
              </div>
              <div className="flex flex-col p-4 bg-grayScale-50 rounded-lg">
                <span className="text-sm text-grayScale-500 mb-1">Budget Spent</span>
                <span className="text-2xl font-semibold">$17,650</span>
                <span className="text-xs text-grayScale-500 mt-1">of $27,700 total</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <TabsList className="flex-shrink-0">
            <TabsTrigger value="all">All Campaigns</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-grayScale-500" />
              <Input
                type="search"
                placeholder="Search campaigns..."
                className="w-full pl-9 max-w-xs"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Leads</TableHead>
                    <TableHead className="text-right">Conversion</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Timeline</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaignData.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>
                        <StatusBadge status={campaign.status} />
                      </TableCell>
                      <TableCell>{campaign.type}</TableCell>
                      <TableCell className="text-right">{campaign.leads.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{campaign.conversion}%</TableCell>
                      <TableCell className="text-right">
                        <div>${campaign.spent.toLocaleString()}</div>
                        <div className="text-xs text-grayScale-500">
                          of ${campaign.budget.toLocaleString()}
                        </div>
                        <div className="w-full h-1 bg-grayScale-100 rounded-full mt-1">
                          <div
                            className="h-1 bg-brandBlue rounded-full"
                            style={{
                              width: `${Math.min(100, (campaign.spent / campaign.budget) * 100)}%`,
                            }}
                          ></div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end">
                          <Calendar className="h-3.5 w-3.5 text-grayScale-500 mr-1" />
                          <span className="text-sm">
                            {new Date(campaign.startDate).toLocaleDateString("en-US", { 
                              month: "short", 
                              day: "numeric" 
                            })}
                            {" - "}
                            {new Date(campaign.endDate).toLocaleDateString("en-US", { 
                              month: "short", 
                              day: "numeric" 
                            })}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit campaign</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active" className="mt-0">
          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Leads</TableHead>
                    <TableHead className="text-right">Conversion</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Timeline</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaignData
                    .filter((campaign) => campaign.status === "active")
                    .map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">{campaign.name}</TableCell>
                        <TableCell>{campaign.type}</TableCell>
                        <TableCell className="text-right">{campaign.leads.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{campaign.conversion}%</TableCell>
                        <TableCell className="text-right">
                          <div>${campaign.spent.toLocaleString()}</div>
                          <div className="text-xs text-grayScale-500">
                            of ${campaign.budget.toLocaleString()}
                          </div>
                          <div className="w-full h-1 bg-grayScale-100 rounded-full mt-1">
                            <div
                              className="h-1 bg-brandBlue rounded-full"
                              style={{
                                width: `${Math.min(100, (campaign.spent / campaign.budget) * 100)}%`,
                              }}
                            ></div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end">
                            <Calendar className="h-3.5 w-3.5 text-grayScale-500 mr-1" />
                            <span className="text-sm">
                              {new Date(campaign.startDate).toLocaleDateString("en-US", { 
                                month: "short", 
                                day: "numeric" 
                              })}
                              {" - "}
                              {new Date(campaign.endDate).toLocaleDateString("en-US", { 
                                month: "short", 
                                day: "numeric" 
                              })}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="mt-0">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="py-12 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-brandBlue-light flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-brandBlue" />
                </div>
                <h3 className="text-lg font-medium">Scheduled Campaigns</h3>
                <p className="text-grayScale-500 max-w-md mt-2">
                  You have 1 scheduled campaign ready to launch. Create more campaigns to plan your marketing activities.
                </p>
                <Button className="mt-6 bg-brandBlue hover:bg-brandBlue-dark text-white">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-0">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="py-12 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-grayScale-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-grayScale-600" />
                </div>
                <h3 className="text-lg font-medium">Campaign History</h3>
                <p className="text-grayScale-500 max-w-md mt-2">
                  You have 1 completed campaign. View detailed analytics and insights to improve future campaigns.
                </p>
                <Button variant="outline" className="mt-6">
                  View Campaign Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Campaigns;
