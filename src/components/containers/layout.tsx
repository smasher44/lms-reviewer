import { SidebarProvider } from "@/components/ui/sidebar"
import { BellIcon, CircleHelpIcon} from "lucide-react";
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import SidebarTrigger from "../sidebar/custom-sidebar";
import AvatarSample from "../avatars/Avatar";
import { Separator } from "@/components/ui/separator"


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen">
        <div className="flex px-2 py-1 justify-between items-center">
          <SidebarTrigger/>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row gap-4">
              <CircleHelpIcon color="#8F8F90"/>
              <BellIcon color="#8F8F90"/>
            </div>
            <AvatarSample/>
            <span className="text-base font-medium">John Doe</span>
          </div>
        </div>
        <Separator />
        {children}
      </main>
    </SidebarProvider>
  )
}
