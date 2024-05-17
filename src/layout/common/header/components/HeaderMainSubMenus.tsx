import React, { useEffect, useState } from 'react';
import { HeaderMainSubMenuOptions } from '@src/shared/MenuOptions';
import useHeaderMenuStore from '@src/layout/common/header/header.store';

interface IMainSubMenu {
  menu: string | null;
}

const HeaderMainSubMenus = ({ menu }: IMainSubMenu) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mainMenuOptions = useHeaderMenuStore((state) => state.mainMenuOptions);

  useEffect(() => {
    const findMenu = mainMenuOptions.find((option) => option.key === menu);
    if (findMenu) {
      setIsOpen(findMenu?.show || false);
    }
  }, [menu]);

  return (
    <div
      className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
      style={{ display: isOpen ? '' : 'none' }}
    >
      {menu &&
        HeaderMainSubMenuOptions[menu].map((subMenu) => (
          <div
            key={subMenu.key}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          >
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
