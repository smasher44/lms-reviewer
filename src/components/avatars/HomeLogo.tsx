import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const HomeLogo = ({ props }) => {
  console.log("🚀 ~ HomeLogo ~ props:", props)

  return (
    <Avatar className={`cursor-pointer rounded-none pr-[5px]`}>
      <AvatarImage src="./src/assets/sample.png" />
      <AvatarFallback>BE</AvatarFallback>
    </Avatar>

  )
}

export default HomeLogo;