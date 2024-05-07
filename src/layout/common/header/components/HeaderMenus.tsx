import React from 'react';
import { HeaderMenuOptions } from '@src/shared/MenuOptions';

// default: text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium
// active: bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium

const HeaderMenus = () => {
  const onMainMenu = () => {
    console.log('main menu');
  }

  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {HeaderMenuOptions.map((menu) => (
          <div
            key={menu.key}
            className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium select-none cursor-pointer"
            aria-current="page"
            onClick={onMainMenu}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderMenus;
