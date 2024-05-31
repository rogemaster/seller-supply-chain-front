import React, { ChangeEvent, useCallback, useState } from 'react';
import loadable from '@loadable/component';
import {ProductCountryOriginOptions, ProductStatusOptions} from "@src/shared/ProductOptions";

const Navigation = loadable(() => import('@src/components/Navigation'));

interface IProductRegister {
  pageName: string;
}

// {/* 상품명 판매상태 판매가격 상품정보고시 판매정책(과세여부 등) 옵션 배송정책 메인이미지, 상세설명 */}

const ProductRegisterIndex = ({ pageName }: IProductRegister) => {
  const [selectedStatusOption, setSelectedStatusOption] = useState('');
  const [isOptionStatusSelected, setIsOptionStatusSelected] = useState<boolean>(false);

  const [selectedCountryOption, setSelectedCountryOption] = useState('');
  const [isOptionCountrySelected, setIsOptionCountrySelected] = useState<boolean>(false);

  const onSelectProductStatus = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setIsOptionStatusSelected(true);
    setSelectedStatusOption(value);
  }, []);

  const onSelectCountryOrigin = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setIsOptionCountrySelected(true);
    setSelectedCountryOption(value);
  }, []);

  return (
    <>
      <Navigation pageName={pageName} />
      <div className="rounded-sm border border-gray-100 bg-white shadow">
        <form action="#">
          <div className="p-6">
            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">상품명</label>
                <input
                  type="text"
                  className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
                />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">브랜드명</label>
                <input
                  type="text"
                  className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
                />
              </div>
            </div>

            {/* 판매상타 */}
            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">판매상태</label>
                <div className="relative z-20 bg-transparent">
                  <select
                    name="product_status"
                    id="product_status"
                    value={selectedStatusOption}
                    onChange={onSelectProductStatus}
                    className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isOptionStatusSelected ? 'text-black' : ''}`}
                  >
                    {ProductStatusOptions.map((option) => (
                      <>
                        <option value='' className="text-gray-500">선택</option>
                        <option value={option.key} className="text-gray-500">{option.name}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">원산지</label>
                <div className="relative z-20 bg-transparent">
                  <select
                    name="product_status"
                    id="product_status"
                    value={selectedCountryOption}
                    onChange={onSelectCountryOrigin}
                    className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isOptionCountrySelected ? 'text-black' : ''}`}
                  >
                    {ProductCountryOriginOptions.map((option) => (
                      <>
                        <option value='' className="text-gray-500">선택</option>
                        <option value={option.key} className="text-gray-500">{option.name}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductRegisterIndex;
