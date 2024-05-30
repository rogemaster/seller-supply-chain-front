import { create } from 'zustand';

type Authorization = {
  auth: boolean;
  setAuth: (auth: boolean) => void;
};

const useAuthStore = create<Authorization>((set) => ({
  auth: true,
  setAuth: (auth) => set({ auth }),
}));

export default useAuthStore;