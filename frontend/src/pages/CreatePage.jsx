import { useState } from "react"
import { Box, Button, Container, Heading, Input,  VStack } from "@chakra-ui/react"
import {  toaster } from "../components/ui/toaster"
import { useColorModeValue } from "../components/ui/color-mode"
import { useProductStore } from "../store/product";

export default function CreatePage() {
  const [ newProduct , setNewProduct] = useState({
    name: "",
    price:"",
    image:"",
  })
  
  const { createProduct } = useProductStore()

  const handleAddProduct = async() => {
    const { success, message} = await createProduct(newProduct);
    if(!success) {
      toaster.create({
      title: "error",
      description: message,
      status: "error",
      isClosable: true
    })
  } else {
     toaster.create({
      title: "success",
      description: message,
      status: "success",
      isClosable: true
    })
  }
    setNewProduct({ name: "", price: "", image: ""});  
  }
  return (
    <Container maxW={"800px"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"3xl"} textAlign={"center"} mb={6} mt={6}>
          Create New Product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("gray.100", "gray.900")}>
          <VStack>
            <Input placeholder="Product Name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name:e.target.value})}/>
            <Input placeholder="Product Price" name="price" type="number" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price:e.target.value})}/>
            <Input placeholder="Product Image" name="image" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image:e.target.value})}/>

            <Button colorScheme="gray" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}