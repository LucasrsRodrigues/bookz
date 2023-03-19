import { Dimensions } from "react-native";
import { Box, HStack, Heading, Text, VStack } from "native-base";
import { IconButton } from "./IconButton";

import LeftIcon from '@assets/svg/arrow-left.svg';
import RightIcon from '@assets/svg/arrow-right.svg';


import ProfileIcon from '@assets/svg/profile-circle.svg';


const WINDOW_HEIGHT = Dimensions.get('window').height;


const drawnerOptions = [
  {
    id: "0",
    label: "Profile",
    icon: ProfileIcon
  },
  {
    id: "1",
    label: "Offers",
    icon: ProfileIcon
  },
  {
    id: "2",
    label: "Reviews",
    icon: ProfileIcon
  },
  {
    id: "3",
    label: "Receipt",
    icon: ProfileIcon
  },
  {
    id: "4",
    label: "Locate Shop",
    icon: ProfileIcon
  },
  {
    id: "5",
    label: "Delivery",
    icon: ProfileIcon
  },
];

export function DrawnerMenu() {
  return (
    <HStack flex={1} position="absolute" w="100%" h={WINDOW_HEIGHT}>
      <VStack
        width={336}
        height={WINDOW_HEIGHT}
        bg="blue.900"
        left={0}
        right={0}
        p={6}
      >
        <HStack mt={60} alignItems="center">
          <IconButton
            icon={LeftIcon}
            iconType="stroke"
          />

          <Heading color="white" ml="44">Menu</Heading>
        </HStack>

        <VStack marginTop={"52px"}>

          {drawnerOptions.map(({ id, label, icon: Icon }) => (
            <HStack alignItems="center" key={id} my={2}>
              <HStack alignItems="center" flex={1}>
                <Box
                  w={16}
                  h={16}
                  bg="blue.800"
                  rounded="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon />
                </Box>

                <Text
                  color="white"
                  fontSize={18}
                  fontWeight="bold"
                  marginLeft={3}
                >
                  {label}
                </Text>
              </HStack>

              <IconButton
                icon={RightIcon}
                iconType="stroke"
                bg="blue.700"
              />
            </HStack>
          ))}

        </VStack>

      </VStack>
      <Box bg="blue.100" flex={1} opacity={0.5} />
    </HStack>
  )
}