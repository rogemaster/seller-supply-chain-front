import React from 'react';
import loadable from '@loadable/component';
import { UserMenuOptions } from '@src/shared/MenuOptions';

interface IProps {
  isOpen: boolean;
}

const DropDownUserMenuItem = loadable(() => import('@src/components/UserMenu/components/DropDownUserMenuItem'));
const Logout = loadable(() => import('@src/components/Logout'));

const DropDownUserMenus = ({ isOpen }: IProps) => {
  return (
    <div
      className={`absolute right-0 mt-4 flex w-60 flex-col rounded-sm border border-gray-100 bg-white shadow ${isOpen ? 'block' : 'hidden'}`}
    >
      <ul className="flex flex-col gap-5 border-b border-gray-100 px-6 py-7">
        {UserMenuOptions && UserMenuOptions.map((menu) => <DropDownUserMenuItem key={menu.key} menu={menu} />)}
      </ul>
      <Logout />
    </div>
  );
};

export default DropDownUserMenus;
