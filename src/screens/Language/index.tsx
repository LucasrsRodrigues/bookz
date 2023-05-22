import {
  Box,
  HStack,
  Heading,
  Input,
  Radio,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { IconButton } from "@components/IconButton";
import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";
import ArrowLeft from "@assets/svg/arrow-left.svg";
import { useNavigation } from "@react-navigation/native";

import SearchSVG from "@assets/svg/search_icon.svg";
import { Button } from "@components/Button";

import EUAFlag from "@assets/svg/flags/EUA_flag.svg";

export default function Language() {
  const { goBack } = useNavigation();

  return (
    <VStack flex={1} bg="blue.900" px={PADDINGBACKGROUND}>
      <HStack paddingTop={PADDINGTOP} alignItems="center">
        <IconButton icon={ArrowLeft} iconType="stroke" onPress={goBack} />

        <Heading
          color="white"
          fontSize={HEADINGFONTSIZE}
          textAlign="center"
          flex={1}
          ml={-10}
        >
          Language
        </Heading>
      </HStack>

      <Box mt={8}>
        <Input
          bg="blue.700"
          borderWidth={2}
          borderColor="blue.700"
          padding={4}
          color="blue.100"
          fontSize="md"
          rounded="2xl"
          fontWeight="regular"
          marginTop={2}
          _focus={{
            bg: "blue.700",
            borderWidth: 2,
            borderColor: "blue.100",
          }}
          leftElement={
            <Box pl={2}>
              <SearchSVG />
            </Box>
          }
        />
      </Box>

      <ScrollView
        bg="#2B2A38"
        mt={6}
        mb={12}
        rounded="2xl"
        _contentContainerStyle={{
          p: 6,
        }}
      >
        <HStack bg="#383649" p={3} alignItems="center" borderRadius={8}>
          <Box>
            <EUAFlag />
          </Box>

          <Box flex={1} ml={4}>
            <Text fontSize={16} fontWeight="medium" color="#A0A0CC">
              English
            </Text>
          </Box>

          <Radio.Group
            defaultValue="1"
            name="exampleGroup"
            accessibilityLabel="language"
          >
            <Radio
              colorScheme="red"
              value="1"
              my={1}
              accessibilityLabel="EUA"
              bg="transparent"
            />
          </Radio.Group>
        </HStack>
      </ScrollView>

      <Button label="Save Language" mb={10} />
    </VStack>
  );
}
