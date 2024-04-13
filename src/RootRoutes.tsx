import React from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';
import useAuthStore from '@src/store';

const Users = loadable(() => import('@src/users/routes'));

const RootRoutes = () => {
  const auth = useAuthStore((state) => state.auth);

  console.log('auth', auth);

  return (
    <Routes>
      <Route path="/" element={auth ? <Navigate replace to="/main" /> : <Navigate to="/users/login" />} />
      <Route path="/users/*" element={<Users />} />
    </Routes>
  );
};

export default RootRoutes;
