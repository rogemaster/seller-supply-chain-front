import React from 'react';
import { HeaderMainSubMenuOptions } from '@src/shared/MenuOptions';

interface IMainSubMenu {
  menu: string | null;
  isOpen: boolean;
}

const HeaderMainSubMenus = ({ menu, isOpen }: IMainSubMenu) => {
  console.log('서브메뉴', menu);

  return (
    <div
      className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
      style={{ display: isOpen ? '' : 'none' }}
    >
      {menu && HeaderMainSubMenuOptions[menu].map((subMenu) => (
        <div key={subMenu.key} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
          <div className="flex-auto">
            <a href="#" className="block font-semibold text-gray-900">
              {subMenu.name}
              <span className="absolute inset-0"></span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderMainSubMenus;
