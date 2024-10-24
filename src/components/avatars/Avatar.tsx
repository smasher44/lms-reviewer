import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const AvatarSample = () => {

  return (
    <Avatar >
      <AvatarImage src="./src/assets" />
      <AvatarFallback>GE</AvatarFallback>
    </Avatar>
  )
}

export default AvatarSample;