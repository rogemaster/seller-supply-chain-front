import React, { ChangeEvent, useCallback, useState } from 'react';
import useProductRegisterStore from '@src/product/Register/store';
import { ProductStatusOptions, ProductSaleArea } from '@src/shared/ProductOptions';
import DropDownArrowSvg from '@src/common/icon/DropDownArrowSvg';

const ProductAdditionalInfo = () => {
  const [isStatus, setIsStatus] = useState<boolean>(false);

  const productData = useProductRegisterStore((status) => status.productRegisterData);
  const setProductData = useProductRegisterStore((state) => state.setProductRegisterData);

  const onStatus = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setProductData({
        ...productData,
        status: value,
      });

      setIsStatus((prev) => !prev);
    },
    [setProductData, productData],
  );

  return (
    <>
      <div className="border-b border-gray-400 mt-10 mb-4 pb-4">
        <h3 className="font-semibold text-lg text-black">상품 부가정보</h3>
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
          <label className="mb-2.5 block text-black">판매지역</label>
          <div className="relative z-20 bg-transparent">
            <select
              name="product_status"
              id="product_status"
              value={productData.sealArea}
              onChange={onStatus}
              className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isStatus ? 'text-black' : ''}`}
            >
              <option value="" className="text-gray-500">
                선택
              </option>
              {ProductSaleArea.map((option) => (
                <option key={option.key} value={option.key} className="text-gray-500">
                  {option.name}
                </option>
              ))}
            </select>
            <DropDownArrowSvg isOpen={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAdditionalInfo;
