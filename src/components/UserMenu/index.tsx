import React, {useCallback, useState} from 'react';
import gravatar from 'gravatar';
import { UserInfo } from '@src/mock/UserInfo';
import loadable from '@loadable/component';

const DownArrow = loadable(() => import('@src/common/icon/DownArrow'));
const DropDownUserMenus = loadable(() => import('@src/components/UserMenu/components/DropDownUserMenus'));

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenUserMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-4" onClick={onOpenUserMenu}>
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black">{UserInfo.name}</span>
          <span className="block text-xs">{UserInfo.department}</span>
        </span>
        <span className="h-9 w-10 rounded-full">
          <img src={gravatar.url(UserInfo.email, { s: '36px', d: 'retro' })} alt={UserInfo.name} />
        </span>
        <DownArrow />
      </div>

      <DropDownUserMenus isOpen={isOpen} />
    </div>
  );
};

export default UserMenu;
