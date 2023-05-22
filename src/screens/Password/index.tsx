import { useState } from "react";
import { HStack, Heading, Pressable, Text, VStack } from "native-base";
import { IconButton } from "@components/IconButton";
import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";
import ArrowLeft from "@assets/svg/arrow-left.svg";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";

import OpenEyeIcon from "@assets/svg/open-eye_icon.svg";

export default function Password() {
  const [showPassword, setShowPassword] = useState(false);

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
          Password Changes
        </Text>

        <VStack bg="blue.800" px={4} py={4} rounded="lg" space={4} mt={5}>
          <Input
            label="Old Password"
            placeholder="*********"
            rightElement={
              <Pressable px={2} onPress={() => setShowPassword(!showPassword)}>
                <OpenEyeIcon />
              </Pressable>
            }
            secureTextEntry={!showPassword}
          />
          <Input
            label="New Password"
            placeholder="*********"
            rightElement={
              <Pressable px={2} onPress={() => setShowPassword(!showPassword)}>
                <OpenEyeIcon />
              </Pressable>
            }
            secureTextEntry={!showPassword}
          />
          <Input
            label="Confirm Password"
            placeholder="******"
            rightElement={
              <Pressable px={2} onPress={() => setShowPassword(!showPassword)}>
                <OpenEyeIcon />
              </Pressable>
            }
            secureTextEntry={!showPassword}
          />
        </VStack>

        <Button label="Save Changes" mt={10} />
      </VStack>
    </VStack>
  );
}
