import { IconButton } from "@components/IconButton";
import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";
import { HStack, Heading, Text, VStack } from "native-base";
import ArrowLeft from "@assets/svg/arrow-left.svg";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export default function ProfileDetails() {
  const { goBack } = useNavigation();

  return (
    <VStack flex={1} bg="blue.900" px={PADDINGBACKGROUND}>
      <HStack paddingTop={PADDINGTOP} alignItems="center">
        <IconButton icon={ArrowLeft} iconType="stroke" onPress={goBack} />

        <Heading
          color="white"
          fontSize={HEADINGFONTSIZE}
          textAlign="center"
          flex={1}
          ml={-10}
        >
          Profile Details
        </Heading>
      </HStack>

      <VStack mt={8}>
        <Text fontSize={22} color="#FFFFFF" fontWeight="medium">
          About
        </Text>

        <VStack bg="blue.800" px={4} py={4} rounded="lg" space={4} mt={5}>
          <Input label="Name" value="Shahinur Rahman" />
          <Input label="Gender" value="Male" />
          <Input
            label="Date of birth"
            value="05-05-1995"
            keyboardType="decimal-pad"
          />
        </VStack>
      </VStack>

      <VStack mt={8}>
        <Text fontSize={22} color="#FFFFFF" fontWeight="medium">
          Communucation
        </Text>

        <VStack bg="blue.800" px={4} py={4} rounded="lg" space={4} mt={5}>
          <Input label="Email" value="shahinurstk02@gmail.com" />
          <Input
            label="Phone"
            value="+4433445566778"
            keyboardType="decimal-pad"
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
