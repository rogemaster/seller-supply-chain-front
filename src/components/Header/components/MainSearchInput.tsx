import React, {FormEvent, useCallback} from 'react';
import SearchSvg from "@src/common/icon/SearchSvg";

const MainSearchInput = () => {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    console.log('submit', e);
  }, []);

  return (
    <div className="hidden sm:block">
      <form className="m-0" onSubmit={onSubmit} method="POST">
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2" onSubmit={onSubmit}>
            <SearchSvg />
          </button>
          <input type="text" className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none" />
        </div>
      </form>
    </div>
  )
};

export default MainSearchInput;
