import React from 'react';
import { HeaderMenuOptions } from '@src/shared/MenuOptions';
import HeaderMainMenuItem from '@src/layout/common/header/components/HeaderMainMenuItem';

const HeaderMenus = () => {

  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {HeaderMenuOptions.map((menu) => (
          <HeaderMainMenuItem key={menu.key} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default HeaderMenus;
