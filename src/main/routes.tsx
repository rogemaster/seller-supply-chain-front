import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import loadable from '@loadable/component';
import AppLayout from '@src/layout/common/AppLayout';

const Dashboard = loadable(() => import('./Dashboard/index'));

const MainRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </AppLayout>
  );
};

export default MainRoutes;
