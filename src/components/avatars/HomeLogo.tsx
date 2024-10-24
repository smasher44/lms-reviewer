import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HomeLogo = () => {

  return (
    <Avatar className={`cursor-pointer rounded-none pr-[5px]`}>
      <AvatarImage src="public/assets/sample.png" alt="@shadcn"/>
      <AvatarFallback>BE</AvatarFallback>
    </Avatar>
  )
}

export default HomeLogo;