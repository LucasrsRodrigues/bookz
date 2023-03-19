import {
  Box,
  HStack,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { IconButton } from "@components/IconButton";
import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";
import LeftArrow from "@assets/svg/arrow-left.svg";
import OptionsIcon from "@assets/svg/options_icon.svg";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Fragment, useEffect, useState } from "react";
import { IBookProps } from "src/@types/IBookProps";
import { getItem } from "@storage/bookStorage";
import { useAlert } from "@hooks/Alert";
import { cartAdd } from "@storage/cartStorage";

export default function Details() {
  const [book, setBook] = useState<IBookProps>({} as IBookProps);
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();

  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();

  async function addCart() {
    try {
      await cartAdd(book);

      showAlert({
        message: "Item adicionado ao carrinho.",
        type: "success",
      });

      navigate("Dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (params?.bookID) {
      setLoading(true);

      (async () => {
        try {
          const response = await getItem(params?.bookID);

          setBook(response);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, []);

  if (loading) {
    return (
      <Box bg="blue.900" flex={1} alignItems="center" justifyContent="center">
        <Spinner size="lg" />
      </Box>
    );
  }

  return (
    <Fragment>
      <ScrollView flex={1} bg="blue.900" showsVerticalScrollIndicator={false}>
        <VStack px={PADDINGBACKGROUND} mb={20}>
          <HStack
            paddingTop={PADDINGTOP}
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton icon={LeftArrow} iconType="stroke" onPress={goBack} />

            <Heading color="white" fontSize={HEADINGFONTSIZE}>
              Book details
            </Heading>

            <IconButton icon={OptionsIcon} />
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" mt={8}>
            <Box w={304} h={367} rounded="3xl" overflow="hidden">
              <Image
                source={{
                  uri: book.image,
                }}
                alt="livro"
                width="100%"
                height="100%"
              />
            </Box>

            <VStack bg="#2B2A38" p={6} justifyContent="space-between" h={320}>
              <Box alignItems="center">
                <Text fontSize={24} fontWeight="medium" color="#ffffff">
                  {book.stock}
                </Text>
                <Text fontSize={14} color="#A0A0CC" fontWeight="medium">
                  Stock
                </Text>
              </Box>

              <Box alignItems="center">
                <Text fontSize={24} fontWeight="medium" color="#ffffff">
                  {book.sold}
                </Text>
                <Text fontSize={14} color="#A0A0CC" fontWeight="medium">
                  Sold
                </Text>
              </Box>

              <Box alignItems="center">
                <Text fontSize={24} fontWeight="medium" color="#ffffff">
                  {book.sold}
                </Text>
                <Text fontSize={14} color="#A0A0CC" fontWeight="medium">
                  Rating
                </Text>
              </Box>
            </VStack>
          </HStack>

          <HStack alignItems="center" justifyContent="space-between" mt={8}>
            <VStack>
              <Text fontSize={28} fontWeight="bold" color="#ffffff" maxW={300}>
                {book.name}
              </Text>
              <Text fontSize={16} fontWeight="regular" color="#A0A0CC">
                By {book.author}
              </Text>
            </VStack>
            <Text fontSize={24} fontWeight="medium" color="#A0A0CC">
              ${book.rental}
            </Text>
          </HStack>

          <VStack mt={6}>
            <Text fontSize={20} fontWeight="medium" color="#ffffff">
              Description
            </Text>
            <Text
              fontSize={16}
              fontWeight="regular"
              color="#A0A0CC"
              lineHeight={25}
              mt={2}
              overflow="hidden"
            >
              {book.description?.substring(0, 206)}

              {book.description?.length > 206 && (
                <Pressable>
                  <Text fontSize={16} fontWeight="regular" color="#F6373F">
                    ...See More
                  </Text>
                </Pressable>
              )}
            </Text>
          </VStack>
        </VStack>
      </ScrollView>
      <Box bg="blue.900" pb={10} shadow={3} px={3}>
        <Button label="Buy this book" mt={6} onPress={addCart} />
      </Box>
    </Fragment>
  );
}
