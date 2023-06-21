import Slider from "rc-slider";
import { Input, Flex } from "@chakra-ui/react";

import "rc-slider/assets/index.css";

export const PriceRange = () => {
  return (
    <>
      <Flex direction="column">
        <Input placeholder="Price (CAD)" />
        <Slider defaultValue={20} min={0} max={100} />
      </Flex>
    </>
  );
};
