import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';

const ProductList = loadable(() => import('@src/product/List'));
const ProductModify = loadable(() => import('@src/product/Modify'));
const ProductRegister = loadable(() => import('@src/product/Register'));

const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList pageName="상품리스트" />} />
      <Route path="/list" element={<ProductList pageName="상품리스트" />} />
      <Route path="/register" element={<ProductRegister pageName="상품등록" />} />
      <Route path="/modify/:sid" element={<ProductModify />} />
    </Routes>
  );
};

export default ProductRoutes;
