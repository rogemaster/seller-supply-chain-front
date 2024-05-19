import React from 'react';
import {PopoverPanel, Transition} from '@headlessui/react';
import { HeaderMainSubMenuOptions } from '@src/shared/MenuOptions';

interface IMainSubMenu {
  menu: string | null;
}

const HeaderMainSubMenus = ({ menu }: IMainSubMenu) => {

  return (
    <Transition
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <PopoverPanel anchor="bottom" className="rounded-md bg-white text-sm/6 border">
        <div className="p-3">
          {menu && HeaderMainSubMenuOptions[menu].map((subMenu) => (
            <div key={subMenu.key} className="block rounded-lg py-2 px-3 transition hover:bg-black/5">
              <p className="font-semi-bold text-black">{subMenu.name}</p>
            </div>
          ))}
        </div>
      </PopoverPanel>
    </Transition>
  );
};

export default HeaderMainSubMenus;
