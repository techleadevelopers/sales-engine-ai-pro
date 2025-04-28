
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Filter, 
  MoreHorizontal, 
  PlusCircle, 
  Search, 
  Users,
  ArrowDownUp,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const leadsData = [
  {
    id: 1,
    name: "John Smith",
    company: "Acme Inc",
    email: "john.smith@acme.com",
    phone: "+1 (555) 123-4567",
    status: "qualified",
    source: "Website",
    score: 87,
    owner: "Sarah Johnson",
    lastActivity: "2023-06-25T14:30:00",
    createdAt: "2023-05-12T09:45:00",
  },
  {
    id: 2,
    name: "Emma Davis",
    company: "TechCorp",
    email: "emma.davis@techcorp.com",
    phone: "+1 (555) 234-5678",
    status: "new",
    source: "LinkedIn",
    score: 64,
    owner: "Michael Brown",
    lastActivity: "2023-06-24T11:15:00",
    createdAt: "2023-06-15T15:20:00",
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    company: "Global Solutions Ltd.",
    email: "carlos@globalsolutions.com",
    phone: "+1 (555) 345-6789",
    status: "contacted",
    source: "Referral",
    score: 92,
    owner: "Sarah Johnson",
    lastActivity: "2023-06-23T16:45:00",
    createdAt: "2023-02-28T10:30:00",
  },
  {
    id: 4,
    name: "Lisa Wang",
    company: "Innovative Systems",
    email: "lisa.wang@innosys.com",
    phone: "+1 (555) 456-7890",
    status: "disqualified",
    source: "Trade Show",
    score: 35,
    owner: "David Chen",
    lastActivity: "2023-06-10T13:20:00",
    createdAt: "2023-05-05T14:15:00",
  },
  {
    id: 5,
    name: "Michael Johnson",
    company: "DataFlex Analytics",
    email: "m.johnson@dataflex.com",
    phone: "+1 (555) 567-8901",
    status: "qualified",
    source: "Webinar",
    score: 78,
    owner: "Michael Brown",
    lastActivity: "2023-06-21T09:10:00",
    createdAt: "2023-04-18T11:45:00",
  },
  {
    id: 6,
    name: "Sophie Martin",
    company: "EcoTech Innovations",
    email: "sophie@ecotech.com",
    phone: "+1 (555) 678-9012",
    status: "contacted",
    source: "Email Campaign",
    score: 71,
    owner: "Sarah Johnson",
    lastActivity: "2023-06-22T15:30:00",
    createdAt: "2023-06-01T09:00:00",
  },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let bgColor;
  
  switch (status) {
    case "new":
      bgColor = "bg-blue-100 text-blue-700";
      break;
    case "contacted":
      bgColor = "bg-yellow-100 text-yellow-700";
      break;
    case "qualified":
      bgColor = "bg-green-100 text-green-700";
      break;
    case "disqualified":
      bgColor = "bg-red-100 text-red-700";
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

const LeadScoreBadge: React.FC<{ score: number }> = ({ score }) => {
  let bgColor;
  
  if (score >= 80) {
    bgColor = "bg-green-100 text-green-700";
  } else if (score >= 60) {
    bgColor = "bg-yellow-100 text-yellow-700";
  } else {
    bgColor = "bg-red-100 text-red-700";
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
      {score}
    </span>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const Leads: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-grayScale-800">Lead Management</h1>
          <p className="text-grayScale-500">Track and manage your sales leads</p>
        </div>
        <Button className="bg-brandBlue hover:bg-brandBlue-dark text-white">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-grayScale-500">Total Leads</p>
                <h3 className="text-2xl font-bold">1,428</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-brandBlue-light flex items-center justify-center">
                <Users className="h-5 w-5 text-brandBlue" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-grayScale-500">New Leads</p>
                <h3 className="text-2xl font-bold">64</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-grayScale-500">Qualified Leads</p>
                <h3 className="text-2xl font-bold">257</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-grayScale-500">Conversion Rate</p>
                <h3 className="text-2xl font-bold">18%</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <ArrowDownUp className="h-5 w-5 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <TabsList className="flex-shrink-0">
            <TabsTrigger value="all">All Leads</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="contacted">Contacted</TabsTrigger>
            <TabsTrigger value="qualified">Qualified</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-grayScale-500" />
              <Input
                type="search"
                placeholder="Search leads..."
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
              <div className="flex items-center justify-between border-b border-grayScale-200 p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">6 leads</p>
                  <Badge variant="outline" className="text-xs">
                    Showing all
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="recent">
                    <SelectTrigger className="h-8 w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="name">Name (A-Z)</SelectItem>
                        <SelectItem value="score">Lead Score</SelectItem>
                        <SelectItem value="activity">Last Activity</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Name / Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-center">Lead Score</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leadsData.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div className="font-medium">{lead.name}</div>
                        <div className="text-sm text-grayScale-500">{lead.company}</div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={lead.status} />
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{lead.email}</div>
                        <div className="text-xs text-grayScale-500">{lead.phone}</div>
                      </TableCell>
                      <TableCell className="text-center">
                        <LeadScoreBadge score={lead.score} />
                      </TableCell>
                      <TableCell>{lead.source}</TableCell>
                      <TableCell>
                        <div className="text-sm">{formatDate(lead.lastActivity)}</div>
                        <div className="text-xs text-grayScale-500">{formatTime(lead.lastActivity)}</div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit lead</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Add task</DropdownMenuItem>
                            <DropdownMenuItem>Send email</DropdownMenuItem>
                            <DropdownMenuItem>Log activity</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">Delete lead</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between border-t border-grayScale-200 p-4">
                <p className="text-sm text-grayScale-500">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">6</span> of{" "}
                  <span className="font-medium">1,428</span> leads
                </p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="new" className="mt-0">
          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Name / Company</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-center">Lead Score</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leadsData
                    .filter((lead) => lead.status === "new")
                    .map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-grayScale-500">{lead.company}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{lead.email}</div>
                          <div className="text-xs text-grayScale-500">{lead.phone}</div>
                        </TableCell>
                        <TableCell className="text-center">
                          <LeadScoreBadge score={lead.score} />
                        </TableCell>
                        <TableCell>{lead.source}</TableCell>
                        <TableCell className="text-right">
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

        <TabsContent value="contacted" className="mt-0">
          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Name / Company</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-center">Lead Score</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leadsData
                    .filter((lead) => lead.status === "contacted")
                    .map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-grayScale-500">{lead.company}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{lead.email}</div>
                          <div className="text-xs text-grayScale-500">{lead.phone}</div>
                        </TableCell>
                        <TableCell className="text-center">
                          <LeadScoreBadge score={lead.score} />
                        </TableCell>
                        <TableCell>{lead.source}</TableCell>
                        <TableCell className="text-right">
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

        <TabsContent value="qualified" className="mt-0">
          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Name / Company</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-center">Lead Score</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leadsData
                    .filter((lead) => lead.status === "qualified")
                    .map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-grayScale-500">{lead.company}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{lead.email}</div>
                          <div className="text-xs text-grayScale-500">{lead.phone}</div>
                        </TableCell>
                        <TableCell className="text-center">
                          <LeadScoreBadge score={lead.score} />
                        </TableCell>
                        <TableCell>{lead.source}</TableCell>
                        <TableCell className="text-right">
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
      </Tabs>
    </div>
  );
};

export default Leads;
