import React from 'react';
import { NavLink } from 'react-router-dom';
import loadable from '@loadable/component';
import { MainMenuOptions } from '@src/shared/MenuOptions';

const SidebarMenuItem = loadable(() => import('@src/components/Sidebar/components/SidebarMenuItem'));

interface ISidebarProps {
  sidebarOpen: boolean;
}

const Sidebar = ({ sidebarOpen }: ISidebarProps) => {
  return (
    <div
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-gray-800 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* 사이드 헤드 */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <NavLink to="/">
          {/* 로고 이미지 */}
          <img src="#" alt="로고" />
        </NavLink>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-500">MENU</h3>
            <ul className="mb-6 flex flex-col gap-1">
              {MainMenuOptions.map((mainMenu) => (
                <SidebarMenuItem key={mainMenu.key} mainMenus={mainMenu} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
