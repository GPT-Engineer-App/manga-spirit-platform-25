import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const StickyHeader = () => {
  const bgColor = useColorModeValue("teal.500", "teal.200");
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg={bgColor} color={textColor} position="sticky" top={0} zIndex={999}>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          MangaVerse
        </Heading>
      </Flex>
      {}
      <Box display={{ base: "none", md: "block" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1}>
        {}
      </Box>
      <Box>{}</Box>
    </Flex>
  );
};

export default StickyHeader;
