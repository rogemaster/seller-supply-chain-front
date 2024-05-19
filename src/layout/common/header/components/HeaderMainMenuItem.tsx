import React, { useCallback, useState } from 'react';
import { Popover, PopoverButton } from '@headlessui/react';
import { IHeaderMenu } from '@src/interface/MainMenuInterface';
import HeaderMainSubMenus from '@src/layout/common/header/components/HeaderMainSubMenus';

interface IMainMenuItem {
  menu: IHeaderMenu;
}

// text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black
// flex items-center gap-x-1 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium select-none cursor-pointer

const HeaderMainMenuItem = ({ menu }: IMainMenuItem) => {
  const [selectMainMenu, setSelectMainMenu] = useState<string | null>(null);

  const onClickMainMenu = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const menu = e.currentTarget.value;
    setSelectMainMenu(menu);
  }, []);

  return (
    <Popover>
      <PopoverButton
        className="flex items-center gap-x-1 px-3 py-2 text-sm font-medium select-none cursor-pointer focus:outline-none"
        value={menu.key}
        onClick={onClickMainMenu}
      >
        {menu.name}
      </PopoverButton>
      <HeaderMainSubMenus menu={selectMainMenu} />
    </Popover>
  );
};

export default HeaderMainMenuItem;
