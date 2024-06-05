import React from 'react';
import ProductInformationProvisionNotice from '@src/product/Register/components/ProductInformationProvisionNotice';
import ProductBasicInfo from "@src/product/Register/components/ProductBasicInfo";

const ProductForm = () => {
  return (
    <form action="#">
      <div className="p-6">
        <ProductBasicInfo />
        {/* 상품정보고시 */}
        <ProductInformationProvisionNotice />
      </div>
    </form>
  );
};

export default ProductForm;
