
import React from "react";
import { Bell, Search, HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./SidebarProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const { sidebarOpen } = useSidebar();

  return (
    <header className={cn(
      "h-16 bg-white border-b border-grayScale-200 flex items-center justify-between px-4 transition-all duration-300",
      sidebarOpen ? "ml-64" : "ml-16"
    )}>
      <div className="flex items-center">
        <div className="relative flex max-w-md items-center">
          <Search className="absolute left-2.5 h-4 w-4 text-grayScale-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-9 bg-grayScale-50 border-grayScale-200 focus-visible:ring-brandBlue"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <HelpCircle className="h-5 w-5 text-grayScale-600" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5 text-grayScale-600" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {[1, 2, 3].map((i) => (
                <DropdownMenuItem key={i} className="p-0">
                  <button className="flex w-full cursor-default items-center px-4 py-3 hover:bg-grayScale-50">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-brandBlue-light flex items-center justify-center">
                        <Bell className="h-5 w-5 text-brandBlue" />
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm font-medium text-grayScale-800">
                        New lead assigned
                      </p>
                      <p className="text-xs text-grayScale-500">
                        John Doe assigned a new lead to you
                      </p>
                      <p className="mt-1 text-xs text-grayScale-400">5 min ago</p>
                    </div>
                  </button>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm font-medium text-brandBlue">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full">
              <div className="h-8 w-8 rounded-full bg-grayScale-200 flex items-center justify-center">
                <span className="text-sm font-medium text-grayScale-700">JD</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="hidden text-sm font-medium text-grayScale-800 md:inline-block">
                  John Doe
                </span>
                <ChevronDown className="h-4 w-4 text-grayScale-500" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
