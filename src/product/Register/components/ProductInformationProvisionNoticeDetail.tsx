import React, { useState } from 'react';
import InputCheckSvg from '@src/common/icon/InputCheckSvg';
import { IProductInformationProvisionNoticeItem } from '@src/interface/ProductInterface';

interface IProps {
  item: IProductInformationProvisionNoticeItem;
}

const ProductInformationProvisionNoticeDetail = ({ item }: IProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div key={item.key} className="grid grid-cols-5 border border-gray-200 gap-5 p-2 xl:p-3">
      <div className="flex col-span-2">
        <p className="text-black text-sm">{item.name}</p>
      </div>
      <div className="flex col-span-2">
        <input
          type="text"
          className="w-full border border-gray-200 bg-transparent py-3 px-3 outline-none focus:border-blue-600 active:border-blue-600"
          onChange={onCheck}
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
  );
};

export default ProductInformationProvisionNoticeDetail;
