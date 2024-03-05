import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import {LoginLink,RegisterLink,getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "../ui/button";
import { DropdownMenuDemo } from "../ui/Avatardispaly";
import { SearchBar } from "../ui/SearchBar";

interface navArray {
  label: string;
  href: string;
}

const navArray: navArray[] = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Rice",
    href: "/rice",
  },
  {
    label: "Desserts",
    href: "/desserts",
  },
  {
    label: "Spices",
    href: "/spices",
  },
  {
    label: "Sauces",
    href: "/sauces",
  },
  {
    label: "Oil",
    href: "/oil",
  },
];

const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <Image
            src={"/STC.png"}
            width={120}
            height={100}
            alt="Saras trading co. STC rice, spices, pulses, dry fruits"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-2">
          {navArray.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link
              key={index}
              href={item.href}
              className="cursor-pointer hover:underline mr-5 hover:text-[#3BB77E] text-[#504E4E] font-normal text-base duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-3">
            <SearchBar/>
            <ShoppingCart size={23} />
          </div>
          {!user ? (
            <div>
              <LoginLink
                className={buttonVariants({ variant: "outline", size: "sm" })}
                style={{ outline: "#3BB77E" }}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({ variant: "secondary", size: "sm" })}
                style={{ backgroundColor: "#3BB77E", color: "white" }}
              >
                Sign up
              </RegisterLink>
            </div>
          ) : (
            <DropdownMenuDemo UserData={user} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
