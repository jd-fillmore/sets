import useFilterStore from "../../store";
import { Data, Equipment } from "../../types/types";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";

interface MainTableProps {
  data: Data[];
  isLoading: boolean;
  error: any;
}

export const MainTable = ({ data, isLoading, error }: MainTableProps) => {
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

  // Set data
  const productData = data[0].equipments;

  console.log("Fetched data in Table component:", productData);

  // Search Filter
  const filteredSearch = (item: any) =>
    item.model.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.manufacturer.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item["serial-number"].toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.state.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.city.toLowerCase().includes(searchFilter.toLowerCase());

  // Manufacturer, Province and City dropdowns
  // Apply filtering logic to the fetched data
  const filteredData = data[0].equipments.filter(
    (item: any) =>
      filteredSearch(item) &&
      (manufacturerDropdownFilter === "" ||
        item.manufacturer === manufacturerDropdownFilter) &&
      (provinceDropdownFilter === "" ||
        item.state === provinceDropdownFilter) &&
      (cityDropdownFilter === "" || item.city === cityDropdownFilter)
  );

  // If no data matches, through an error message
  if (!filteredData || filteredData.length === 0) {
    return <p>No matches. Please try again.</p>;
  }

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Manufacturer</Th>
              <Th>Description</Th>
              <Th>Serial #</Th>
              <Th>Province</Th>
              <Th>City</Th>
              <Th>Regular Price</Th>
              <Th>Sale Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((equipment: Equipment) => (
              <Tr key={equipment.id}>
                <Td>{equipment.model}</Td>
                <Td>{equipment.manufacturer}</Td>
                <Td>{equipment.description}</Td>
                <Td>{equipment["serial-number"]}</Td>
                <Td>{equipment.state}</Td>
                <Td>{equipment.city}</Td>
                <Td>{equipment["regular-price"]?.text}</Td>
                <Td>{equipment["sale-price"]?.text}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination />
    </>
  );
};
