import React from 'react';
import loadable from "@loadable/component";

const ProductBasicInfo = loadable(() => import('@src/product/Register/components/ProductBasicInfo'));
const ProductInformationProvisionNotice = loadable(() => import('@src/product/Register/components/ProductInformationProvisionNotice'));
const ProductAdditionalInfo = loadable(() => import('@src/product/Register/components/ProductAdditionalInfo'));

const ProductForm = () => {
  return (
    <form action="#">
      <div className="p-6">
        {/* 상품기본정보 */}
        <ProductBasicInfo />
        {/* 상품정보고시 */}
        <ProductInformationProvisionNotice />
        {/* 상품부가정보 */}
        <ProductAdditionalInfo />
      {/* 상품이미지 */}
      {/* 상품판매정보 */}
      {/* 상품옵션정보 */}
      {/* 상품상세설명 */}
      {/* 상품등록&수정 이력 */}
      </div>
    </form>
  );
};

export default ProductForm;
