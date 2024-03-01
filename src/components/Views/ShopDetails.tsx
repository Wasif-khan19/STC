/* eslint-disable @next/next/no-img-element */
import { Mail } from "lucide-react"
import Image from "next/image"
import { IoLogoWhatsapp } from "react-icons/io5";

const ShopDetails = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
          src={"/A.png"}
          width={600}
          height={720}
          alt=""
    />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We Are Here To Respond You!</h1>
      <p className="mb-8 leading-relaxed">Feel free to reach us out</p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Subscribe To Get New Updates</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-[#a9fdd6] focus:bg-transparent focus:border-[#37996b] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex bg-[#3BB77E] hover:bg-[#FDC040] text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">Subscribe</button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
      <div className="flex lg:flex-row md:flex-col">
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <span className="ml-4items-start leading-none flex items-center gap-2">
            <Mail/>
            <span className="title-font font-normal text-sm">Stcindus1@gmail.com</span>
          </span>
        </button>
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
        <span className="ml-4items-start leading-none flex items-center gap-2">
            <IoLogoWhatsapp size={25}/>
            <span className="title-font font-normal text-sm">+923013542694</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default ShopDetails