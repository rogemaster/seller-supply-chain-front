import { create } from 'zustand';

type ProductRegisterData = {
  name: string;
  status: string;
  price: number;
  country: string;
  brand: string;
  manufacturer: string;
}

type ProductState = {
  productRegisterData: ProductRegisterData;
  setProductRegisterData: (newProductRegisterData: ProductRegisterData) => void;
}

const useProductRegisterStore = create<ProductState>((set) => ({
  productRegisterData: {
    name: '',
    manufacturer: '',
    brand: '',
    country: '',
    status: '',
    price: 0
  },
  setProductRegisterData: (newProductRegisterData) => set((state) => ({
    productRegisterData: {
      ...state.productRegisterData,
      ...newProductRegisterData
    }
  }))
}));

export default useProductRegisterStore;
