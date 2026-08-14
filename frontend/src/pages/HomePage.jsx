import { Container, SimpleGrid, Text, VStack, Box} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../component/ProductCard"

export default function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);
  console.log("products", products)

  return (
    <Container maxW="container.xl" py={12}>
      <VStack>
        <Text fontSize={"30px"} fontWeight={"bold"} textAlign={"center"}>
          Current Products
        </Text>

        {products.length === 0 ? (
          <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="red.300">
            No products found 🤷‍♀️ {" "}
            <Link to={"/create"}>
              <Text as="span" _hover={{ textDecoration: "underline" }} color="blue.500">
                Create a product
              </Text>
            </Link>
          </Text>
        ) : (
          <SimpleGrid minChildWidth="sm" gap="40px" w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
}