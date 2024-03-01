import { FC } from "react"
import { singleProductType } from "../utils/types"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { urlForImage } from "../../../sanity/lib/image"

const ProductCard: FC<{ product: singleProductType }> = ({ product }) => {
    return (
        <div className="p-4 w-full md:w-1/3">
            <Link href={`/brief/${product.slug.current}`}>
            <div className="h-full border-2 border-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                    className=" lg:h-48 md:h-36 w-full object-cover object-center"
                    src={urlForImage(product.image[0])}
                    alt='image'
                    width={200}
                    height={200}
                />
                <div className="p-6 text-center">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1 text-gray-400">CATEGORY</h2>
                    <h1 className="text-2xl font-medium text-black mb-3">{product.productname}</h1>
                    <p className="leading-relaxed mb-3 truncate">{product.productname}</p>
                    <div className="flex items-center flex-wrap">
                        <div
                            className="text-white bg-[#3BB77E] hover:bg-[#FDC040] rounded-md py-2 px-2 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            6
                        </span>

                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default ProductCard