import { Box, Text, VStack } from "native-base";

export function EmptyList() {
  return (
    <Box flex={1} alignItems="center" mt={20}>
      <Box
        w={366}
        h={398}
        bg="#2B2A38"
        p={9}
        borderRadius="20px"
        m={6}
        justifyContent="center"
      >
        <Box
          w={140}
          h={140}
          rounded="full"
          bg="#383649"
          alignSelf="center"
          justifyContent="center"
          alignItems="center"
        ></Box>

        <VStack alignItems="center" mt={8}>
          <Text fontSize={24} color="#ffffff" fontWeight="medium">
            The basket is empty
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
