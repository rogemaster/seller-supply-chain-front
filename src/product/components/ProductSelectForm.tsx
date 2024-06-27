import React, { ChangeEvent } from 'react';

interface ISelectForm {
  isSelect: boolean;
  nameKey: string;
  valueKey: string;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  optionData: { key: string; name: string }[];
}

const ProductSelectForm = ({ isSelect, nameKey, valueKey, onSelect, optionData }: ISelectForm) => {
  return (
    <select
      id="product_status"
      name={nameKey}
      value={valueKey}
      onChange={onSelect}
      className={`relative z-20 w-full appearance-none rounded border border-gray-200 bg-transparent py-2 px-5 outline-none transition focus:border-blue-600 active:border-blue-600 ${isSelect ? 'text-black' : ''}`}
    >
      <option value="" className="text-gray-500">
        선택
      </option>
      {optionData.map((option) => (
        <option key={option.key} value={option.key} className="text-gray-500">
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default ProductSelectForm;
