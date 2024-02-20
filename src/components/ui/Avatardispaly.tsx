
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"
import Link from "next/link"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center text-[#3BB77E]">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link target="_blank" href={'/'}><DropdownMenuItem>About</DropdownMenuItem></Link>
        <Link target="_blank" href={'/'}><DropdownMenuItem>Contact</DropdownMenuItem></Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem  className="hover:bg-[#3BB77E] hover:text-white">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};
