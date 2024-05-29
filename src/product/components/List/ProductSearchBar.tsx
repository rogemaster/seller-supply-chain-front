import React, {useState} from 'react';
import DatePicker from "react-datepicker";

const ProductSearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChangeDate = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };

  return (
    <div className="rounded-sm border border-gray-100 bg-white px-5 pt-6 pb-2.5 mb-5 shadow sm:px-7 xl:pb-1">
      <form action="#">
        <div className="mb-4">
          <div className="flex flex-row items-center gap-3">
            <label className="mr-4 text-black text-sm">일자</label>
            <DatePicker
              className="rounded-sm border border-gray-200 bg-transparent text-[13px]"
              showIcon
              selected={startDate}
              onChange={onChangeDate}
            />
            <span>~</span>
            <DatePicker
              className="rounded-sm border border-gray-200 bg-transparent text-[13px]"
              showIcon
              selected={startDate}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row items-center gap-3">
            <label className="w-[30px] mr-4 text-black text-sm">검색</label>
            <input
              type="text"
              className="w-full rounded border border-gray-200 bg-transparent py-2 px-4 text-black text-[13px] outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-white"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductSearchBar;