import { Select } from "@chakra-ui/react";
import { Data } from "../../../../types/types";
import { getCustomPlaceholder } from "../../../../helpers/customPlaceholders";

interface DropdownProps {
  data: Data[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  filterType: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  data,
  onChange,
  value,
  filterType,
}) => {
  console.log("Data from Dropdown component", data);

  const filteredData = data[0].equipments;

  console.log("Data from Dropdown component - filtered", filteredData);

  // Filter the data based on the filterType
  const filteredOptions = filteredData.filter((i) => {
    if (filterType === "manufacturer") {
      return i.manufacturer;
    }
    if (filterType === "state") {
      return i.state;
    }
    if (filterType === "city") {
      return i.city;
    }

    return false;
  });

  return (
    <>
      <Select
        placeholder={getCustomPlaceholder(filterType)}
        value={value}
        onChange={onChange}
      >
        {filteredOptions.map((i) => (
          <option key={i.id} value={i[filterType]}>
            {i[filterType]}
          </option>
        ))}
      </Select>
    </>
  );
};
