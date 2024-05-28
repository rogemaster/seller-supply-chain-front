import React from 'react';
import loadable from '@loadable/component';

const ProductList = loadable(() => import('@src/product/components/ProductList'));
const ProductListHeader = loadable(() => import('@src/product/components/ProductListHeader'));

const ProductIndex = () => {
  return (
    <div className="rounded-sm border border-gray-100 bg-white px-5 pt-6 pb-2.5 shadow sm:px-7 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black">상품 리스트</h4>
      <ProductListHeader />
      <ProductList />
    </div>
  );
};

export default ProductIndex;
