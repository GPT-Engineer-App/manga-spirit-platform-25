import { Box, Text, Button } from "@chakra-ui/react";

function CustomizeMerch() {
  return (
    <Box p={4}>
      <Text>Customize your merchandise!</Text>
      {}
      {}
      <Button _hover={{ bg: "teal.600" }}>Proceed to Payment</Button>
    </Box>
  );
}

export default CustomizeMerch;
