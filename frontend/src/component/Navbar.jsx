import { Container, Button, Flex, Text, HStack, IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useColorMode } from "../components/ui/color-mode";
import { IoMoon, IoSunny } from "react-icons/io5";
import { MdHome, MdAdd } from "react-icons/md";


function Navbar() { 
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"1140px"} p={4} bg={colorMode === "light" ? "gray.100" : "gray.900"} borderRadius="md" boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between" flexDirection={{ base: "column", sm: "row" }}>
        <Text fontSize="xl" fontWeight="bold">
          Product Store
        </Text>
        <Flex gap={4} mt={{ base: 2, sm: 0 }}>
            <Link to="/">
                <Button colorScheme="teal" variant="solid" size="sm">
                    <MdHome size={18} /> Home
                </Button>
            </Link>
            <Link to="/create">
                <Button colorScheme="teal" variant="outline" size="sm">
                    <MdAdd size={18} /> Create Product
                </Button>
            </Link>
        </Flex>

        <HStack spacing={2} alignItems="center">
            <IconButton onClick={toggleColorMode} aria-label="Toggle color mode" variant="ghost" size="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                {colorMode === "light" ? <IoMoon size={20} /> : <IoSunny size={20} />}
            </IconButton>
        </HStack>
      </Flex>
    </Container>
  )
}


export default Navbar