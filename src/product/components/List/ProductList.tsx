import { ProductData } from '@src/mock/ProductData';
import React from 'react';
import loadable from '@loadable/component';
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

const ProductListHeader = loadable(() => import('@src/product/components/List/ProductTab'));
const ProductListTitle = loadable(() => import('@src/product/components/List/ProductHeader'));
const ProductItem = loadable(() => import('@src/product/components/List/ProductItem'));

const ProductList = () => {
  return (
    <div className="rounded-sm border border-gray-100 bg-white px-5 pt-6 pb-2.5 shadow sm:px-7 xl:pb-1">
      <ProductListHeader />
      <div className="flex flex-col">
        <ProductListTitle />
        {ProductData.map((item) => (
          <ProductItem key={item.sid} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
