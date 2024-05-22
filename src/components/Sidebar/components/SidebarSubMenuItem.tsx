import React from 'react';
import { SubMenuOptions } from '@src/shared/MenuOptions';
import { NavLink } from 'react-router-dom';

interface ISideSubMenu {
  name: string | null;
  isOpen: boolean;
}

const SidebarSubMenuItem = ({ name, isOpen }: ISideSubMenu) => {
  console.log(name);
  return (
    <div className={`translate transform overflow-hidden ${!isOpen && 'hidden'}`}>
      <ul className="mt-4 mb-5 flex flex-col gap-2 pl-6">
        {name &&
          SubMenuOptions[name].map((subMenu) => (
            <li key={subMenu.key} className="">
              <NavLink
                to={subMenu.href}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white ${isActive && '!text-white'}`
                }
              >
                {subMenu.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SidebarSubMenuItem;
