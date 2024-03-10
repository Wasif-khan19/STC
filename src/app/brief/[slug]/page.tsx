import BriefProduct from "@/components/Views/BriefProduct";
import Navbar from "@/components/Views/Navbar";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import {
  allProductFetcherFromSanity,
  detailOfSingleProductsFromSanity,
} from "@/components/utils/apicalling";
import {
  allProductFetcherFromSanityType,
  singleProductType,
} from "@/components/utils/types";
import { Suspense } from "react";
import { dataset } from "../../../../sanity/env";
import { Footer } from "@/components/Views/Footer";
import BreifLoadingSkeleton from "@/components/ui/BreifLoadingSkeleton";
import LoadingComponent from "@/components/ui/LoadingComponent";

export async function generateStaticParams() {
  const data =
    (await allProductFetcherFromSanity()) as allProductFetcherFromSanityType;

  return data.result.map((item: singleProductType) => ({
    slug: item.slug.current,
  }));
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
    <Suspense
      fallback={
        <div>
          <BreifLoadingSkeleton />
          <LoadingComponent isCarousel={true} cardLimit={3} />
        </div>
      }
    >
      <Detail slug={params.slug} />
    </Suspense>
  );
};

async function Detail({ slug }: { slug: string }) {
  const data = (await Promise.all([
    detailOfSingleProductsFromSanity(slug),
    allProductFetcherFromSanity(),
  ])) as allProductFetcherFromSanityType[];
  return (
    <>
      <Navbar />
      <BriefProduct product={data[0].result[0]} />
      <ProductGridViewer ProducData={data[1].result.slice(3, 6)} />
      <Footer />
    </>
  );
}

export default brief;
