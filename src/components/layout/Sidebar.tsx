
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSidebar } from "./SidebarProvider";
import Logo from "./Logo";
import { 
  BarChart3, 
  ChevronLeft,
  Compass, 
  LayoutDashboard, 
  MessageSquare, 
  PieChart, 
  Settings, 
  Users, 
  Target,
  Database,
  Share2,
  TrendingUp,
  Mail,
  LogOut
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  notification?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to, notification }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <NavLink
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-grayScale-600 transition-all hover:text-grayScale-900",
        isActive ? "bg-brandBlue-light text-brandBlue-dark font-medium" : "hover:bg-grayScale-100"
      )}
    >
      <Icon className={cn("h-5 w-5", isActive ? "text-brandBlue" : "text-grayScale-500")} />
      <span>{label}</span>
      {notification && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-brandBlue text-xs font-medium text-white">
          {notification}
        </span>
      )}
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Em um aplicativo real, aqui você faria o logout do usuário (limpar tokens, etc)
    // Por enquanto, apenas redirecionamos para a página de login
    navigate("/login");
  };

  return (
    <aside
      className={cn(
        "bg-white border-r border-grayScale-200 flex-shrink-0 flex-col z-20 fixed inset-y-0 left-0 transition-all duration-300 ease-in-out",
        sidebarOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-grayScale-200">
        <div className={cn("flex items-center", !sidebarOpen && "justify-center w-full")}>
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-brandBlue flex items-center justify-center">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-grayScale-800">SalesEngineAI™</span>
            </div>
            
          ) : (
            <div className="h-8 w-8 rounded-md bg-brandBlue flex items-center justify-center">
              <Compass className="h-5 w-5 text-white" />
            </div>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className={cn(
            "rounded-md p-1 text-grayScale-600 hover:bg-grayScale-100",
            !sidebarOpen && "absolute right-0 top-3 -mr-3 h-6 w-6 translate-x-1/2 bg-white border border-grayScale-200 rotate-180"
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col gap-1 p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-grayScale-300">
        <div className="mb-2">
          {sidebarOpen && <p className="mb-2 px-2 text-xs font-medium text-grayScale-500">OVERVIEW</p>}
          <nav className="flex flex-col gap-1">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/app" />
            <SidebarItem icon={BarChart3} label="Analytics" to="/app/analytics" />
            <SidebarItem icon={PieChart} label="Reports" to="/app/reports" />
          </nav>
        </div>

        <div className="mb-2">
          {sidebarOpen && <p className="mb-2 px-2 text-xs font-medium text-grayScale-500">MARKETING</p>}
          <nav className="flex flex-col gap-1">
            <SidebarItem icon={Target} label="Campaigns" to="/app/campaigns" notification={3} />
            <SidebarItem icon={Mail} label="Email Marketing" to="/app/email-marketing" />
            <SidebarItem icon={Share2} label="Social Media" to="/app/social-media" />
          </nav>
        </div>

        <div className="mb-2">
          {sidebarOpen && <p className="mb-2 px-2 text-xs font-medium text-grayScale-500">SALES</p>}
          <nav className="flex flex-col gap-1">
            <SidebarItem icon={Users} label="Leads" to="/app/leads" notification={12} />
            <SidebarItem icon={TrendingUp} label="Sales Pipeline" to="/app/sales-pipeline" />
            <SidebarItem icon={Database} label="CRM" to="/app/crm" />
          </nav>
        </div>

        <div className="mb-2">
          {sidebarOpen && <p className="mb-2 px-2 text-xs font-medium text-grayScale-500">SUPPORT</p>}
          <nav className="flex flex-col gap-1">
            <SidebarItem icon={MessageSquare} label="Messages" to="/app/messages" notification={5} />
            <SidebarItem icon={Settings} label="Settings" to="/app/settings" />
          </nav>
        </div>
      </div>

      {sidebarOpen ? (
        <div className="mt-auto p-4 border-t border-grayScale-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-grayScale-200 flex items-center justify-center">
                <span className="text-sm font-medium text-grayScale-700">JD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-grayScale-800">John Doe</span>
                <span className="text-xs text-grayScale-500">Administrator</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-md text-grayScale-600 hover:bg-grayScale-100"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-auto p-2 border-t border-grayScale-200 flex justify-center">
          <button
            onClick={handleLogout}
            className="p-2 rounded-md text-grayScale-600 hover:bg-grayScale-100"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
