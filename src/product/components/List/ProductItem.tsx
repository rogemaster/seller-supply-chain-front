import React, { ChangeEvent, useCallback } from 'react';
import { IProduct } from '@src/interface/ProductInterface';

interface IProductItem {
  item: IProduct;
}

const ProductItem = ({ item }: IProductItem) => {
  const getShippingName = useCallback((code: string) => {
    switch (code) {
      case 'free': {
        return '선결제';
      }
      case '': {
        return '착불';
      }
      default: {
        return '무료';
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
      {}
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
        <p className="text-sm text-black">{getShippingName(item.shipping_code)}</p>
      </div>
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
        <p className="text-sm text-black">{item.register_date}</p>
      </div>
      <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
        <button className="text-sm text-blue-600 cursor-pointer bg-transparent">수정</button>
      </div>
    </div>
  );
};

export default ProductItem;
