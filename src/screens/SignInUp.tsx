import { Button } from "@components/Button";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { VStack, Heading, Text, Box, HStack, Divider, Skeleton } from "native-base";

import GoogleSvg from '@assets/svg/google_icon.svg';
import FacebookSvg from '@assets/svg/facebook_icon.svg';
import LinkedinSvg from '@assets/svg/linkedin_icon.svg';

export function SignUp() {
  return (
    <VStack bg="blue.900" flex={1} px={6} py={60}>
      <Heading color="white" fontSize="xl">
        Criar nova conta
      </Heading>

      <Text
        color="blue.100"
        fontSize="lg"
        my={8}
        fontWeight="regular"
      >
        Por favor, preencha todas as entradas para criar um novo
        conta.
      </Text>

      <Box bg="blue.800" px={4} py={4} rounded="lg">
        <Input
          label="Login"
          placeholder="Digite seu login"
        />

        <Input
          label="Telefone"
          placeholder="Digite seu login"
        />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </Box>

      <VStack mt={16}>
        <Button
          label="Sign Up"
        />

        <HStack alignItems="center" justifyContent="center">
          <Text fontSize="lg" color="gray.100" >Já possui uma conta?</Text>
          <Button
            label="Fazer Login"
            variant="outline"
          />
        </HStack>
      </VStack>

      <VStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Divider w="93" bg="blue.100" />
          <Text
            fontSize={14}
            color="blue.100"
            fontWeight="regular"
          >
            Ou entre com
          </Text>
          <Divider w="93" bg="blue.100" />
        </HStack>

        <HStack alignItems="center" justifyContent="center" my={17}>
          <IconButton
            icon={GoogleSvg}

          />
          <IconButton
            icon={FacebookSvg}
            mx={4}
          />
          <IconButton
            icon={LinkedinSvg}
          />
        </HStack>
      </VStack>
    </VStack>
  )
}