import { Box, Flex, Image } from "@chakra-ui/react";
import MenuItem from "./menuItem";
import zukoLogo from "/favicon.ico";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Box mr={8}>
          <Image src={zukoLogo} alt="Logo" boxSize="50px" />
        </Box>

        <Flex gap={8}>
          <MenuItem label="Home" to="/" />
          <MenuItem label="Yarn" to="/yarn" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
