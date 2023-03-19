import { Box, Pressable, ScrollView, VStack } from "native-base";
import { Swipeable } from "react-native-gesture-handler";
import { ICartProps } from "src/@types/ICartProps";
import TrashIcon from "@assets/svg/trash.svg";
import { CartItem } from "./CartItem";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Layout,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import { cartRemove } from "@storage/cartStorage";
import { Fragment, useRef } from "react";
import { Alert } from "react-native";

interface IListItensProps {
  itens: Array<ICartProps>;
  fetchCart: () => void;
}
export function ListItens({ itens, fetchCart }: IListItensProps) {
  const { navigate } = useNavigation();
  const swipeableRefs = useRef<Swipeable[]>([]);

  async function remove(id: string) {
    await cartRemove(id);

    fetchCart();
  }

  function handleRemove(id: string, index: number) {
    swipeableRefs.current?.[index].close();

    Alert.alert("Remover", "Deseja remover esse item?", [
      {
        text: "Sim",
        onPress: () => remove(id),
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  return (
    <Fragment>
      <ScrollView
        mt={10}
        background="transparent"
        showsVerticalScrollIndicator={false}
      >
        <VStack space={4} minH={200}>
          {itens.map((item, index) => (
            <Animated.View
              key={item.id}
              entering={SlideInRight}
              exiting={SlideOutLeft}
              layout={Layout.springify()}
            >
              <Swipeable
                ref={(ref) => {
                  if (ref) {
                    swipeableRefs.current.push(ref);
                  }
                }}
                overshootRight={false}
                renderRightActions={() => (
                  <Pressable
                    bg="#2B2A38"
                    borderRadius="8px"
                    p={4}
                    alignItems="center"
                    justifyContent="center"
                    ml={3}
                    onPress={() => handleRemove(item.id, index)}
                  >
                    <TrashIcon fill="#E40A13" />
                  </Pressable>
                )}
              >
                <CartItem item={item} />
              </Swipeable>
            </Animated.View>
          ))}
        </VStack>

        <Button
          label="Add to Checkout"
          mt={4}
          onPress={() => navigate("Cheakout")}
        />
      </ScrollView>
    </Fragment>
  );
}
