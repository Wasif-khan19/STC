import { Footer } from "@/components/Views/Footer";
import Navbar from "@/components/Views/Navbar";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import { saucesProductsFromSanity } from "@/components/utils/apicalling";
import { allProductFetcherFromSanityType } from "@/components/utils/types";

const Sauces = async () => {
  const data = await saucesProductsFromSanity() as allProductFetcherFromSanityType;
  return (
    <>
    <Navbar/>
      <div className="py-3">
        <h1 className="my-2 text-5xl text-[#253D4E] text-center font-bold">
          Sauces & Pickles
        </h1>
        <p className="text-center text-[#253D4E] py-1">Check What We Have</p>
        <ProductGridViewer ProducData={data.result} />
      </div>
      <Footer/>
    </>
  );
};

export default Sauces
