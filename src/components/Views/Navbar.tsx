import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { SearchBar } from "../ui/SearchBar";
import { Button } from "../ui/button";
import { UserButton, auth } from "@clerk/nextjs";

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

export default async function Navbar() {
  const { userId } = auth();
  return (
    <header className="text-gray-600 body-font bg-white shadow-md fixed top-0 left-0 w-full z-50 opacity-95">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <Image
            src={"/STC.png"}
            width={100}
            height={100}
            alt="Saras trading co. STC rice, spices, pulses, dry fruits"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-2">
          {navArray.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="cursor-pointer hover:underline mr-5 hover:text-[#3BB77E] text-[#504E4E] duration-300 font-normal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-3">
            <SearchBar />
            <div>
              {userId ? (
                <div>
                  <UserButton afterSignOutUrl="/"/>
                </div>
              ) : (
                <div className="space-x-2">
                  <Link href={"/sign-in"}>
                    <Button className="bg-[#3BB77E] hover:bg-[#FDC040]">
                      SignIn
                    </Button>
                  </Link>
                  <Link href={"/sign-up"}>
                    <Button className="bg-[#3BB77E] hover:bg-[#FDC040]">
                      SignUp
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
