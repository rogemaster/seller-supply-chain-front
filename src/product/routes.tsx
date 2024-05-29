import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';

const ProductList = loadable(() => import('@src/product/index'));

const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/list" element={<ProductList />} />
      <Route path="/register" element={<div></div>} />
      <Route path="/modify/:sid" element={<div></div>} />
    </Routes>
  );
};

export default ProductRoutes;
