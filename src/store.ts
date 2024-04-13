import {create} from "zustand";

type Authorization = {
  auth: boolean;
}

const useAuthStore = create<Authorization>((set) => ({
  auth: false
}));

export default useAuthStore;