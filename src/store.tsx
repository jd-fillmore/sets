import { create } from "zustand";

interface FilterState {
  searchFilter: string;
  manufacturerDropdownFilter: string;
  provinceDropdownFilter: string;
  cityDropdownFilter: string;
}

const useFilterStore = create<FilterState>((set) => ({
  searchFilter: "",
  manufacturerDropdownFilter: "",
  provinceDropdownFilter: "",
  cityDropdownFilter: "",
  setSearchFilter: (value: string) =>
    set((state) => ({ ...state, searchFilter: value })),
  setManufacturerDropdownFilter: (value: string) =>
    set((state) => ({ ...state, manufacturerDropdownFilter: value })),
  setProvinceDropdownFilter: (value: string) =>
    set((state) => ({ ...state, provinceDropdownFilter: value })),
  setCityDropdownFilter: (value: string) =>
    set((state) => ({ ...state, cityDropdownFilter: value })),
  // Add price range filter
}));

export default useFilterStore;
