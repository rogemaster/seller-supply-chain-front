import React, {ChangeEvent, useCallback, useState} from 'react';
import { ProductCountryOriginOptions, ProductStatusOptions } from '@src/shared/ProductOptions';
import DropDownArrowSvg from '@src/common/icon/DropDownArrowSvg';
import useProductRegisterStore from '@src/product/Register/store';

const ProductBasicInfo = () => {
  const [isStatus, setIsStatus] = useState<boolean>(false);
  const [isCountry, setIsCountry] = useState<boolean>(false);

  const productData = useProductRegisterStore((state) => state.productRegisterData);
  const setProductData = useProductRegisterStore((state) => state.setProductRegisterData);

  const onStatus = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setProductData({
        ...productData,
        status: value
      });

      setIsStatus((prev) => !prev);
    },
    [setProductData, productData],
  );

  const onCountryOrigin = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setProductData({
        ...productData,
        country: value
      });

      setIsCountry((prev) => !prev);
    },
    [setProductData, productData],
  );

  return (
    <>
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-4/5">
          <label className="mb-2.5 block text-black">상품명</label>
          <input
            type="text"
            className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
            value={productData.name}
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">판매상태</label>
          <div className="relative z-20 bg-transparent">
            <select
              name="product_status"
              id="product_status"
              value={productData.status}
              onChange={onStatus}
              className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isStatus ? 'text-black' : ''}`}
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
              value={productData.country}
              onChange={onCountryOrigin}
              className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isCountry ? 'text-black' : ''}`}
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
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">제조업체</label>
          <input
            type="text"
            className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
            value={productData.manufacturer}
          />
        </div>

        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">브랜드명</label>
          <input
            type="text"
            className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
            value={productData.brand}
          />
        </div>
      </div>
    </>
  );
};

export default ProductBasicInfo;
