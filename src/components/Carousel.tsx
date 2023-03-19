import { useNavigation } from "@react-navigation/native";
import { getCarousel } from "@storage/bookStorage";
import { Box, FlatList, Image, Pressable } from "native-base";
import { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import { IBookProps } from "src/@types/IBookProps";

const { width } = Dimensions.get("window");

const BOOK_WIDTH = 262;
const BOOK_HEIGHT = 358;

// const carouselItem = [
//   {
//     id: "0",
//     url: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg",
//   },
//   {
//     id: "1",
//     url: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg",
//   },
//   {
//     id: "2",
//     url: "https://m.media-amazon.com/images/I/41Yzwvd85oS.jpg",
//   },
// ];

export function Carousel() {
  const [carouselItem, setCarouselItem] = useState<Array<IBookProps>>([]);

  const flatRef = useRef<typeof FlatList>(null);

  useEffect(() => {
    (async () => {
      const response = await getCarousel();
      setCarouselItem(response);
    })();
  }, []);

  const { navigate } = useNavigation();

  function sendToDetails(id: string) {
    navigate("Details", {
      bookID: id,
    });
  }

  return (
    <FlatList
      ref={flatRef}
      data={carouselItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      scrollEventThrottle={4}
      decelerationRate="fast"
      horizontal
      renderItem={({ item }) => (
        <Pressable onPress={() => sendToDetails(item.id)}>
          <Box
            w={BOOK_WIDTH}
            h={BOOK_HEIGHT}
            rounded="40px"
            overflow="hidden"
            mx={1}
          >
            <Image
              source={{ uri: item.image }}
              alt="livro"
              flex={1}
              resizeMode="contain"
            />
          </Box>
        </Pressable>
      )}
    />
  );
}
