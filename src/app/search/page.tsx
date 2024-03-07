'use client'

import { Footer } from '@/components/Views/Footer';
import Navbar from '@/components/Views/Navbar';
import ProductGridViewer from '@/components/Views/ProductGridViewer';
import { searchProductsFromSanity } from '@/components/utils/apicalling';
import { allProductFetcherFromSanityType } from '@/components/utils/types';
import { redirect, useSearchParams } from 'next/navigation'

// eslint-disable-next-line @next/next/no-async-client-component
const Search = async () => {
    const params = useSearchParams();
    if(!params.has('query')) redirect('/products')
    const searchVal = params.get('query') as string
    const data = await searchProductsFromSanity(searchVal) as allProductFetcherFromSanityType
    return (
        <>
        <Navbar/>
          <div className="py-3">
            <h1 className="my-2 text-5xl text-[#253D4E] text-center font-bold">
              All Products
            </h1>
            <p className="text-center text-[#253D4E] py-1">Check What We Have</p>
            <ProductGridViewer ProducData={data.result} />
          </div>
          <Footer/>
        </>
      );
}

export default Search
