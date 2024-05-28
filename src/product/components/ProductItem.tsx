import React, { ChangeEvent, useCallback } from 'react';
import { IProduct } from '@src/interface/ProductInterface';

interface IProductItem {
  item: IProduct;
}

const ProductItem = ({ item }: IProductItem) => {
  const getShippingCost = useCallback((code: string) => {
    switch (code) {
      case 'free': {
        return (
          <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
            <p className="text-sm text-black">선결제</p>
          </div>
        );
      }
      case '': {
        return (
          <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
            <p className="text-sm text-black">착불</p>
          </div>
        );
      }
      default: {
        return (
          <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
            <p className="text-sm text-black">무료</p>
          </div>
        );
      }
    }
  }, []);

  const onCheckProduct = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const sid = e.target.id;
    console.log(sid);
  }, []);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-9 border-b border-gray-100">
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5 text-base">
        <input type="checkbox" id={item.sid} name={item.sid} onChange={onCheckProduct} />
      </div>
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
        <p className="text-sm text-black">{item.sid}</p>
      </div>
      <div className="flex items-center gap-3 p-2.5 xl:p-5 col-span-3">
        <p className="text-sm text-black">{item.title}</p>
      </div>
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
        <p className="text-sm text-black">{item.price}</p>
      </div>
      {getShippingCost(item.shipping_code)}
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
        <p className="text-sm text-black">{item.insert_date}</p>
      </div>
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
        <button className="text-sm text-blue-600 cursor-pointer bg-transparent">수정</button>
      </div>
    </div>
  );
};

export default ProductItem;
