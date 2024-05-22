import React, {ReactNode, useState} from 'react';
import loadable from "@loadable/component";

const Sidebar = loadable(() => import('@src/components/Sidebar'))
const Header = loadable(() => import('@src/components/Header'))

interface IAppProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-blend-darken:text-gray-400">
      <div className="flex h-screen overflow-hidden">
      {/* 사이드바 */}
        <Sidebar sidebarOpen={sidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* 헤더 */}
          <Header />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
