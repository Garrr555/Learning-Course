"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "../ui/button";
import { SideBarOptions } from "@/data/sideBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddNewCourseDialog from "./AddNewCourseDialog";

export function AppSidebar() {
  const path = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex">
        <div className="flex items-center gap-2">
          <Image src={"/logo3.svg"} alt="logo" width={40} height={40} />
          <p className="text-3xl font-bold bg-gradient-to-b from-purple-500 via-blue-500 to-blue-300 bg-clip-text text-transparent">
            One Peace
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <AddNewCourseDialog>
            <Button
              size={"lg"}
              className="text-lg font-semibold bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 via-blue-500 to-blue-300 "
            >
              Create New Course
            </Button>
          </AddNewCourseDialog>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3">
              {SideBarOptions.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    disabled={path.includes(item.path)}
                    className={`p-5 text-[18px] font-semibold hover:text-white ${
                      path.includes(item.path)
                        ? "text-white bg-gradient-to-l from-purple-300 via-blue-300 to-blue-200 transition-all duration-300"
                        : " hover:translate-x-2 hover:bg-gradient-to-r from-purple-200 via-blue-200 to-blue-100 transition-all duration-300 ease-in-out"
                    }`}
                  >
                    <Link href={item.path}>
                      <item.icon className="w-7 h-7" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
