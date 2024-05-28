import {ProductData} from "@src/mock/ProductData";
import React from "react";
import loadable from "@loadable/component";

const ProductItem = loadable(() => import('@src/product/components/ProductItem'));

const ProductList = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 rounded-sm bg-gray-200 sm:grid-cols-9">
        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <input type="checkbox" id="product_all" name="product_all" />
        </div>
        <div className="p-2.5 xl:p-5 text-center">
          <h5 className="text-sm font-bold uppercase">상품코드</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5 col-span-3">
          <h5 className="text-sm font-bold uppercase">상품명</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-bold uppercase">가격</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-bold uppercase">배송비</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-bold uppercase">등록일자</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-bold uppercase">수정</h5>
        </div>
      </div>
      {ProductData.map((item) => (
        <ProductItem key={item.sid} item={item} />
      ))}
    </div>
  )
}

export default ProductList;