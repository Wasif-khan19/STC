import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { LoginLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { buttonVariants } from "../ui/button";
import { DropdownMenuDemo } from "../ui/Avatardispaly";

interface navArray {
    label: string,
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
  return (
    <header className='body-font'>
    <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
        <Image src={"/STC.png"} width={120} height={100} alt="Saras trading co. STC rice, spices, pulses, dry fruits"/>
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-1">
        {navArray.map((item, index)=>(
             // eslint-disable-next-line react/jsx-key
             <Link key={index} href={item.href} className="cursor-pointer hover:underline mr-5 text-[#253D4E] hover:text-[#3BB77E] font-semibold text-lg duration-300">{item.label}</Link>
        ))}
      </nav>
      <div className="flex space-x-4 items-center">
        <div className="flex items-center space-x-3">
        <Search size={23}/>
        <ShoppingCart size={23}/>
        </div>
        {!user ? (<div>
            <LoginLink className={buttonVariants({variant: 'outline', size: 'sm'})} style={{outline:'#3BB77E'}}>
                Sign in
            </LoginLink>
            <RegisterLink className={buttonVariants({variant: 'secondary',size: 'sm'})} style={{ backgroundColor: '#3BB77E', color: 'white' }}>
                Sign up
            </RegisterLink>
        </div>):(
          <DropdownMenuDemo UserData={user}/>
        )}
      </div>
    </div>
  </header>
  );
};

export default Navbar; 