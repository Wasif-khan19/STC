import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-[#C5EAD9]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
           <Link href={'/'}><Image alt="" src={'/STC.png'} width={150} height={150}/></Link>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-0 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'/'} className="text-gray-600 hover:text-gray-800 hover:underline hover:cursor-pointer">Home</Link>
              </li>
              <li>
              <Link href={'/about'} className="text-gray-600 hover:text-gray-800 hover:underline hover:cursor-pointer">About Us</Link>
              </li>
              <li>
              <Link href={'/contact'} className="text-gray-600 hover:text-gray-800 hover:underline hover:cursor-pointer">Contact Us</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
              PRODUCTS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'/rice'} target="_top" className="text-gray-600 hover:text-gray-800 hover:underline hover:cursor-pointer">Rice</Link>
              </li>
              <li>
              <Link href={'/spices'} target="_top" className="text-gray-600 hover:text-gray-800 hover:underline hover:cursor-pointer">Spices</Link>
              </li>
              <li>
              <Link href={'/desserts'} target="_top" className="text-gray-600 hover:text-gray-800 hover:underline hover:cursor-pointer">Desserts</Link>
              </li>
              <li>
              <Link href={'/oil'} target="_top" className="text-gray-600 hover:text-gray-800 hover:underline hover:cursor-pointer">Oil & Ghees</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
              FOLLOW US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'https://www.facebook.com/profile.php?id=100055704636250'} target="_blank" className="hover:underline hover:cursor-pointer text-[#0284c7]">Facebook</Link>
              </li>
              <li>
              <Link href={'https://www.instagram.com/muhammad_wasif19/'} target="_blank" className="hover:underline hover:cursor-pointer text-pink-700">Instagram</Link>
              </li>
              <li>
              <Link href={'https://www.linkedin.com/in/muhammad-wasif-48282b274/'} target="_blank" className="hover:underline hover:cursor-pointer text-[#1e40af]">LinkedIn</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
              CONTACT US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className="text-gray-600 text-sm mt-2 cursor-default">Email: Stcindus1@gmail.com</p>
              </li>
              <li>
              <p className="text-gray-600 text-sm mt-2 cursor-default">Phone: +923013542694</p>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#FDC040]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
          <p className="text-black text-xs px-2 py-1 rounded text-center">
            © Copyright 2024. All Rights Reserved. 
            <Link
              href="https://www.linkedin.com/in/muhammad-wasif-48282b274/"
              className="text-black ml-1 hover:underline font-medium"
              target="_blank"
            >
              Developed by Muhammad Wasif
            </Link>
          </p> 
        </div>
      </div>
    </footer>
  );
};
