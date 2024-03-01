import { Image } from "sanity";

export interface singleProductTypeDescription {
  _key: string,
  markDefs: any[],
  children: any[],
  _type: string,
  style: string
}

export interface singleProductTypeImage{
    _type: string,
    alt: string,
    _key: string,
    asset: {
      _ref: string,
      _type: string
    }
}

export interface singleProductTypeSlug{
    current: string,
    _type: string
}

export interface singleProductType {
  weight: string;
  description: singleProductTypeDescription[];
  producttype: string;
  image: Image[];
  productname: string;
  quantity: string[];
  price: string;
  slug: singleProductTypeSlug
}
export interface allProductFetcherFromSanityType {
  query: string;
  result: Array<singleProductType>;
}
