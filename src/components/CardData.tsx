import React, { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  cardTitle: string;
  count: number;
}

const CardData = ({ cardTitle, children, count }: ICardProps) => {
  return (
    <div className="rounded-sm border border-gray-100 bg-white py-6 shadow">
      <div className="flex justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">{children && children}</div>
        <h4 className="text-2xl font-bold text-black">{cardTitle}</h4>
      </div>
      <div className="mt-4 flex items-end justify-end">
        <span className="text-sm font-medium">Total</span>
        <h4 className="text-2xl font-bold text-black">{count}건</h4>
      </div>
    </div>
  );
};

export default CardData;
