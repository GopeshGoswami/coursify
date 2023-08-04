import { create } from "zustand";

const store = (set) => ({
  designationValue: "",
  setDesignationValue: (value) => set(() => ({ designationValue: value })),

  locationValue: "",
  setLocationValue: (value) => set(() => ({ locationValue: value })),
});

export const useStore = create(store);
