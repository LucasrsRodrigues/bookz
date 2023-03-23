import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { VStack, Heading, Text, Box, HStack, Checkbox } from "native-base";

export function SignIn() {
  return (
    <VStack bg="blue.900" flex={1} px={6} py={60}>
      <Heading color="white" fontSize="xl">
        Sign In
      </Heading>

      <Text color="blue.100" fontSize="lg" my={8} fontWeight="regular">
        Por favor, preencha o número de telefone e a senha para entrar na sua
        conta
      </Text>

      <Box bg="blue.800" px={4} py={4} rounded="lg">
        <Input label="Login" placeholder="Digite seu nome" />

        <Input label="Senha" placeholder="Digite sua senha" secureTextEntry />
      </Box>

      <VStack mt={18}>
        <HStack alignItems="center">
          <Checkbox
            value="save"
            colorScheme="red"
            bg="transparent"
            borderColor="blue.100"
          >
            <Text fontSize="lg" color="blue.100">
              Permanecer conectado
            </Text>
          </Checkbox>

          <Button variant="outline" label="Esqueci a senha" />
        </HStack>

        <Button label="Sign In" />

        <Button label="Sign Up" variant="outline" />
      </VStack>
    </VStack>
  );
}
