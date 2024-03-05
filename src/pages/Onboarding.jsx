import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Onboarding() {
  return (
    <Box p={4}>
      <Text>Welcome to MangaVerse! Let's take a quick tour to show you around.</Text>
      {}
      <Button as={Link} to="/" _hover={{ bg: "blue.500", color: "white" }}>
        Go to Home
      </Button>
    </Box>
  );
}

export default Onboarding;
