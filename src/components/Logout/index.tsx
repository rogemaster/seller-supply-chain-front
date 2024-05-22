import React from 'react';
import loadable from "@loadable/component";

const LogoutSVG = loadable(() => import('@src/common/icon/LogoutSVG'));

const Logout = () => {
  return (
    <button className="flex items-center gap-3 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base">
      <LogoutSVG />
      로그아웃
    </button>
  )
}

export default Logout;