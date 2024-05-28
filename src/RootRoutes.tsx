import React from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';
import useAuthStore from '@src/store';
import AppLayout from '@src/layout/AppLayout';

const Members = loadable(() => import('@src/members/routes'));
const Main = loadable(() => import('@src/main/routes'));
const Product = loadable(() => import('@src/product/routes'));

const RootRoutes = () => {
  const auth = useAuthStore((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={auth ? <Navigate replace to="/main" /> : <Navigate to="/members/login" />} />
        <Route path="/members/*" element={<Members />} />
      </Routes>
      <AppLayout>
        <Routes>
          <Route path="/main/*" element={<Main />} />
          <Route path="/product/*" element={<Product />} />
        </Routes>
      </AppLayout>
    </>
  );
};

export default RootRoutes;
