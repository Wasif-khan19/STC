import Image from "next/image";
import { Button } from "../ui/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { Mail } from "lucide-react";

const ShopDetails = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={1000}
            height={1000}
            className=" object-cover object-center rounded"
            alt="Shop"
            src={"/A.png"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 text-gray-900 font-semibold">
            Subscribe To Get New Updates
          </h1>
          <p className="mb-8 leading-relaxed">
            By subscribing, you will receive timely information about our
            products, services, and any exciting developments. Do not miss out
            on exclusive offers, promotions, and valuable insights. Your
            subscription ensures that you are among the first to know about
            anything new and noteworthy. Stay connected and be part of our
            community by subscribing today!
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-[#a9fdd6] focus:bg-transparent focus:border-[#37996b] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <Button
              size={"lg"}
              className="inline-flex bg-[#3BB77E] hover:bg-[#FDC040] text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex-row lg:flex-row md:flex-row mt-10">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <span className="ml-4items-start leading-none flex items-center gap-2">
                <Mail />
                <span className="title-font font-normal text-sm">
                  Stcindus1@gmail.com
                </span>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-2 md:ml-2 ml-0 md:mt-4 mt-2 lg:mt-2 hover:bg-gray-200 focus:outline-none">
              <span className="ml-4 leading-none flex items-center gap-2">
                <IoLogoWhatsapp size={25} />
                <span className="title-font font-normal text-sm">
                  +923013542694
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
