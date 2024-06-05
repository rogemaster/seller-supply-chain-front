import React from 'react';
import loadable from '@loadable/component';
import ProductForm from '@src/product/Register/components/ProductForm';

const Navigation = loadable(() => import('@src/components/Navigation'));

interface IProductRegister {
  pageName: string;
}

// {/* 상품명 판매상태 판매가격 상품정보고시 판매정책(과세여부 등) 옵션 배송정책 메인이미지, 상세설명 */}

const ProductRegisterIndex = ({ pageName }: IProductRegister) => {
  return (
    <>
      <Navigation pageName={pageName} />
      <div className="rounded-sm border border-gray-100 bg-white shadow">
        <ProductForm />
      </div>
    </>
  );
};

export default ProductRegisterIndex;
