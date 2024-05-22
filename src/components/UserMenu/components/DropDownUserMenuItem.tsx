import React, { ReactNode, useCallback } from 'react';
import { IMenu } from '@src/interface/MenuInterface';
import User from '@src/common/icon/User';

interface IUserMenuItem {
  menu: IMenu;
}

const DropDownUserMenuItem = ({ menu }: IUserMenuItem) => {
  const userIcon = useCallback(
    (value: string): ReactNode => {
      console.log(value);
      switch (value) {
        case 'MyPage': {
          return (
            <>
              <User />
              {menu.name}
            </>
          );
        }
        case 'Payment': {
          return menu.name;
        }
      }
    },
    [menu.name],
  );

  return (
    <li>
      <div className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base">
        {userIcon(menu.key)}
      </div>
    </li>
  );
};

export default DropDownUserMenuItem;
