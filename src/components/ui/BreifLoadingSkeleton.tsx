import Link from 'next/link'
import React from 'react'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BreifLoadingSkeleton = () => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className='lg:w-1/2 w-full space-y-5'>
                <Skeleton className='w-full lg:h-auto h-64 object-cover object-center rounded'/>
            </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              <Link href="/products" className="hover:underline"><Skeleton className='w-16' height={10}/></Link>
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            <Skeleton className='w-16' height={10}/>
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStar size={22} color="#FDC040" />
              <IoMdStarHalf size={22} color="#FDC040" />
                <span className="text-gray-600 ml-3">4.5</span>
              </span>
            </div>
            <Skeleton className='w-16' count={10}/>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <Skeleton className='w-16' height={20}/>
              </div>
            </div>
            <div>
              <button className="ml-auto text-white bg-[#3BB77E] border-0 py-2 px-6 focus:outline-none hover:bg-[#FDC040] rounded">
                <Skeleton/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default BreifLoadingSkeleton