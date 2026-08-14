import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Text,
	VStack,
    
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import toast from 'react-hot-toast';
import { useState } from "react";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const [isEditing, setIsEditing] = useState(false);

	const textColor = "gray.600";
	const bg = "white";

	const { deleteProduct, updateProduct } = useProductStore();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toast.error("Error: " + message);
		} else {
			toast.success("Success: " + message);
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const result = await updateProduct(pid, updatedProduct);
		if (!result.success) {
			toast.error("Error: " + result.message);
		} else {
			toast.success("Product updated successfully");
		}
		return result;
	};

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={2}>
					<IconButton aria-label="edit" icon={<AiOutlineEdit />} onClick={() => { setUpdatedProduct(product); setIsEditing(true); }} colorScheme='blue' />

					<IconButton
						aria-label="delete"
						icon={<AiOutlineDelete />}
						onClick={async () => {
							const confirmed = window.confirm('Delete this product?');
							if (!confirmed) return;
							await handleDeleteProduct(product._id);
						}}
						colorScheme='red'
					/>
				</HStack>
			</Box>

			{isEditing && (
				<Box position="fixed" inset={0} bg="blackAlpha.600" display="flex" alignItems="center" justifyContent="center" zIndex={999} p={4}>
					<Box bg={bg} p={6} rounded="md" w={{ base: "100%", md: "600px" }} maxH={"80vh"} overflowY="auto">
						<Heading as='h3' size='md' mb={4} display="flex" justifyContent="space-between" alignItems="center">
							<span>Update Product</span>
							<Button colorScheme='blue' onClick={async () => { const res = await handleUpdateProduct(product._id, updatedProduct); if (res.success) setIsEditing(false); }}>
								Update
							</Button>
						</Heading>
						<VStack spacing={4} mb={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</VStack>
						<HStack spacing={3} justifyContent="flex-end">
							<Button variant='ghost' onClick={() => setIsEditing(false)}>Cancel</Button>
						</HStack>
					</Box>
				</Box>
			)}
			</Box>
	);
};
export default ProductCard;