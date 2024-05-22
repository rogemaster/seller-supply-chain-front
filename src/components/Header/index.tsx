import React from 'react';
import loadable from '@loadable/component';

const MainSearchInput = loadable(() => import('@src/components/Header/components/MainSearchInput'));
const NotificationAlarm = loadable(() => import('@src/components/NotificationAlarm'));
const UserMenu = loadable(() => import('@src/components/UserMenu'));

const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <MainSearchInput />
        <div className="flex items-center gap-6">
          <NotificationAlarm />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
