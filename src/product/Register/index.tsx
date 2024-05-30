import React from 'react';
import loadable from '@loadable/component';

const Navigation = loadable(() => import('@src/components/Navigation'));

interface IProductRegister {
  pageName: string;
}

// {/* 상품명 판매상태 판매가격 상품정보고시 판매정책(과세여부 등) 옵션 배송정책 메인이미지, 상세설명 */}

const ProductRegisterIndex = ({ pageName }: IProductRegister) => {
  return (
    <>
      <Navigation pageName={pageName} />
      <div className="rounded-sm border border-gray-100 bg-white shadow">
        <form action="#">
          <div className="p-6">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">상품명</label>
                <input
                  type="text"
                  className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black text-[13px] outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
                />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">브랜드명</label>
                <input
                  type="text"
                  className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black text-[13px] outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductRegisterIndex;
