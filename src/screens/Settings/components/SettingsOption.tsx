import { Box, Button, HStack, Text, VStack } from "native-base";

import ProfileCircle from "@assets/svg/profile-circle.svg";
import ArrowRight from "@assets/svg/arrow-right.svg";
import { SvgProps } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

interface ISettingsOptionProps {
  icon: React.FC<SvgProps>;
  label: string;
  complement?: string;
  to: string;
}

export function SettingsOption({
  label,
  complement,
  icon: Icon,
  to,
}: ISettingsOptionProps) {
  const { navigate } = useNavigation();

  return (
    <HStack alignItems="center">
      <Box
        h={16}
        w={16}
        bg="#383649"
        rounded="full"
        alignItems="center"
        justifyContent="center"
      >
        <Icon fill="#A0A0CC" />
      </Box>

      <VStack ml={3} flex={1}>
        <Text fontSize={18} fontWeight="bold" color="#ffffff">
          {label}
        </Text>
        {complement && (
          <Text fontSize={14} fontWeight="light" color="#A0A0CC">
            {complement}
          </Text>
        )}
      </VStack>

      <Button
        w={12}
        h={12}
        bg="#383649"
        rounded="lg"
        onPress={() => navigate(to)}
        _pressed={{
          bg: "#38364980",
        }}
      >
        <ArrowRight />
      </Button>
    </HStack>
  );
}
