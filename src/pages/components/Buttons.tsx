import { Button } from "@/components/ui/button"


function Buttons() { 
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen"> 
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export default Buttons
