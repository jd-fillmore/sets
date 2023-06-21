import useFilterStore from "../../../store";
import { Data } from "../../../types/types";
import { Dropdown } from "../../features/filters/components/Dropdown";
import { Search } from "../../features/filters/components/search/Search";
import { PriceRange } from "../../features/filters/components/PriceRange";
import { ClearButton } from "../../features/filters/components/ClearFiltersButton";

import {
  handleSearchFilter,
  handleDropdownFilterManufacturer,
  handleDropdownFilterProvince,
  handleDropdownFilterCity,
} from "../../../helpers/handleFilters";

import "./header.scss";

interface HeaderProps {
  data: Data[];
  isLoading: boolean;
  error: any;
}

export const Header = ({ data, isLoading, error }: HeaderProps) => {
  // If data is loading/errors, show responses
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There's been an error!</p>;
  }

  // Bring in global state
  const {
    searchFilter,
    manufacturerDropdownFilter,
    provinceDropdownFilter,
    cityDropdownFilter,
  } = useFilterStore();

  console.log("Data from Header component:", data[0].equipments);

  // Handle onChange for search, three separate dropdowns
  return (
    <>
      <section className="header">
        <Search value={searchFilter} onChange={handleSearchFilter} />
        <Dropdown
          data={data}
          value={manufacturerDropdownFilter}
          onChange={handleDropdownFilterManufacturer}
          filterType="manufacturer"
        />
        <Dropdown
          data={data}
          value={provinceDropdownFilter}
          onChange={handleDropdownFilterProvince}
          filterType="state"
        />
        <Dropdown
          data={data}
          value={cityDropdownFilter}
          onChange={handleDropdownFilterCity}
          filterType="city"
        />
        <PriceRange />
        <ClearButton />
      </section>
    </>
  );
};
