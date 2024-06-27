import React, { ChangeEvent, useCallback, useState } from 'react';
import { ProductStatusOptions, ProductSaleArea } from '@src/shared/ProductOptions';
import DropDownArrowSvg from '@src/common/icon/DropDownArrowSvg';
import { useAtom } from 'jotai/index';
import { productDataAtom } from '@src/product/product.atom';
import loadable from '@loadable/component';

const ProductSelectForm = loadable(() => import('@src/product/components/ProductSelectForm'));

const ProductAdditionalInfo = () => {
  const [isStatus, setIsStatus] = useState<boolean>(false);

  const [productData, setProductData] = useAtom(productDataAtom.params);

  const onStatus = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      setProductData({
        ...productData,
        [name]: value,
      });

      setIsStatus((prev) => !prev);
    },
    [setProductData, productData],
  );

  return (
    <>
      <div className="border-b border-gray-400 mt-10 mb-4 pb-4">
        <h3 className="font-semibold text-lg text-black">상품 부가정보</h3>
      </div>
      <div className="mb-4 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">판매상태</label>
          <div className="relative z-20 bg-transparent">
            <ProductSelectForm
              isSelect={isStatus}
              nameKey="status"
              valueKey={productData.status}
              optionData={ProductStatusOptions}
              onSelect={onStatus}
            />
            <DropDownArrowSvg isOpen={false} />
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <label className="mb-2.5 block text-black">판매지역</label>
          <div className="relative z-20 bg-transparent">
            <ProductSelectForm
              isSelect={isStatus}
              nameKey="sealArea"
              valueKey={productData.sealArea}
              optionData={ProductSaleArea}
              onSelect={onStatus}
            />
            <DropDownArrowSvg isOpen={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAdditionalInfo;
