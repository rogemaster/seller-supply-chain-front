import React from 'react';
import HeaderMenus from '@src/layout/common/header/components/HeaderMenus';
import MyMenus from '@src/layout/common/header/components/MyMenus';
import HeaderAlarm from '@src/layout/common/header/components/HeaderAlarm';
import HeaderCompanyLogo from '@src/layout/common/header/components/HeaderCompanyLogo';
import MenuTitle from "@src/layout/common/header/components/MenuTitle";
import HeaderMainMenus from "@src/layout/common/header/components/mobile/HeaderMainMenus";
import HeaderMobileMainMenus from "@src/layout/common/header/components/mobile/components/HeaderMobileMainMenus";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const MainHeader = () => {
  return (
    <div>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              {/* 회사로고 */}
              <HeaderCompanyLogo />
              {/*<HeaderMenus />*/}
              <HeaderMenus />
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* 알림 영역 */}
                <HeaderAlarm />
                {/* 유저 메뉴 */}
                <MyMenus />
              </div>
            </div>
          </div>
        </div>

        {/* 모바일 영역 */}
        <HeaderMainMenus />
        <HeaderMobileMainMenus />
      </nav>
      
      {/* 컨텐츠 타이틀 영역 */}
      <MenuTitle title="Dashboard" />
    </div>
  );
};

export default MainHeader;
