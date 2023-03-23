import { HStack, Heading, ScrollView, VStack } from "native-base";
import { IconButton } from "@components/IconButton";

import LeftIcon from "@assets/svg/arrow-left.svg";
import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";
import { useNavigation } from "@react-navigation/native";

export function Notifications() {
  const { goBack } = useNavigation();

  return (
    <VStack bg="blue.900" flex={1} px={PADDINGBACKGROUND}>
      <HStack alignItems="center" paddingTop={PADDINGTOP}>
        <IconButton icon={LeftIcon} iconType="stroke" onPress={goBack} />

        <Heading color="white" fontSize={HEADINGFONTSIZE} marginLeft={60}>
          Notification
        </Heading>
      </HStack>

      <ScrollView borderRadius="15px" marginTop={8}></ScrollView>
    </VStack>
  );
}
