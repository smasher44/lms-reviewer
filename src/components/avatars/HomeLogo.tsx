import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HomeLogo = () => {

  return (
    <Avatar className={`cursor-pointer rounded-none pr-[5px]`}>
      <AvatarImage src="./src/assets/logo.png" alt="@shadcn"/>
      <AvatarFallback>BE</AvatarFallback>
    </Avatar>
  )
}

export default HomeLogo;