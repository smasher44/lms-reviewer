import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="border border-r border-black w-screen">
      <div className="border border-r border-black flex justify-start items-center">
        <SidebarTrigger />
      </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
