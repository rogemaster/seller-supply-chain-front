import React from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';
import useAuthStore from '@src/store';

const Main = loadable(() => import('@src/main/routes'));
const Members = loadable(() => import('@src/members/routes'));

const RootRoutes = () => {
  const auth = useAuthStore((state) => state.auth);

  console.log('auth', auth);

  return (
    <Routes>
      <Route path="/" element={auth ? <Navigate replace to="/main" /> : <Navigate to="/members/login" />} />
      <Route path="/main/*" element={<Main />} />
      <Route path="/members/*" element={<Members />} />
    </Routes>
  );
};

export default RootRoutes;
