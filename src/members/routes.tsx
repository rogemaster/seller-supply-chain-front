import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';

const Login = loadable(() => import('@src/members/Login/index'));
const SignUp = loadable(() => import('@src/members/Sign/index'));

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default UserRoutes;
