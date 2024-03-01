import Landingpage from "@/components/Views/LandingPage";
import { allProductFetcherFromSanity } from "@/components/utils/apicalling";
import { allProductFetcherFromSanityType } from "@/components/utils/types";

export default async function Home() {
  let data = await allProductFetcherFromSanity() as allProductFetcherFromSanityType
  console.log('data: ', data.result[0].image);
  return (
    <>
      <Landingpage />
    </>
  );
}
