/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppSidebar } from "@/components/view/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import AppHeader from "@/components/view/AppHeader";

export default function WorkspaceProvider({ children }: any) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <div className="p-10">{children}</div>
      </div>
    </SidebarProvider>
  );
}
