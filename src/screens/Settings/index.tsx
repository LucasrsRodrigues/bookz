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
import { SettingsOption } from "./components/SettingsOption";

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

        <SettingsOption
          icon={ProfileCircle}
          label="Shahinur Rahman"
          complement="Profile details"
          to="ProfileDetails"
        />

        <SettingsOption
          icon={Lock}
          label="Password and Security"
          complement="Personal password"
          to="Password"
        />
      </VStack>

      <VStack bg="#2B2A38" p={6} borderRadius={15} space={4}>
        <Text fontSize={20} color="#ffffff" fontWeight="bold">
          Settings
        </Text>

        <SettingsOption icon={WorldIcon} label="Language" to="Language" />
        <SettingsOption
          icon={BellIcon}
          label="Notification Setting"
          to="NotificationSetting"
        />
      </VStack>
    </VStack>
  );
}
