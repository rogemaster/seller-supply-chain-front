import React, { ChangeEvent, useCallback, useState } from 'react';
import {
  ProductInformationProvisionNoticeItemDetail,
  ProductInformationProvisionNoticeItems,
} from '@src/shared/ProductOptions';
import DropDownArrowSvg from '@src/common/icon/DropDownArrowSvg';
import ProductInformationProvisionNoticeDetail from '@src/product/Register/components/ProductInformationProvisionNoticeDetail';

const ProductInformationProvisionNotice = () => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>('');

  const onSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectItem(value);
    setIsSelect((prev) => !prev);
  }, []);

  return (
    <>
      <div className="border-b border-gray-400 mb-4 pb-4">
        <h3 className="font-semibold text-lg text-black">품목정보</h3>
      </div>
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">상품정보고시</label>
          <div className="relative z-20 bg-transparent">
            <select
              name="product_status"
              id="product_status"
              value={selectItem}
              onChange={onSelect}
              className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isSelect ? 'text-black' : ''}`}
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
      {selectItem.length > 0 &&
        ProductInformationProvisionNoticeItemDetail[selectItem].map((item) => (
          <ProductInformationProvisionNoticeDetail item={item} />
        ))}
    </>
  );
};

export default ProductInformationProvisionNotice;
