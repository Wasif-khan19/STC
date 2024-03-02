import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#C5EAD9] body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <Image
            src={"/STC.png"}
            width={40}
            height={40}
            alt="logo"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          />
        </a>
        <p className="text-xs text-[#253D4E] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2024 Saras Trading Company - All Rights Reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href={`https://www.facebook.com/profile.php?id=100055704636250`}
            target="_blank"
            className="text-[#253D4E] "
          >
            <FaFacebookSquare size={22} />
          </Link>
          <Link
            href={`https://www.instagram.com/muhammad_wasif19/`}
            target="_blank"
            className="ml-3 text-[#253D4E] "
          >
            <BiLogoInstagramAlt size={22} />
          </Link>
          <Link
            href={`https://twitter.com/WasifKh05957381`}
            target="_blank"
            className="ml-3 text-[#253D4E] "
          >
            <FaXTwitter size={22} />
          </Link>
          <Link
            href={`https://www.linkedin.com/in/muhammad-wasif-48282b274/`}
            target="_blank"
            className="ml-3 text-[#253D4E] "
          >
            <FaLinkedin size={22} />
          </Link>
        </span>
      </div>
    </footer>
  );
};
