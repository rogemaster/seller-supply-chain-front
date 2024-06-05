export interface IProduct {
  sid: string,
  title: string,
  price: number,
  shipping_code: string,
  shipping_cost: number,
  register_date: string
}

export interface IProductInformationProvisionNoticeItem {
  key: string;
  name: string;
  value: string;
}
export interface ProductInformationProvisionNotice {
  [key: string]: IProductInformationProvisionNoticeItem[];
}