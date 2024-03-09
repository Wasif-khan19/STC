import BriefProduct from "@/components/Views/BriefProduct";
import { Footer } from "@/components/Views/Footer";
import Navbar from "@/components/Views/Navbar";
import {
  allProductFetcherFromSanity,
  detailOfSingleProductsFromSanity,
} from "@/components/utils/apicalling";
import {
  allProductFetcherFromSanityType,
  singleProductType,
} from "@/components/utils/types";
import { Suspense } from "react";

export async function generateStaticParams() {
  const data =
    (await allProductFetcherFromSanity()) as allProductFetcherFromSanityType;

  return data.result.map((item: singleProductType) => {
    slug: item.slug.current;
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const data = (await detailOfSingleProductsFromSanity(
    slug
  )) as allProductFetcherFromSanityType;

  return {
    title: data.result[0].productname,
  };
}

const brief = async ({ params }: { params: { slug: string } }) => {
  return (
    <Suspense>
      <Detail slug={params.slug} />
    </Suspense>
  );
};

async function Detail({ slug }: { slug: string }) {
  const data = await detailOfSingleProductsFromSanity(slug);
  return (
    <>
      <Navbar />
      <BriefProduct product={data.result[0]} />
      <Footer />
    </>
  );
}

export default brief;
