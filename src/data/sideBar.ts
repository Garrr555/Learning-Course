import {
  Book,
  LayoutDashboard,
  Compass,
  PencilRulerIcon,
  UserCircle2Icon,
} from "lucide-react";

export const SideBarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/workspace",
  },
  {
    title: "My Learning",
    icon: Book,
    path: "/workspace/my-course",
  },
  {
    title: "Explore Course",
    icon: Compass,
    path: "/#",
  },
  {
    title: "AI Tools",
    icon: PencilRulerIcon,
    path: "/#",
  },
  {
    title: "Billing",
    icon: LayoutDashboard,
    path: "/#",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/#",
  },
];
