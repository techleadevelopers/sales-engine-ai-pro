import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Database, Users, Phone, FileText, Plus, Search, Mail } from "lucide-react";

const customers = [
  { name: "Alex Johnson", email: "alex@example.com", company: "Acme Inc", status: "Active", value: "$12,450", lastContact: "2 days ago" },
  { name: "Sarah Williams", email: "sarah@example.com", company: "Tech Corp", status: "Active", value: "$8,200", lastContact: "5 days ago" },
  { name: "Michael Brown", email: "michael@example.com", company: "Global Services", status: "Inactive", value: "$5,100", lastContact: "2 weeks ago" },
  { name: "Emily Davis", email: "emily@example.com", company: "Innovate LLC", status: "Active", value: "$24,600", lastContact: "1 day ago" },
  { name: "David Wilson", email: "david@example.com", company: "Build Co", status: "Pending", value: "$3,200", lastContact: "4 days ago" },
];

const deals = [
  { name: "Enterprise Software Package", client: "Acme Inc", value: "$42,500", stage: "Proposal", probability: "70%", closingDate: "May 15, 2023" },
  { name: "Consulting Services", client: "Tech Corp", value: "$12,800", stage: "Negotiation", probability: "80%", closingDate: "Apr 28, 2023" },
  { name: "Annual Maintenance Contract", client: "Global Services", value: "$18,500", stage: "Closed Won", probability: "100%", closingDate: "Apr 10, 2023" },
  { name: "Cloud Migration Project", client: "Innovate LLC", value: "$36,200", stage: "Discovery", probability: "40%", closingDate: "Jun 5, 2023" },
  { name: "Hardware Upgrade", client: "Build Co", value: "$9,800", stage: "Qualified", probability: "50%", closingDate: "May 22, 2023" },
];

const activities = [
  { type: "Call", description: "Follow-up call with Sarah Williams", date: "Today, 11:30 AM", completed: false },
  { type: "Email", description: "Send proposal to Acme Inc", date: "Today, 2:00 PM", completed: false },
  { type: "Meeting", description: "Product demo with Tech Corp", date: "Apr 28, 10:00 AM", completed: false },
  { type: "Task", description: "Update client database", date: "Apr 29", completed: false },
  { type: "Call", description: "Quarterly review with Global Services", date: "May 2, 3:30 PM", completed: false },
];

const pipelineData = [
  { name: "Discovery", value: 5 },
  { name: "Qualified", value: 8 },
  { name: "Proposal", value: 12 },
  { name: "Negotiation", value: 7 },
  { name: "Closed Won", value: 9 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const CRM = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">CRM Dashboard</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Contact
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              +42 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Deals</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">
              $284,500 total value
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Due Today</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              3 overdue
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calls Scheduled</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              5 for this week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="contacts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>
        <TabsContent value="contacts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Contacts</CardTitle>
              <CardDescription>Manage your customer relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.name}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-muted-foreground">{customer.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{customer.company}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={customer.status === "Active" ? "default" : 
                                  customer.status === "Inactive" ? "secondary" : "outline"}
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.value}</TableCell>
                      <TableCell>{customer.lastContact}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="deals" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Active Deals</CardTitle>
                <CardDescription>Your current sales pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Deal</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Stage</TableHead>
                      <TableHead>Closing Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {deals.map((deal) => (
                      <TableRow key={deal.name}>
                        <TableCell className="font-medium">{deal.name}</TableCell>
                        <TableCell>{deal.client}</TableCell>
                        <TableCell>{deal.value}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={deal.stage === "Closed Won" ? "default" : 
                                   deal.stage === "Negotiation" ? "secondary" : "outline"}
                          >
                            {deal.stage}
                          </Badge>
                        </TableCell>
                        <TableCell>{deal.closingDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View All Deals</Button>
              </CardFooter>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Sales Pipeline</CardTitle>
                <CardDescription>Deal distribution by stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pipelineData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pipelineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Activities</CardTitle>
              <CardDescription>Your upcoming tasks and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, i) => (
                  <div key={i} className="flex items-center">
                    <div className="mr-4">
                      {activity.type === "Call" && <Phone className="h-8 w-8 text-blue-500" />}
                      {activity.type === "Email" && <Mail className="h-8 w-8 text-green-500" />}
                      {activity.type === "Meeting" && <Users className="h-8 w-8 text-purple-500" />}
                      {activity.type === "Task" && <FileText className="h-8 w-8 text-amber-500" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{activity.description}</h4>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm">
                        Complete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CRM;
