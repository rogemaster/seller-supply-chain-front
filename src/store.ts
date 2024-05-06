import {create} from "zustand";

type Authorization = {
  auth: boolean;
}

const useAuthStore = create<Authorization>((set) => ({
  auth: true
}));

export default useAuthStore;