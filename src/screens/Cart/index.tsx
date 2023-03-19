import { useCallback, useEffect, useState } from "react";
import { Box, HStack, Heading, VStack } from "native-base";
import { IconButton } from "@components/IconButton";

import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ICartProps } from "src/@types/ICartProps";

import MenuIcon from "@assets/svg/menu_icon.svg";
import OptionsIcon from "@assets/svg/options_icon.svg";
import { EmptyList } from "./components/EmptyList";
import { ListItens } from "./components/ListItens";
import { cartGetAll } from "@storage/cartStorage";
import { Loading } from "@components/Loading";

export function Cart() {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<Array<ICartProps>>([]);

  async function fetchCart() {
    const response = await cartGetAll();
    setCartItems(response);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchCart();
    }, [])
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bg="blue.900" px={PADDINGBACKGROUND}>
      <HStack
        paddingTop={PADDINGTOP}
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton icon={MenuIcon} />

        <Heading color="white" fontSize={HEADINGFONTSIZE}>
          Cart
        </Heading>

        <IconButton icon={OptionsIcon} />
      </HStack>
      <ListItens itens={cartItems} fetchCart={fetchCart} />
    </VStack>
  );
}
