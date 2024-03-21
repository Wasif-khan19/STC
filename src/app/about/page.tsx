import { Footer } from "@/components/Views/Footer";
import Navbar from "@/components/Views/Navbar";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="body-font py-32">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
           <h1 className="text-5xl text-center font-extrabold mt-32 md:mt-20 lg:mt-20 text-[#253D4E]">
              ABOUT US
            </h1>
          <div className="text-center lg:w-2/3 w-full text-lg font-normal mt-5">
            <p className="leading-relaxed">
              STC is a reputable Food Processing and Trading Company
              specializing in a diverse range of culinary products such as
              Spices (Plain & Recipe Mix), Salt, Frozen Food, Desserts (Dry
              Mix), Vermicelli, Dry Fruits, Cooking Paste, Pickles, Nuts,
              Lentils, Rice, Herbal Products, and other Allied Food items. These
              products are available in both consumer and bulk packaging,
              proudly bearing the STC brand name. With a legacy spanning many
              years in the industry and a highly efficient teamwork approach,
              STC Products have garnered widespread acceptance from satisfied
              customers across the globe. In the competitive landscape, STC. Our
              value-added services have fostered enduring business relationships
              with our esteemed customers. STC Products has earned the trust and
              satisfaction of customers, and our dedicated team consistently
              upholds commitments, regardless of volume. We are eager to further
              fortify our long-term business relationships.
            </p>
            <p className="leading-relaxed py-14">
              Our Mission is dedicated to achieving unparalleled excellence as a
              trustworthy and committed Agro Food Sourcing & Buying house,
              consistently surpassing the expectations of our customers,
              producers, and suppliers through the delivery of premium-quality
              food products and accessible service solutions. We understand that
              our mission attains significance when it becomes the primary
              reason for our customers, producers, and suppliers to choose us.
              Our enduring commitment to the industry and our stakeholders, both
              past and present, relies on our collective experience and our
              steadfast belief in the values of honesty, integrity, reliability,
              long-standing relationships, and trust. Our genuine commitment is
              to continuously exceed your expectations, and we eagerly embrace
              this challenge. Welcome to our sustainable food business service
              enterprise; we highly value the trust you place in us as your
              long-term business partners. As dedicated suppliers in the food
              business, we look forward to enhancing your business endeavors and
              adding substantial value to our collaborative efforts.
            </p>
            <h1 className="text-5xl text-center font-extrabold text-[#253D4E]">
              FACTS
            </h1>
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-[#3BB77E]">
                    30+
                  </h2>
                  <p className="leading-relaxed">PRODUCTS</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-[#3BB77E]">
                    10+
                  </h2>
                  <p className="leading-relaxed">COUNTRIES</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-[#3BB77E]">
                    100+
                  </h2>
                  <p className="leading-relaxed">EMPLOYES</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-[#3BB77E]">
                    20
                  </h2>
                  <p className="leading-relaxed">YEARS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
