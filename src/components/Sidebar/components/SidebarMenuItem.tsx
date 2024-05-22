import React, { useCallback, useState } from 'react';
import { IMenu } from '@src/interface/MenuInterface';
import loadable from '@loadable/component';
import DropDownArrow from '@src/common/icon/DropDownArrow';

const SidebarSubMenuItem = loadable(() => import('@src/components/Sidebar/components/SidebarSubMenuItem'));

interface ISideMenus {
  mainMenus: IMenu;
}

const SidebarMenuItem = ({ mainMenus }: ISideMenus) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const onClickSubMenuHandler = useCallback((e: any) => {
    console.log(e);
    setIsSubMenuOpen((prev) => !prev);
  }, []);

  console.log(mainMenus);

  return (
    <li>
      <div
        className="relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-gray-300 duration-300 ease-in-out hover:bg-gray-700"
        onClick={onClickSubMenuHandler}
      >
        {mainMenus.name}
        <DropDownArrow isOpen={isSubMenuOpen} />
      </div>
      <SidebarSubMenuItem name={mainMenus.key} isOpen={isSubMenuOpen} />
    </li>
  );
};

export default SidebarMenuItem;
