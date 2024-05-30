import React from 'react';
import { ProductData } from '@src/mock/ProductData';
import loadable from '@loadable/component';

const Navigation = loadable(() => import('@src/components/Navigation'));
const ProductSearchBar = loadable(() => import('@src/product/List/components/ProductSearchBar'));
const ProductListHeader = loadable(() => import('@src/product/List/components/ProductTab'));
const ProductListTitle = loadable(() => import('@src/product/List/components/ProductHeader'));
const ProductItem = loadable(() => import('@src/product/List/components/ProductItem'));

interface IProductList {
  pageName: string;
}

const ProductList = ({ pageName }: IProductList) => {
  return (
    <>
      <Navigation pageName={pageName} />
      {/* 상품리스트 검색바 */}
      <ProductSearchBar />
      {/* 상품리스트 테이블 */}
      <div className="rounded-sm border border-gray-100 bg-white px-5 pt-6 pb-2.5 shadow sm:px-7 xl:pb-1">
        <ProductListHeader />
        <div className="flex flex-col">
          <ProductListTitle />
          {ProductData.map((item) => (
            <ProductItem key={item.sid} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
