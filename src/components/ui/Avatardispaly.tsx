import {
    LifeBuoy,
    LogOut,
    Mail,
    Speech,
    User
  } from "lucide-react"
  
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link"
  import { KindeUser, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
  
  export function DropdownMenuDemo({UserData}:{UserData:KindeUser}) {
  
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel className="text-center text-[#3BB77E]">My Account</DropdownMenuLabel>
                <DropdownMenuItem className="hover:bg-[#3BB77E] hover:text-white">
                    <User className="mr-2 h-4 w-4" />
                    <span>{UserData.given_name}{" "}{UserData.family_name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#3BB77E] hover:text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>{UserData.email}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#3BB77E] hover:text-white">
                    <Speech className="mr-2 h-4 w-4" />
                    <Link target="_blank" href={"    "}>About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#3BB77E] hover:text-white">
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <Link target="_blank" href={"     "}>Support</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-[#3BB77E] hover:text-white">
                    <LogOut className="mr-2 h-4 w-4" />
                    <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
  }
  
  