import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformList = () => {
  const { data } = usePlatforms();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((item) => (
            <MenuItem key={item.id}>{item.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformList;
