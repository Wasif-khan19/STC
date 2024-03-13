import { Footer } from "@/components/Views/Footer";
import Navbar from "@/components/Views/Navbar";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import { oilProductsFromSanity } from "@/components/utils/apicalling";
import { allProductFetcherFromSanityType } from "@/components/utils/types";

const Oil = async () => {
  const data = await oilProductsFromSanity() as allProductFetcherFromSanityType;
  return (
    <>
    <Navbar/>
      <div className="py-32">
        <h1 className="my-2 text-5xl text-[#253D4E] text-center font-bold">
          Oil & Ghees
        </h1>
        <p className="text-center text-[#253D4E] py-1">Check What We Have</p>
        <ProductGridViewer ProducData={data.result} />
      </div>
      <Footer/>
    </>
  );
};

export default Oil
