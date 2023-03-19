import { VStack, Text, Input as RBInput, IInputProps } from "native-base";

type IInput = IInputProps & {
  label: string;
};

export function Input({ label, ...rest }: IInput) {
  return (
    <VStack>
      <Text color="white" fontSize="lg" fontWeight="medium">
        {label}
      </Text>

      <RBInput
        bg="blue.700"
        borderWidth={2}
        borderColor="blue.700"
        padding={4}
        color="blue.100"
        fontSize="md"
        rounded="md"
        fontWeight="regular"
        marginTop={2}
        _focus={{
          bg: "blue.700",
          borderWidth: 2,
          borderColor: "blue.100",
        }}
        placeholderTextColor="blue.100"
        {...rest}
      />
    </VStack>
  );
}
