import ProductGridViewer from "@/components/Views/ProductGridViewer";
import { allProductFetcherFromSanity } from "@/components/utils/apicalling";
import { allProductFetcherFromSanityType } from "@/components/utils/types";

const Products = async () => {
  let data =
    (await allProductFetcherFromSanity()) as allProductFetcherFromSanityType;
  return (
    <>
      <div className="py-3">
        <h1 className="my-2 text-5xl text-[#253D4E] text-center font-bold">
          All Products
        </h1>
        <p className="text-center text-[#253D4E] py-1">Check What We Have</p>
        <ProductGridViewer ProducData={data.result} />
      </div>
    </>
  );
};

export default Products;
