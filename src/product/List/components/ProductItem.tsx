import React, { ChangeEvent, useCallback } from 'react';
import { IProduct } from '@src/interface/ProductInterface';
import { Link } from 'react-router-dom';

interface IProductItem {
  item: IProduct;
}

const ProductItem = ({ item }: IProductItem) => {
  const getShippingName = useCallback((code: string) => {
    switch (code) {
      case 'BEFORE_PAY': {
        return '선결제';
      }
      case 'DELIVERY_PAY': {
        return '착불';
      }
      case 'SOLD_OUT': {
        return '품절';
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
        <Link to={`/product/modify/${item.sid}`} className="text-sm text-blue-600 cursor-pointer bg-transparent">
          수정
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
