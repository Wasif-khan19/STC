export interface singleProductTypeDescription {
  _key: string,
  markDefs: any[],
  children: any[],
  _type: string,
  style: string
}

export interface singleProductType {
  weight: string;
  description: singleProductTypeDescription[];
  producttype: string;
  image: any[];
  productname: string;
  quantity: string[];
  price: string;
  slug: any[];
}
export interface allProductFetcherFromSanityType {
  query: string;
  result: Array<singleProductType>;
}
