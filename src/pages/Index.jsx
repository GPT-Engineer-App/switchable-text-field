import { useState } from "react";
import { Container, HStack, Input, Button, Box, Text } from "@chakra-ui/react";

const Index = () => {
  const [isBold, setIsBold] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <HStack spacing={4}>
        <Box width="100%">
          <Input placeholder="Type here..." fontWeight={isBold ? "bold" : "normal"} onFocus={handleFocus} onBlur={handleBlur} borderColor={isFocused ? "blue.500" : "gray.200"} boxShadow={isFocused ? "0 0 5px 2px rgba(0, 0, 255, 0.2)" : "none"} />
        </Box>
        <Button onClick={toggleBold}>{isBold ? "Unbold" : "Bold"}</Button>
      </HStack>
      <Box mt={8} p={4} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="gray.50">
        <Text fontSize="xl" fontWeight="semibold" color="gray.700">
          This is a modern styled text.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
