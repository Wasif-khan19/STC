import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Landingpage = () => {
  return (
    <section className="body-font bg-[#C5EAD9]">
      <div className="container mx-auto flex px-5 py-24 md:py-14 lg:py-0 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-y-4">
          <h1 className="max-w-lg xl:max-w-2xl text-4xl md:text-5xl xl:text-[50px] font-bold text-[#253D4E]">
            All Your Kitchen Essentials
            <br className="hidden lg:inline-block" /> in one Place
          </h1>
          <p className="mb-8 leading-relaxed">
            STC is your ultimate destination for a delectable array of items,
            including spices, pickles, frozen foods, desserts, and herbs. As a
            premier B2B supplier, we provide top-notch products to enhance the
            flavor of your culinary creations.
          </p>
          <div className="flex justify-center">
            <Button className="inline-flex text-white bg-[#3BB77E] border-0 py-2 px-6 focus:outline-none hover:bg-[#FDC040] rounded text-lg">
              Get started&nbsp;
              <ArrowRight size={17} />
            </Button>
          </div>
        </div>
        <Image
          src={"/B.png"}
          width={600}
          height={720}
          alt=""
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        />
      </div>
    </section>
  );
};

export default Landingpage;
