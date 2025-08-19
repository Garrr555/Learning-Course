import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "../ui/sidebar";

export default function AppHeader({ hideSidebar = false }) {
  return (
    <div className="p-4 flex justify-between items-center shadow-sm">
      {!hideSidebar && <SidebarTrigger />}
      <div className="relative p-[4px] rounded-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-300 to-blue-600 spin-slow"></div>
        <div className="relative bg-white text-purple-400 rounded-full flex items-center justify-center w-full h-full">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
