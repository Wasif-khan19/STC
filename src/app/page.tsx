import Landingpage from "@/components/Views/LandingPage";
import OurStory from "@/components/Views/OurStory";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import ShopDetails from "@/components/Views/ShopDetails";
import LoadingComponent from "@/components/ui/LoadingComponent";
import { allProductFetcherFromSanity } from "@/components/utils/apicalling";
import { allProductFetcherFromSanityType } from "@/components/utils/types";
import { Suspense } from "react";

export default async function Home() {
  let data =
    (await allProductFetcherFromSanity()) as allProductFetcherFromSanityType;
  return (
    <>
      <Landingpage />
      <OurStory />
      <Suspense fallback={
        <LoadingComponent isCarousel={true} cardLimit={3}/>
      }>
        <Carousel/>
      </Suspense>
      <ShopDetails />
    </>
  );
}

async function Carousel(){
  let data = await allProductFetcherFromSanity() as allProductFetcherFromSanityType;

  return<ProductGridViewer ProducData={data.result.slice(0, 3)} />
}