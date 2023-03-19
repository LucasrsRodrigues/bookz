import { Box, Spinner } from "native-base";

export function Loading() {
  return (
    <Box bg="blue.900">
      <Spinner size="lg" color="red.900" />
    </Box>
  );
}
