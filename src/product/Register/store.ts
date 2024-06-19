import { create } from 'zustand';
import { atom } from 'jotai';

type ProductRegisterData = {
  name: string;
  status: string;
  price: number;
  country: string;
  brand?: string;
  manufacturer?: string;
  modelName?: string;
  sealArea: string;
};

const nameAtom = atom<string>('');
const statusAtom = atom<string>('');
const priceAtom = atom<number>(0);
const countryAtom = atom<string>('');
const brandAtom = atom<string>('');
const manufacturerAtom = atom<string>('');
const modelNameAtom = atom<string>('');
const sealAreaAtom = atom<string>('001');

export const getProductDataAtom = atom((get) => ({
  name: get(nameAtom),
  status: get(statusAtom),
  price: get(priceAtom),
  country: get(countryAtom),
  brand: get(brandAtom),
  manufacturer: get(manufacturerAtom),
  modelName: get(modelNameAtom),
  sealArea: get(sealAreaAtom)
}));

export const setProductDataAtom = atom(null, (_, set) => {
  set(nameAtom, '');
  set(statusAtom, '');
  set(priceAtom, 0);
  set(countryAtom, '');
  set(brandAtom, '');
  set(manufacturerAtom, '');
  set(modelNameAtom, '');
  set(sealAreaAtom, '001');
})

type ProductState = {
  productRegisterData: ProductRegisterData;
  setProductRegisterData: (newProductRegisterData: ProductRegisterData) => void;
};

const useProductRegisterStore = create<ProductState>((set) => ({
  productRegisterData: {
    name: '',
    manufacturer: '',
    brand: '',
    country: '',
    status: '',
    price: 0,
    modelName: '',
    sealArea: '001'
  },
  setProductRegisterData: (newProductRegisterData) =>
    set((state) => ({
      productRegisterData: {
        ...state.productRegisterData,
        ...newProductRegisterData,
      },
    })),
}));

export default useProductRegisterStore;
