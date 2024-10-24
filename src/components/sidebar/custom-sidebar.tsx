import { useSidebar } from "@/components/ui/sidebar"
import { MenuIcon } from "lucide-react"


function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return (
      <div>
        <button  
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          <MenuIcon size={25} color={"#8F8F90"}/> 
        </button>
      </div>
  )
}

export default SidebarTrigger
