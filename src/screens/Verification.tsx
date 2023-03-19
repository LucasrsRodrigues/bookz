import { Button } from "@components/Button";
import { Box, HStack, Heading, Text, VStack, Button as NBButton } from "native-base";
import ArrowLeftIcon from '@assets/svg/arrow-left.svg';

import BackspaceIcon from '@assets/svg/backspace_icon.svg';
import { IconButton } from "@components/IconButton";

export function Verification() {
  return (
    <VStack bg="blue.900" flex={1} paddingTop={60}>

      <VStack px={6}>
        <IconButton
          icon={ArrowLeftIcon}
          mb={8}
        />

        <Heading color="white" fontSize={32}>Verificação</Heading>

        <Text color="blue.100" fontSize={18}>
          Um código de 4 dígitos foi enviado para
          +101234567899
        </Text>

        <HStack justifyContent="space-around" my={58}>
          <Box
            w={16}
            h={16}
            bg="blue.800"
            rounded="lg"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize={24}
              color="blue.100"
              fontWeight="medium"
            >
              4
            </Text>
          </Box>

          <Box
            w={16}
            h={16}
            bg="blue.800"
            rounded="lg"
            alignItems="center"
            justifyContent="center"
          >
            {/* <Text
            fontSize={24}
            color="blue.100"
            fontWeight="medium"
          >

          </Text> */}

            <Box w={3} h={3} bg="blue.100" rounded="full"></Box>
          </Box>

          <Box
            w={16}
            h={16}
            bg="blue.800"
            rounded="lg"
            alignItems="center"
            justifyContent="center"
          >
            <Box w={3} h={3} bg="blue.100" rounded="full"></Box>
          </Box>

          <Box
            w={16}
            h={16}
            bg="blue.800"
            rounded="lg"
            alignItems="center"
            justifyContent="center"
          >
            <Box w={3} h={3} bg="blue.100" rounded="full"></Box>
          </Box>
        </HStack>

        <Button label="Resend OTP" />

        <Button label="Reenviar 30s" variant="outline" />
      </VStack>


      <VStack bg="blue.800" flex={1} alignItems="center" justifyContent="center" >
        {/*    */}
        <HStack px={3}>
          <NBButton mb={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">1</Text>
          </NBButton>

          <NBButton mb={3} mx={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">2</Text>
          </NBButton>

          <NBButton mb={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">3</Text>
          </NBButton>
        </HStack>

        <HStack px={3}>
          <NBButton mb={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">4</Text>
          </NBButton>

          <NBButton mb={3} mx={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">5</Text>
          </NBButton>

          <NBButton mb={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">6</Text>
          </NBButton>
        </HStack>

        <HStack px={3}>
          <NBButton mb={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">7</Text>
          </NBButton>
          <NBButton mb={3} mx={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">8</Text>
          </NBButton>
          <NBButton mb={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">9</Text>
          </NBButton>
        </HStack>

        <HStack px={3}>
          <NBButton mb={3} flex={1} h={58} bg="blue.700">
          </NBButton>
          <NBButton mb={3} mx={3} flex={1} h={58} bg="blue.700">
            <Text color="blue.100" fontSize={24} fontWeight="bold">0</Text>
          </NBButton>
          <NBButton mb={3} flex={1} h={58} bg="blue.700">
            <BackspaceIcon />
          </NBButton>
        </HStack>
      </VStack>
    </VStack>
  )
}