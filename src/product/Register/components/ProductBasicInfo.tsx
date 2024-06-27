import React, { ChangeEvent, useCallback, useState } from 'react';
import { ProductCountryOriginOptions } from '@src/shared/ProductOptions';
import DropDownArrowSvg from '@src/common/icon/DropDownArrowSvg';
import { productDataAtom } from '@src/product/product.atom';
import { useAtom } from 'jotai';
import loadable from "@loadable/component";

const ProductInputForm = loadable(() => import('@src/product/components/ProductInputForm'));

const ProductBasicInfo = () => {
  const [isCountry, setIsCountry] = useState<boolean>(false);

  const [productData, setProductData] = useAtom(productDataAtom.params);

  const onInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setProductData({
        ...productData,
        [name]: value,
      });
    },
    [setProductData, productData],
  );

  const onCountryOrigin = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setProductData({
        ...productData,
        country: value,
      });

      setIsCountry((prev) => !prev);
    },
    [setProductData, productData],
  );

  return (
    <>
      <div className="border-b border-gray-400 mb-4 pb-4">
        <h3 className="font-semibold text-lg text-black">상품 기본정보</h3>
      </div>
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-4/5">
          <label className="mb-2.5 block text-black">상품명</label>
          <ProductInputForm nameKey="name" valueKey={productData.name} onInput={onInput} />
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">브랜드명</label>
          <ProductInputForm nameKey="brand" valueKey={productData.brand} onInput={onInput} />
        </div>
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">모델명</label>
          <ProductInputForm nameKey="modelName" valueKey={productData.modelName} onInput={onInput} />
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">제조업체</label>
          <ProductInputForm nameKey="manufacturer" valueKey={productData.manufacturer} onInput={onInput} />
        </div>

        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">원산지</label>
          <div className="relative z-20 bg-transparent">
            <select
              name="product_status"
              id="product_status"
              value={productData.country}
              onChange={onCountryOrigin}
              className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-2 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isCountry ? 'text-black' : ''}`}
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
    </>
  );
};

export default ProductBasicInfo;
