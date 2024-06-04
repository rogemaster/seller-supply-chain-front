import React, { ChangeEvent, useCallback, useState } from 'react';
import loadable from '@loadable/component';
import {
  ProductCountryOriginOptions,
  ProductInformationProvisionNoticeItemContents,
  ProductInformationProvisionNoticeItems,
  ProductStatusOptions,
} from '@src/shared/ProductOptions';
import DropDownArrowSvg from '@src/common/icon/DropDownArrowSvg';
import InputCheckSvg from "@src/common/icon/InputCheckSvg";

const Navigation = loadable(() => import('@src/components/Navigation'));

interface IProductRegister {
  pageName: string;
}

// {/* 상품명 판매상태 판매가격 상품정보고시 판매정책(과세여부 등) 옵션 배송정책 메인이미지, 상세설명 */}

const ProductRegisterIndex = ({ pageName }: IProductRegister) => {
  const [selectedStatusOption, setSelectedStatusOption] = useState('');
  const [isOptionStatusSelected, setIsOptionStatusSelected] = useState<boolean>(false);

  const [selectedCountryOption, setSelectedCountryOption] = useState('');
  const [isOptionCountrySelected, setIsOptionCountrySelected] = useState<boolean>(true);

  const [selectedProductInformationProvisionNoticeItem, setSelectedProductInformationProvisionNoticeItem] =
    useState<string>('WEAR');

  const [isChecked, setIsChecked] = useState(true);

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

  const onSelectInformationProvisionNotice = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedProductInformationProvisionNoticeItem(value);
  }, []);

  return (
    <>
      <Navigation pageName={pageName} />
      <div className="rounded-sm border border-gray-100 bg-white shadow">
        <form action="#">
          <div className="p-6">
            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-4/5">
                <label className="mb-2.5 block text-black">상품명</label>
                <input
                  type="text"
                  className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
                />
              </div>
            </div>

            {/* 판매상태 & 원산지 */}
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
                    <option value="" className="text-gray-500">
                      선택
                    </option>
                    {ProductStatusOptions.map((option) => (
                      <option key={option.key} value={option.key} className="text-gray-500">
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <DropDownArrowSvg isOpen={false} />
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
                    <option value="" className="text-gray-500">
                      선택
                    </option>
                    {ProductCountryOriginOptions.map((option) => (
                      <option key={option.key} value={option.key} className="text-gray-500">
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <DropDownArrowSvg isOpen={false} />
                </div>
              </div>
            </div>

            {/* 제조업체 & 브랜드명 */}
            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">제조업체</label>
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

            {/* 상품정보고시 */}
            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">상품정보고시</label>
                <div className="relative z-20 bg-transparent">
                  <select
                    name="product_status"
                    id="product_status"
                    value={selectedProductInformationProvisionNoticeItem}
                    onChange={onSelectInformationProvisionNotice}
                    className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isOptionStatusSelected ? 'text-black' : ''}`}
                  >
                    <option value="" className="text-gray-500">
                      선택
                    </option>
                    {ProductInformationProvisionNoticeItems.map((option) => (
                      <option key={option.itemCode} value={option.itemCode} className="text-gray-500">
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <DropDownArrowSvg isOpen={false} />
                </div>
              </div>
            </div>

            {selectedProductInformationProvisionNoticeItem.length > 0 &&
              ProductInformationProvisionNoticeItemContents[selectedProductInformationProvisionNoticeItem].map(
                (item) => (
                  <div key={item.key} className="grid grid-cols-5 border border-gray-200 gap-5 p-2 xl:p-3">
                    <div className="flex col-span-2">
                      <p className="text-black text-sm">{item.name}</p>
                    </div>
                    <div className="flex col-span-2">
                      <input
                        type="text"
                        className="w-full border border-gray-200 bg-transparent py-3 px-3 outline-none focus:border-blue-600 active:border-blue-600"
                      />
                    </div>
                    <div className="flex items-end justify-end">
                      <div>
                        <label className="flex select-none items-center">
                          <div className="relative">
                            <input type="checkbox" className="sr-only" id={item.key} />
                            <div
                              className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${isChecked && 'border-blue-600 bg-gray-200'}`}
                            >
                              <span className={isChecked ? 'opacity-100' : 'opacity-0'}>
                                <InputCheckSvg />
                              </span>

                            </div>
                          </div>
                          상세설명 참조
                        </label>
                      </div>
                    </div>
                  </div>
                ),
              )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductRegisterIndex;
