import { Dimensions } from "react-native";
import { Box, HStack, Heading, Input, Text, VStack } from "native-base";

import { IconButton } from "@components/IconButton";
import FilterIcon from "@assets/svg/filter_icon.svg";

import MenuIcon from "@assets/svg/menu_icon.svg";
import BellIcon from "@assets/svg/bell_icon.svg";
import SearchIcon from "@assets/svg/search_icon.svg";
import DownFullIcon from "@assets/svg/down_full_icon.svg";

import { Carousel } from "@components/Carousel";
import { useNavigation } from "@react-navigation/native";

import { PADDINGBACKGROUND, PADDINGTOP } from "@global/variables";

const SLIDER_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const ITEM_WIDTH = SLIDER_WIDTH * 0.88;

export function Dashboard() {
  const { navigate } = useNavigation();

  return (
    <VStack flex={1} bg="blue.900">
      <HStack
        alignItems="center"
        justifyContent="space-between"
        paddingTop={PADDINGTOP}
        px={PADDINGBACKGROUND}
      >
        <IconButton icon={MenuIcon} />

        <Heading color="white" fontSize={24}>
          Home
        </Heading>

        <IconButton icon={BellIcon} onPress={() => navigate("Notifications")} />
      </HStack>

      <Heading color="white" fontSize={32} px={PADDINGBACKGROUND} mt={8} mb={4}>
        Qual livro você quer comprar?
      </Heading>

      <HStack px={PADDINGBACKGROUND}>
        <Input
          flex={1}
          borderRadius={15}
          bg="blue.800"
          borderColor="blue.800"
          InputLeftElement={
            <Box paddingLeft={2}>
              <SearchIcon />
            </Box>
          }
          fontSize={16}
          color="blue.100"
          placeholder="Procure um livro"
          _focus={{
            bg: "blue.800",
            borderColor: "blue.100",
          }}
          marginRight={4}
        />

        <IconButton icon={FilterIcon} type="red" />
      </HStack>

      <HStack px={PADDINGBACKGROUND} justifyContent="space-between" my={6}>
        <Text color="white" fontSize={20} fontWeight="bold">
          Livros populares
        </Text>

        <HStack alignItems="center">
          <Text color="blue.100" fontSize={20} fontWeight="regular">
            Todos
          </Text>
          <DownFullIcon />
        </HStack>
      </HStack>

      <Carousel />
    </VStack>
  );
}
