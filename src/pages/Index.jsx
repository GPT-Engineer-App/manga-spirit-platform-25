import { Box, Button, Container, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaHeart, FaUpload, FaUserFriends, FaPlus } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("purple.50", "purple.900");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        {}

        {}
        <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="md" my={8}>
          <Heading size="lg" mb={4}>
            AI Previews
          </Heading>
          <Text color={textColor}>Check out what our AI can do!</Text>
          {}
        </Box>

        {}
      </VStack>
    </Container>
  );
};

export default Index;
