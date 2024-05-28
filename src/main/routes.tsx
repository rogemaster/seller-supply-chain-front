import React from 'react';
import AppLayout from '@src/layout/AppLayout';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';

const MainIndex = loadable(() => import('@src/main/index'));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainIndex />} />
    </Routes>
  );
};

export default MainRoutes;
