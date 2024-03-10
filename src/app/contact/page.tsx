import { Footer } from "@/components/Views/Footer";
import Navbar from "@/components/Views/Navbar";
import { FanIcon } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-extrabold title-font mb-4">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Leave Us a Message
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#C5EAD9] bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-[#a9fdd6] focus:bg-transparent focus:border-[#37996b] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#C5EAD9] bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-[#a9fdd6] focus:bg-transparent focus:border-[#37996b] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-[#C5EAD9] bg-opacity-50 rounded border border-gray-300 focus:border-[#37996b] focus:bg-transparent focus:ring-2 focus:ring-[#a9fdd6] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#3bb77e] border-0 py-2 px-8 focus:outline-none hover:bg-[#FDC040] rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-[#3bb77e]">Stcindus1@gmail.com</a>
                <p className="leading-normal my-1">
                  +923013542694
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
