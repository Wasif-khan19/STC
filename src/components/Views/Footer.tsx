import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#C5EAD9] body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <Image src={"/STC.png"} width={40} height={40} alt="logo" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"/>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© Saras Trading Company —
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">Registered</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-400">

      </a>
      <a className="ml-3 text-gray-400">

      </a>
      <a className="ml-3 text-gray-400">

      </a>
      <a className="ml-3 text-gray-400">

      </a>
    </span>
  </div>
</footer>
  );
};
