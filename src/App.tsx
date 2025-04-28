
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/layout/SidebarProvider";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Campaigns from "./pages/Campaigns";
import Leads from "./pages/Leads";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";
import Analytics from "./pages/Analytics";
import EmailMarketing from "./pages/EmailMarketing";
import SocialMedia from "./pages/SocialMedia";
import CRM from "./pages/CRM";
import LandingPage from "./pages/LandingPage";
import SalesPipeline from "./pages/SalesPipeline";
import Messages from "./pages/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="leads" element={<Leads />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="email-marketing" element={<EmailMarketing />} />
            <Route path="social-media" element={<SocialMedia />} />
            <Route path="crm" element={<CRM />} />
            <Route path="sales-pipeline" element={<SalesPipeline />} />
            <Route path="messages" element={<Messages />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
