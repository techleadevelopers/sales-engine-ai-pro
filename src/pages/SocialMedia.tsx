
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Instagram, Facebook, Linkedin, Twitter, Calendar, Plus } from "lucide-react";

const socialData = [
  { name: "Jan", facebook: 4000, instagram: 2400, twitter: 2400, linkedin: 1800 },
  { name: "Feb", facebook: 3000, instagram: 1398, twitter: 2210, linkedin: 2000 },
  { name: "Mar", facebook: 2000, instagram: 9800, twitter: 2290, linkedin: 2500 },
  { name: "Apr", facebook: 2780, instagram: 3908, twitter: 2000, linkedin: 2100 },
  { name: "May", facebook: 1890, instagram: 4800, twitter: 2181, linkedin: 2300 },
  { name: "Jun", facebook: 2390, instagram: 3800, twitter: 2500, linkedin: 2400 },
  { name: "Jul", facebook: 3490, instagram: 4300, twitter: 2100, linkedin: 2800 },
];

const upcomingPosts = [
  { platform: "instagram", title: "Product showcase", date: "Today, 2:30 PM", status: "Scheduled" },
  { platform: "facebook", title: "Customer spotlight", date: "Tomorrow, 10:00 AM", status: "Draft" },
  { platform: "twitter", title: "Industry news update", date: "Apr 30, 9:15 AM", status: "Scheduled" },
  { platform: "linkedin", title: "Quarterly results", date: "May 2, 11:00 AM", status: "Draft" },
];

const performanceData = [
  { name: "Instagram", engagement: 8.4, followers: 12500, growth: 5.2 },
  { name: "Facebook", engagement: 6.1, followers: 45200, growth: 2.1 },
  { name: "Twitter", engagement: 7.2, followers: 22800, growth: 3.8 },
  { name: "LinkedIn", engagement: 4.5, followers: 18600, growth: 7.3 },
];

const SocialMedia = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Social Media Management</h1>
        <Button>
          <Calendar className="mr-2 h-4 w-4" /> Schedule Post
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instagram</CardTitle>
            <Instagram className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5k</div>
            <p className="text-xs text-muted-foreground">
              +1,248 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Facebook</CardTitle>
            <Facebook className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2k</div>
            <p className="text-xs text-muted-foreground">
              +986 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Twitter</CardTitle>
            <Twitter className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22.8k</div>
            <p className="text-xs text-muted-foreground">
              +1,124 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">LinkedIn</CardTitle>
            <Linkedin className="h-4 w-4 text-blue-700" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.6k</div>
            <p className="text-xs text-muted-foreground">
              +1,584 this month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Social Media Growth</CardTitle>
                <CardDescription>Followers across platforms over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart
                    data={socialData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} />
                    <Line type="monotone" dataKey="facebook" stroke="#4267B2" strokeWidth={2} />
                    <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} />
                    <Line type="monotone" dataKey="linkedin" stroke="#0077B5" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Posts</CardTitle>
                <CardDescription>Your scheduled content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPosts.map((post, i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4">
                        {post.platform === "instagram" && <Instagram className="h-8 w-8 text-pink-500" />}
                        {post.platform === "facebook" && <Facebook className="h-8 w-8 text-blue-600" />}
                        {post.platform === "twitter" && <Twitter className="h-8 w-8 text-blue-400" />}
                        {post.platform === "linkedin" && <Linkedin className="h-8 w-8 text-blue-700" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{post.title}</h4>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" /> Add New Post
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>Engagement rates and follower growth by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={performanceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="engagement" name="Engagement (%)" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="growth" name="Growth (%)" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>Platform-specific metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Select a platform above to view detailed analytics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Calendar</CardTitle>
              <CardDescription>Manage and schedule your social media posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Calendar view will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SocialMedia;
