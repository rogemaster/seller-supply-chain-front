import React from 'react';
import loadable from '@loadable/component';

const Navigation = loadable(() => import('@src/components/Navigation'));
const ProductSearchBar = loadable(() => import('@src/product/components/List/ProductSearchBar'));
const ProductList = loadable(() => import('@src/product/components/List/ProductList'));

const ProductIndex = () => {
  return (
    <>
      <Navigation pageName="상품리스트" />
      <ProductSearchBar />
      <ProductList />
    </>
  );
};

export default ProductIndex;
