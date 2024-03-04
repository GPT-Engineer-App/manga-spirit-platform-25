import { Box, Button, Container, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaHeart, FaUpload, FaUserFriends, FaPlus } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("purple.50", "purple.900");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const buttonColorScheme = "teal";

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        {/* Hero Section */}
        <Flex direction="column" alignItems="center" justifyContent="center" minH="60vh" textAlign="center" bgImage="url('https://example.com/manga-style-background.png')" bgSize="cover" bgRepeat="no-repeat">
          <Heading as="h1" size="2xl" fontWeight="bold" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
            Unleash Your Manga Spirit
          </Heading>
          <Text color={textColor} fontSize="xl" mt={4}>
            Explore the ultimate platform for manga fans and creators alike.
          </Text>
          <Stack direction="row" spacing={4} mt={10}>
            <Button colorScheme={buttonColorScheme} leftIcon={<FaUserFriends />} aria-label="Join as a Fan" _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}>
              Join as Fan
            </Button>
            <Button colorScheme={buttonColorScheme} leftIcon={<FaUpload />} aria-label="Join as a Creator">
              Join as Creator
            </Button>
          </Stack>
        </Flex>

        {/* Features Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Fan Account */}
          <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="md">
            <Heading size="lg" mb={4}>
              For Fans
            </Heading>
            <VStack spacing={4} alignItems="flex-start">
              <Flex alignItems="center">
                <Icon as={FaHeart} color="pink.500" boxSize={6} mr={2} />
                <Text fontWeight="semibold">Favorites Section</Text>
              </Flex>
              <Text color={textColor}>Keep all your beloved manga series in one place for quick access.</Text>
              <Button colorScheme={buttonColorScheme} size="sm" aria-label="Follow New Manga">
                Follow New Manga
              </Button>
            </VStack>
          </Box>

          {/* Creator Account */}
          <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="md">
            <Heading size="lg" mb={4}>
              For Creators
            </Heading>
            <VStack spacing={4} alignItems="flex-start">
              <Flex alignItems="center">
                <Icon as={FaUpload} color="green.500" boxSize={6} mr={2} />
                <Text fontWeight="semibold">My Uploads</Text>
              </Flex>
              <Text color={textColor}>Showcase your work and get insightful analytics.</Text>
              <Button colorScheme={buttonColorScheme} size="sm" aria-label="Upload New Work">
                Upload New Work
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Call to Action Section */}
        <Flex bg={bgColor} p={8} borderRadius="lg" boxShadow="lg" direction={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between">
          <VStack spacing={4} alignItems="flex-start" flex="1">
            <Heading size="lg">Ready to dive into the world of manga?</Heading>
            <Text color={textColor}>Whether you're a fan or a creator, join us today and be part of the MangaVerse!</Text>
          </VStack>
          <Button colorScheme={buttonColorScheme} size="lg" mt={{ base: 4, md: 0 }} leftIcon={<FaPlus />} aria-label="Get Started with MangaVerse">
            Get Started
          </Button>
        </Flex>

        {/* Footer Image */}
        <Box>
          <Image src="https://images.unsplash.com/photo-1560972550-aba3456b5564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGFydHxlbnwwfHx8fDE3MDk1OTQ4Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxShadow="xl" alt="Manga artwork" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
