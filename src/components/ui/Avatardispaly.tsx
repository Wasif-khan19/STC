import {
    Speech,
    LifeBuoy,
    LogOut,
    Mail,
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
import { KindeUser, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from "next/link"

export function DropdownMenuDemo({UserData}:{UserData:KindeUser}) {
    
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
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>{UserData.given_name}{" "}{UserData.family_name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>{UserData.email}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Speech className="mr-2 h-4 w-4" />
                    <Link target="_blank" href={"/products"}>GitHub</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <Link target="_blank" href={"/products"}>Support</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};  