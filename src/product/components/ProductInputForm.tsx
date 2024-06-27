import React, {ChangeEvent} from "react";

interface IInputForm {
  valueKey: string | undefined;
  nameKey: string;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProductInputForm = ({nameKey, valueKey, onInput}: IInputForm) => {
  return (
    <input
      type="text"
      className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
      value={valueKey || ''}
      name={nameKey}
      onChange={onInput}
    />
  );
}

export default ProductInputForm;