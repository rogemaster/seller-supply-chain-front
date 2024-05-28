import React from 'react';
import loadable from '@loadable/component';
// import ProductSvg from '@src/common/icon/ProductSvg';

const CardData = loadable(() => import('@src/components/CardData'));
const ProductSvg = loadable(() => import('@src/common/icon/ProductSvg'));
const OrderSvg = loadable(() => import('@src/common/icon/OrderSvg'));
const QnaSvg = loadable(() => import('@src/common/icon/QnaSvg'));

const MainIndex = () => {
  // 카운트 집계 api 호출 필요
  // 기준 : 당일 건수
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
      <CardData children={<ProductSvg />} cardTitle="신규상품" count={100} />
      <CardData children={<ProductSvg />} cardTitle="신규연동상품" count={100} />
      <CardData children={<OrderSvg />} cardTitle="신규주문" count={100} />
      <CardData children={<QnaSvg />} cardTitle="신규문의" count={100} />
    </div>
  );
};

export default MainIndex;
