import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { SearchIcon, ShoppingCart } from 'lucide-react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { DropdownMenuDemo } from '../ui/Avatardispaly';

interface navArray {
    label: string
    href: string
}

const navArray: navArray[] = [
    {
        label:'Home',
        href:'/'
    },
    {
        label:'Products',
        href:'/products'
    },
    {
        label:'About',
        href:'/about'
    },
    {
        label:'Contact',
        href:'/contact'
    },
]


const Navbar = () => {
    const {getUser} = getKindeServerSession();
    const user = getUser();
    console.log('user: ', user);
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href={'/'}>
        <Image src={"/STC.png"} width={120} height={100} alt="Saras trading co. STC rice, spices, pulses, dry fruits"/>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-2">
        {navArray.map((item, index)=>(
             // eslint-disable-next-line react/jsx-key
             <Link href={item.href} className="cursor-pointer hover:underline mr-5 hover:text-[#3BB77E] text-[#504E4E] font-medium text-lg duration-300">{item.label}</Link>
        ))}
      </nav>
    <div className='space-x-3 flex items-center'>
    <ShoppingCart />
    <SearchIcon/>
        {!user ? (<div><LoginLink className={buttonVariants({
            variant:'outline',
            size:'sm'
        })}>Sign in</LoginLink>

        <RegisterLink className={buttonVariants({
            variant:'secondary',
            size:'sm'
        })}>Sign up</RegisterLink></div>):(
            <DropdownMenuDemo/>
        )}
    </div>
  </div>
</header>
  )
}

export default Navbar
