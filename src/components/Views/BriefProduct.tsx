"use client";
import React, { useState } from "react";
import { singleProductType } from "../utils/types";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import PortableText from 'react-portable-text';
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import Link from "next/link";

const BriefProduct = ({ product }: { product: singleProductType }) => {
  const [size, setsize] = useState<string>();
  const [activeImageUrl, setActiveImageUrl] = useState<string>(
    urlForImage(product.image[0]) as string
  );
  const [imagesArray, setImagesArray] = useState<string[]>(() => {
    return product.image.map((element) => {
      return urlForImage(element) as string;
    });
  });
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
          width={2000}
          height={2000}
            alt="productImage"
            src={activeImageUrl}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              <Link href="/products" className="hover:underline">Saras Trading Company</Link>
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.productname}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStarHalf size={22} color="#FDC040" />
                <span className="text-gray-600 ml-3">4.5</span>
              </span>
            </div>
            <PortableText className='leading-relaxed' content={product.description}/>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">{product.size}</span>
              </div>
            </div>
            <div>
              <button className="ml-auto text-white bg-[#3BB77E] border-0 py-2 px-6 focus:outline-none hover:bg-[#FDC040] rounded">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefProduct;
