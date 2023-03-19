import {
  Box,
  HStack,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { IBookProps } from "src/@types/IBookProps";
import { ICartProps } from "src/@types/ICartProps";
import { cartAdd, cartRemoveQuantity } from "@storage/cartStorage";

interface ICartItemProps {
  item: ICartProps;
}

export function CartItem({ item }: ICartItemProps) {
  return (
    <HStack
      bg="blue.800"
      justifyContent="space-between"
      alignItems="flex-start"
      p={4}
      rounded="2xl"
    >
      <Image
        source={{
          uri: item.image,
        }}
        h={132}
        w={109}
        rounded="2xl"
        resizeMode="cover"
        alt="capa do livro"
      />

      <VStack flex={1} marginLeft={4}>
        <Heading numberOfLines={2} color="white" fontSize={22}>
          {item.name}
        </Heading>

        <Text fontSize={16} color="blue.100">
          {item.author}
        </Text>

        <HStack
          bg="#ffffff08"
          w={99}
          h={10}
          borderRadius="8"
          alignItems="center"
          mt={2}
        >
          <Pressable
            justifyContent="center"
            px={1}
            onPress={() => cartRemoveQuantity(item.id)}
          >
            <AntDesign name="minus" size={24} color="#A0A0CC" />
          </Pressable>
          <Text
            fontSize={18}
            color="red.900"
            fontWeight="bold"
            flex={1}
            textAlign="center"
          >
            {item.quantity}
          </Text>
          <Pressable
            justifyContent="center"
            px={1}
            onPress={() => cartAdd(item)}
          >
            <AntDesign name="plus" size={24} color="#A0A0CC" />
          </Pressable>
        </HStack>
      </VStack>

      <Box bg="red.900" px={4} py={2} rounded="2xl">
        <Text fontSize={20} color="white" fontWeight="medium">
          ${item.rental}
        </Text>
      </Box>
    </HStack>
  );
}
