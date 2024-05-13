import React, { ReactNode } from 'react';
import loadable from "@loadable/component";

const MainHeader = loadable(() => import('@src/layout/common/header'))
const MainFooter = loadable(() => import('@src/layout/common/footer'))

interface IAppProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
};

export default AppLayout;
