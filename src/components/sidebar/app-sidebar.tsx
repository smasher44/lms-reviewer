import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import HomeLogo from "../avatars/HomeLogo"
import { Separator } from "@/components/ui/separator"


import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"



import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { state } = useSidebar();
  
  const currenState = () => {
    if(state === "collapsed") {
      return true;
    } else return false
  }

  return (
    <Sidebar collapsible="icon" className="bg-white" style={{ backgroundColor: '#fff' }}> 
      <SidebarHeader className="flex flex-row items-center">
        <HomeLogo props={currenState()}/>
          <h1 className={`text-black origin-left font-medium text-xl duration-200 ${currenState() ? "scale-0" : ""}`}>
            BlazingEdge
          </h1>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-medium text-base">Menu</SidebarGroupLabel>
          <Separator />
          <SidebarGroupContent>
          <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {state === "collapsed" ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon className="w-8 h-8" />
                            <p className="leading-7 text-base">{item.title}</p>
                          </a>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon className="w-8 h-8" />
                        <p className="leading-7 text-base">{item.title}</p>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
