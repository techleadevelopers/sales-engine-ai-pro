
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare, Send, User, Phone, Video } from "lucide-react";

const messagesData = [
  {
    id: 1,
    name: "Marcus Wilson",
    avatar: "MW",
    company: "TechFlow Inc.",
    lastMessage: "Thanks for the update on the proposal. Let's discuss tomorrow.",
    time: "10:42 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: "SC",
    company: "Global Retail Solutions",
    lastMessage: "Can you provide more information on the enterprise package?",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 3,
    name: "Diego Martinez",
    avatar: "DM",
    company: "Innovate Media Group",
    lastMessage: "I've reviewed the contract and everything looks good.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    name: "Jennifer Taylor",
    avatar: "JT",
    company: "Summit Health Partners",
    lastMessage: "Let me know when you're available for a quick call.",
    time: "Monday",
    unread: false,
  },
  {
    id: 5,
    name: "Michael Okonkwo",
    avatar: "MO",
    company: "Fusion Hospitality",
    lastMessage: "We're interested in expanding our subscription.",
    time: "Feb 25",
    unread: false,
  },
];

const Messages = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" /> New Message
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <CardDescription>Manage your customer conversations</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {messagesData.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50 ${
                      message.id === 1 ? "bg-blue-50" : ""
                    }`}
                  >
                    <Avatar className="h-10 w-10">
                      <div className="bg-blue-500 text-white flex items-center justify-center h-full w-full text-sm font-medium">
                        {message.avatar}
                      </div>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium truncate">{message.name}</p>
                        <p className="text-xs text-gray-500">{message.time}</p>
                      </div>
                      <p className="text-xs text-gray-500 truncate mb-1">{message.company}</p>
                      <p className="text-xs truncate">{message.lastMessage}</p>
                    </div>
                    {message.unread && (
                      <Badge className="bg-blue-500 h-2 w-2 rounded-full p-0 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="md:col-span-2">
          <CardHeader className="border-b pb-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <div className="bg-blue-500 text-white flex items-center justify-center h-full w-full text-sm font-medium">
                    MW
                  </div>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Marcus Wilson</CardTitle>
                  <CardDescription>TechFlow Inc. • Online</CardDescription>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <div className="bg-blue-500 text-white flex items-center justify-center h-full w-full text-xs font-medium">
                    MW
                  </div>
                </Avatar>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Hi, I'm interested in learning more about your enterprise solution. Our company is
                    expanding and we need a robust sales management system.
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:30 AM</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Hello Marcus! I'd be happy to discuss our enterprise solutions with you.
                    Our system is designed to scale with your business needs.
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:35 AM</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    I've attached a proposal with a breakdown of our enterprise features and pricing.
                    Would you like to schedule a demo to see everything in action?
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:36 AM</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <div className="bg-blue-500 text-white flex items-center justify-center h-full w-full text-xs font-medium">
                    MW
                  </div>
                </Avatar>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Thanks for the update on the proposal. Let's discuss tomorrow.
                    I'd definitely like to schedule a demo with our team.
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:42 AM</span>
                </div>
              </div>
            </div>
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
