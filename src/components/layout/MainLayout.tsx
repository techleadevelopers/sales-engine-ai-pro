
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { SidebarProvider } from "./SidebarProvider";

const MainLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-grayScale-50 antialiased">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6">
            <div className="container mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
