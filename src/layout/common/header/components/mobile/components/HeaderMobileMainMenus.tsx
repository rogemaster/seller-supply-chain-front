import React from "react";
import HeaderUserMenus from "@src/layout/common/header/components/mobile/HeaderUserMenus";

const HeaderMobileMainMenus = () => {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <a
          href="#"
          className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          Team
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          Calendar
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          Reports
        </a>
      </div>
      <HeaderUserMenus />
    </div>
  )
}

export default HeaderMobileMainMenus;