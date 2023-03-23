import { Box, Button, HStack, Heading, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "@components/IconButton";
import { PADDINGBACKGROUND, PADDINGTOP } from "@global/variables";

import ProfileCircle from "@assets/svg/profile-circle.svg";
import ArrowRight from "@assets/svg/arrow-right.svg";
import Lock from "@assets/svg/lock.svg";
import MenuIcon from "@assets/svg/menu_icon.svg";
import BellIcon from "@assets/svg/bell_icon.svg";
import WorldIcon from "@assets/svg/world.svg";

export function Settings() {
  const { navigate } = useNavigation();

  return (
    <VStack flex={1} bg="blue.900" px={PADDINGBACKGROUND} space={8}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        paddingTop={PADDINGTOP}
      >
        <IconButton icon={MenuIcon} />

        <Heading color="white" fontSize={24}>
          Settings
        </Heading>

        <IconButton icon={BellIcon} onPress={() => navigate("Notifications")} />
      </HStack>

      <VStack bg="#2B2A38" p={6} borderRadius={15} space={4}>
        <Text fontSize={20} color="#ffffff" fontWeight="bold">
          Accounts
        </Text>

        <HStack alignItems="center">
          <Box
            h={16}
            w={16}
            bg="#383649"
            rounded="full"
            alignItems="center"
            justifyContent="center"
          >
            <ProfileCircle />
          </Box>

          <VStack ml={3} flex={1}>
            <Text fontSize={18} fontWeight="bold" color="#ffffff">
              ProfileCircle
            </Text>
            <Text fontSize={14} fontWeight="light" color="#A0A0CC">
              Profile details
            </Text>
          </VStack>

          <Button w={12} h={12} bg="#383649" rounded="lg">
            <ArrowRight />
          </Button>
        </HStack>

        <HStack alignItems="center">
          <Box
            h={16}
            w={16}
            bg="#383649"
            rounded="full"
            alignItems="center"
            justifyContent="center"
          >
            <Lock fill="#A0A0CC" />
          </Box>

          <VStack ml={3} flex={1}>
            <Text fontSize={18} fontWeight="bold" color="#ffffff">
              Password and Security
            </Text>
            <Text fontSize={14} fontWeight="light" color="#A0A0CC">
              Personal password
            </Text>
          </VStack>

          <Button w={12} h={12} bg="#383649" rounded="lg">
            <ArrowRight />
          </Button>
        </HStack>
      </VStack>

      <VStack bg="#2B2A38" p={6} borderRadius={15} space={4}>
        <Text fontSize={20} color="#ffffff" fontWeight="bold">
          Settings
        </Text>

        <HStack alignItems="center">
          <Box
            h={16}
            w={16}
            bg="#383649"
            rounded="full"
            alignItems="center"
            justifyContent="center"
          >
            <WorldIcon />
          </Box>

          <VStack ml={3} flex={1}>
            <Text fontSize={18} fontWeight="bold" color="#ffffff">
              Language
            </Text>
          </VStack>

          <Button w={12} h={12} bg="#383649" rounded="lg">
            <ArrowRight />
          </Button>
        </HStack>

        <HStack alignItems="center">
          <Box
            h={16}
            w={16}
            bg="#383649"
            rounded="full"
            alignItems="center"
            justifyContent="center"
          >
            <BellIcon fill="#A0A0CC" />
          </Box>

          <VStack ml={3} flex={1}>
            <Text fontSize={18} fontWeight="bold" color="#ffffff">
              Notification Setting
            </Text>
          </VStack>

          <Button w={12} h={12} bg="#383649" rounded="lg">
            <ArrowRight />
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}
