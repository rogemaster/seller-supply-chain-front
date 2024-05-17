import React, { useCallback, useState } from 'react';
import { IHeaderMenu } from '@src/interface/MainMenuInterface';
import HeaderMainSubMenus from '@src/layout/common/header/components/HeaderMainSubMenus';
import { HeaderMainSubMenuOptions } from '@src/shared/MenuOptions';
import useHeaderMenuStore from '@src/layout/common/header/header.store';

interface IMainMenuItem {
  menu: IHeaderMenu;
}

const HeaderMainMenuItem = ({ menu }: IMainMenuItem) => {
  const [selectMenu, setSelectMenu] = useState<string | null>(null);
  const mainMenuOptions = useHeaderMenuStore((state) => state.mainMenuOptions);

  const onMainMenu = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const menu = e.currentTarget.value;

    const findMenu = mainMenuOptions.find((option) => option.key === menu);
    if (findMenu) {
      findMenu.show = !findMenu.show;
      mainMenuOptions.forEach((option) => {
        if (option.key !== menu && option.show) {
          option.show = false;
        }
      });
    }
    setSelectMenu(menu);
  }, []);

  return (
    <div className="relative">
      <button
        key={menu.key}
        type="button"
        className="flex items-center gap-x-1 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium select-none cursor-pointer"
        value={menu.key}
        onClick={onMainMenu}
      >
        {menu.name}
        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <HeaderMainSubMenus menu={selectMenu} />
    </div>
  );
};

export default HeaderMainMenuItem;
