import Landingpage from "@/components/Views/LandingPage";
import { allProductFetcherFromSanity } from "@/components/utils/apicalling";
import Image from "next/image";

export default function Home() {
  let data = allProductFetcherFromSanity();
  console.log('data: ', data);
  
  return (
    <>
      <Landingpage />
    </>
  );
}
