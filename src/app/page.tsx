import Landingpage from "@/components/Views/LandingPage";
import OurStory from "@/components/Views/OurStory";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import ShopDetails from "@/components/Views/ShopDetails";
import { allProductFetcherFromSanity } from "@/components/utils/apicalling";
import { allProductFetcherFromSanityType } from "@/components/utils/types";

export default async function Home() {
  let data =
    (await allProductFetcherFromSanity()) as allProductFetcherFromSanityType;
  return (
    <>
      <Landingpage />
      <ProductGridViewer ProducData={data.result.slice(0, 3)} />
      <OurStory />
      <ShopDetails />
    </>
  );
}
