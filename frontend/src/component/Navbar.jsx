import { Container, Button, Flex, Text, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useColorMode } from "../components/ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


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
            <Button colorScheme="teal" variant="solid">
              Home
            </Button>
          </Link>
              <Link to="/create">
            <Button colorScheme="teal" variant="outline">
              Create Product
            </Button>
          </Link>
        </Flex>

        <HStack spacing={2} alignItems="center">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}


export default Navbar