import React, { useCallback, useState } from 'react';
import { IMenu } from '@src/interface/MenuInterface';
import loadable from '@loadable/component';
import DropDownArrowSvg from '@src/common/icon/DropDownArrowSvg';

const SidebarSubMenuItem = loadable(() => import('@src/components/Sidebar/components/SidebarSubMenuItem'));

interface ISideMenus {
  mainMenus: IMenu;
}

const SidebarMenuItem = ({ mainMenus }: ISideMenus) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const onClickSubMenuHandler = useCallback((e: any) => {
    setIsSubMenuOpen((prev) => !prev);
  }, []);

  return (
    <li>
      <div
        className="relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-gray-300 duration-300 ease-in-out hover:bg-gray-700"
        onClick={onClickSubMenuHandler}
      >
        {mainMenus.name}
        <DropDownArrowSvg isOpen={isSubMenuOpen} />
      </div>
      <SidebarSubMenuItem name={mainMenus.key} isOpen={isSubMenuOpen} />
    </li>
  );
};

export default SidebarMenuItem;
