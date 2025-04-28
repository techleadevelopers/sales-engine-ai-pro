
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  job: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  name: "John Doe",
  email: "john.doe@example.com",
  company: "Acme Inc",
  job: "Marketing Director",
  phone: "+1 (555) 123-4567",
};

const Settings: React.FC = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  function onSubmit(data: ProfileFormValues) {
    toast.success("Profile updated");
    console.log(data);
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-grayScale-800">Settings</h1>
        <p className="text-grayScale-500">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-5 w-full md:w-auto">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        
        {/* Profile Settings */}
        <TabsContent value="profile" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account details and public profile information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-2/3 space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="job"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="america-new-york">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>North America</SelectLabel>
                              <SelectItem value="america-new-york">Eastern Time (US & Canada)</SelectItem>
                              <SelectItem value="america-chicago">Central Time (US & Canada)</SelectItem>
                              <SelectItem value="america-denver">Mountain Time (US & Canada)</SelectItem>
                              <SelectItem value="america-los-angeles">Pacific Time (US & Canada)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Europe</SelectLabel>
                              <SelectItem value="europe-london">London, Edinburgh</SelectItem>
                              <SelectItem value="europe-paris">Paris, Berlin, Rome</SelectItem>
                              <SelectItem value="europe-athens">Athens, Helsinki</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Asia</SelectLabel>
                              <SelectItem value="asia-tokyo">Tokyo, Osaka</SelectItem>
                              <SelectItem value="asia-shanghai">Beijing, Shanghai</SelectItem>
                              <SelectItem value="asia-kolkata">Mumbai, New Delhi</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center justify-start">
                      <div className="relative">
                        <div className="h-32 w-32 rounded-full bg-grayScale-200 flex items-center justify-center text-4xl text-grayScale-400">
                          JD
                        </div>
                        <Button className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-1 bg-brandBlue hover:bg-brandBlue-dark text-white" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                          </svg>
                        </Button>
                      </div>
                      <p className="mt-4 text-sm text-grayScale-500">
                        Allowed formats: JPG, PNG, or GIF. Max size: 2MB
                      </p>
                      <Button className="mt-4" type="button" variant="outline">
                        Upload New Image
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-brandBlue hover:bg-brandBlue-dark text-white">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notification Settings */}
        <TabsContent value="notifications" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <p className="text-sm text-grayScale-500 mb-4">
                    Select the types of email notifications you'd like to receive
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-leads" className="font-medium">New leads</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive notifications when new leads are added to your pipeline
                        </p>
                      </div>
                      <Switch id="email-leads" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-tasks" className="font-medium">Task reminders</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive notifications for upcoming and overdue tasks
                        </p>
                      </div>
                      <Switch id="email-tasks" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-reports" className="font-medium">Weekly reports</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive a summary of your performance every Monday
                        </p>
                      </div>
                      <Switch id="email-reports" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-product" className="font-medium">Product updates</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive information about new features and improvements
                        </p>
                      </div>
                      <Switch id="email-product" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-marketing" className="font-medium">Marketing emails</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive tips, tricks, and promotional content
                        </p>
                      </div>
                      <Switch id="email-marketing" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Push Notifications</h3>
                  <p className="text-sm text-grayScale-500 mb-4">
                    Configure browser notifications when you're logged in
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-leads" className="font-medium">New leads</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive notifications when new leads are added to your pipeline
                        </p>
                      </div>
                      <Switch id="push-leads" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-messages" className="font-medium">New messages</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive notifications for new messages and comments
                        </p>
                      </div>
                      <Switch id="push-messages" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-activities" className="font-medium">Team activities</Label>
                        <p className="text-sm text-grayScale-500">
                          Receive notifications when team members make important changes
                        </p>
                      </div>
                      <Switch id="push-activities" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-brandBlue hover:bg-brandBlue-dark text-white">
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Security Settings */}
        <TabsContent value="security" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your password and account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Change Password</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  Update your password regularly to keep your account secure
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                    <p className="text-xs text-grayScale-500 mt-2">
                      Password must be at least 8 characters and include a number and a special character
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                <Button className="mt-4 bg-brandBlue hover:bg-brandBlue-dark text-white">
                  Update Password
                </Button>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  Enhance your account security by enabling two-factor authentication
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-factor authentication is currently disabled</p>
                    <p className="text-sm text-grayScale-500">
                      Adding a second authentication factor increases your account's security
                    </p>
                  </div>
                  <Button variant="outline">
                    Enable 2FA
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium">Session Management</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  Review and manage your active sessions
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded bg-brandBlue-light flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brandBlue">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" x2="16" y1="21" y2="21"></line>
                          <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">MacBook Pro - Chrome</p>
                        <div className="flex text-sm text-grayScale-500 mt-1">
                          <p>San Francisco, CA</p>
                          <span className="mx-1">•</span>
                          <p>Current Session</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Current
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded bg-grayScale-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-grayScale-600">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                          <line x1="12" x2="12.01" y1="18" y2="18"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">iPhone 13 - Safari</p>
                        <div className="flex text-sm text-grayScale-500 mt-1">
                          <p>New York, NY</p>
                          <span className="mx-1">•</span>
                          <p>Last active 2 days ago</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                      Log out
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Billing Settings */}
        <TabsContent value="billing" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Billing & Subscription</CardTitle>
              <CardDescription>
                Manage your subscription plan and payment information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Current Plan</h3>
                <div className="mt-4 border rounded-lg p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-xl font-semibold">Professional Plan</h4>
                        <span className="ml-3 px-2.5 py-0.5 text-xs font-medium bg-brandBlue-light text-brandBlue rounded-full">
                          Current Plan
                        </span>
                      </div>
                      <p className="text-grayScale-500 mt-1">
                        $49/month • 15 users included
                      </p>
                    </div>
                    <Button variant="outline">
                      Upgrade Plan
                    </Button>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border rounded p-3 text-center">
                      <p className="text-sm text-grayScale-500">Users</p>
                      <p className="text-lg font-medium">12 / 15</p>
                    </div>
                    <div className="border rounded p-3 text-center">
                      <p className="text-sm text-grayScale-500">Storage</p>
                      <p className="text-lg font-medium">45 GB / 50 GB</p>
                    </div>
                    <div className="border rounded p-3 text-center">
                      <p className="text-sm text-grayScale-500">API Calls</p>
                      <p className="text-lg font-medium">8K / 10K</p>
                    </div>
                    <div className="border rounded p-3 text-center">
                      <p className="text-sm text-grayScale-500">Next Billing</p>
                      <p className="text-lg font-medium">Aug 12, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Payment Methods</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  Manage your payment information and transaction history
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded bg-grayScale-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-grayScale-600">
                          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-grayScale-500">Expires 12/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                        Remove
                      </Button>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <line x1="12" x2="12" y1="5" y2="19"></line>
                          <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                    Add Payment Method
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Billing History</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  View and download your past invoices
                </p>
                
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-grayScale-50 text-grayScale-700">
                      <tr>
                        <th className="px-4 py-3 text-sm font-medium">Invoice</th>
                        <th className="px-4 py-3 text-sm font-medium">Amount</th>
                        <th className="px-4 py-3 text-sm font-medium">Date</th>
                        <th className="px-4 py-3 text-sm font-medium">Status</th>
                        <th className="px-4 py-3 text-sm font-medium sr-only">Download</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-grayScale-200">
                      {[
                        { id: "INV-2023-007", amount: "$49.00", date: "Jul 1, 2023", status: "Paid" },
                        { id: "INV-2023-006", amount: "$49.00", date: "Jun 1, 2023", status: "Paid" },
                        { id: "INV-2023-005", amount: "$49.00", date: "May 1, 2023", status: "Paid" },
                      ].map((invoice) => (
                        <tr key={invoice.id} className="text-sm">
                          <td className="px-4 py-4 font-medium">{invoice.id}</td>
                          <td className="px-4 py-4">{invoice.amount}</td>
                          <td className="px-4 py-4">{invoice.date}</td>
                          <td className="px-4 py-4">
                            <span className="px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                              {invoice.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-right">
                            <Button variant="ghost" size="sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" x2="12" y1="15" y2="3"></line>
                              </svg>
                              <span className="sr-only">Download</span>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* API Settings */}
        <TabsContent value="api" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>
                Manage your API keys and access to external services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">API Keys</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  Create and manage API keys for integrating with our services
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Production Key</p>
                      <p className="text-sm text-grayScale-500">Created on May 12, 2023</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Show Key
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                        Revoke
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Development Key</p>
                      <p className="text-sm text-grayScale-500">Created on Jun 23, 2023</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Show Key
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                        Revoke
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <line x1="12" x2="12" y1="5" y2="19"></line>
                      <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                    Generate New API Key
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium">Webhooks</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  Configure endpoints to receive events from our system in real-time
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Lead Created Events</p>
                      <p className="text-sm text-grayScale-500">https://api.example.com/webhooks/leads</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                        Remove
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <line x1="12" x2="12" y1="5" y2="19"></line>
                      <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                    Add Webhook Endpoint
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium">Integrations</h3>
                <p className="text-sm text-grayScale-500 mb-4">
                  Connect your account with third-party services
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        S
                      </div>
                      <div>
                        <p className="font-medium">Slack</p>
                        <p className="text-sm text-grayScale-500">Send notifications to your Slack workspace</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        G
                      </div>
                      <div>
                        <p className="font-medium">Google Calendar</p>
                        <p className="text-sm text-grayScale-500">Sync tasks with your Google Calendar</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        Z
                      </div>
                      <div>
                        <p className="font-medium">Zoom</p>
                        <p className="text-sm text-grayScale-500">Automatically create Zoom meetings for calls</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-brandBlue hover:bg-brandBlue-dark text-white">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
