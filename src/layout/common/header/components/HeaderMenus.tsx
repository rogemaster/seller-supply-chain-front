import React, { useState } from 'react';
import { HeaderMenuOptions } from '@src/shared/MenuOptions';
import HeaderMainMenuItem from '@src/layout/common/header/components/HeaderMainMenuItem';
import useHeaderMenuStore from "@src/layout/common/header/header.store";

// default: text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium
// active: bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium

const HeaderMenus = () => {
  const mainMenu = useHeaderMenuStore((state) => state.mainMenuOptions);

  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {/*{HeaderMenuOptions.map((menu) => (*/}
        {/*  <HeaderMainMenuItem key={menu.key} menu={menu} />*/}
        {/*))}*/}
        {mainMenu.map((menu) => (
          <HeaderMainMenuItem key={menu.key} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default HeaderMenus;
