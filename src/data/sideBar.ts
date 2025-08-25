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
    path: "/workspace/my-learning",
  },
  {
    title: "Explore Course",
    icon: Compass,
    path: "/workspace/explore",
  },
  {
    title: "AI Tools",
    icon: PencilRulerIcon,
    path: "/#",
  },
  {
    title: "Billing",
    icon: LayoutDashboard,
    path: "/workspace/billing",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/workspace/profile",
  },
];
