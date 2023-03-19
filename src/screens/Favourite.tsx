import { Button, HStack, Heading, Image, ScrollView, Text, VStack, Icon, Box } from "native-base";
import { IconButton } from "@components/IconButton";

import { HEADINGFONTSIZE, PADDINGBACKGROUND, PADDINGTOP } from '@global/variables';
import { AntDesign } from '@expo/vector-icons';

import MenuIcon from '@assets/svg/menu_icon.svg';
import BellIcon from '@assets/svg/bell_icon.svg';
import HeartIcon from '@assets/svg/heart_icon.svg';

import { useState } from "react";

export function Favourite() {
  const [stepSelected, setStepSelected] = useState('popular');

  return (
    <VStack bg="blue.900" flex={1} px={PADDINGBACKGROUND}>
      <HStack
        paddingTop={PADDINGTOP}
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          icon={MenuIcon}
        />

        <Heading
          color="white"
          fontSize={HEADINGFONTSIZE}
        >
          Favourite books
        </Heading>

        <IconButton
          icon={BellIcon}
        />
      </HStack>

      <HStack
        bg="blue.800"
        rounded="lg"
        justifyContent="space-between"
        px={5}
        mt={8}
      >
        <Button
          bg="blue.800"
          borderBottomWidth={5}
          borderBottomColor={stepSelected === 'popular' ? 'red.900' : 'blue.800'}
          borderRadius="none"
          _pressed={{
            bg: "blue.800"
          }}
          onPress={() => setStepSelected('popular')}
        >
          <Text
            color={stepSelected === "popular" ? "white" : "blue.100"}
            fontSize={16}
            fontWeight={stepSelected === "popular" ? "bold" : "medium"}
          >
            Popular
          </Text>
        </Button>

        <Button
          bg="blue.800"
          borderBottomWidth={5}
          borderBottomColor={stepSelected === 'newReleased' ? 'red.900' : 'blue.800'}
          borderRadius="none"
          _pressed={{
            bg: "blue.800"
          }}
          onPress={() => setStepSelected('newReleased')}
        >
          <Text
            color={stepSelected === "newReleased" ? "white" : "blue.100"}
            fontSize={16}
            fontWeight={stepSelected === "newReleased" ? "bold" : "medium"}
          >
            New Released
          </Text>
        </Button>

        <Button
          bg="blue.800"
          borderBottomWidth={5}
          borderBottomColor={stepSelected === 'onSale' ? 'red.900' : 'blue.800'}
          borderRadius="none"
          _pressed={{
            bg: "blue.800"
          }}
          onPress={() => setStepSelected('onSale')}
        >
          <Text
            color={stepSelected === "onSale" ? "white" : "blue.100"}
            fontSize={16}
            fontWeight={stepSelected === "onSale" ? "bold" : "medium"}
          >
            On Sale
          </Text>
        </Button>
      </HStack>

      <ScrollView
        mt={4}
        contentContainerStyle={{
          paddingBottom: 150
        }}
        showsVerticalScrollIndicator={false}
        marginBottom={110}
      >
        <HStack bg="blue.800" p={4} rounded="2xl" mb={4}>
          <Image
            source={{ uri: "https://miblart.com/wp-content/uploads/2020/11/RKdkMtMs-683x1024.jpg" }}
            alt="book image"
            w={109}
            h={133}
            resizeMode="cover"
            rounded="lg"
          />

          <VStack flex={1} marginLeft={4}>
            <Heading color="white">Fury Born of Night</Heading>
            <Text color="blue.100" fontSize={16}>By Rick mofina</Text>

            <HStack marginTop={2}>
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
            </HStack>

            <HStack
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Text
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                R$ 30,50
              </Text>

              <IconButton
                icon={HeartIcon}
                color="white"
                bg="rgba(255, 255, 255, 0.2)"
                rounded="2xl"
              />
            </HStack>
          </VStack>
        </HStack>

        <HStack bg="blue.800" p={4} rounded="2xl" mb={4}>
          <Image
            source={{ uri: "https://miblart.com/wp-content/uploads/2020/11/RKdkMtMs-683x1024.jpg" }}
            alt="book image"
            w={109}
            h={133}
            resizeMode="cover"
            rounded="lg"
          />

          <VStack flex={1} marginLeft={4}>
            <Heading color="white">Fury Born of Night</Heading>
            <Text color="blue.100" fontSize={16}>By Rick mofina</Text>

            <HStack marginTop={2}>
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
            </HStack>

            <HStack
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Text
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                R$ 30,50
              </Text>

              <IconButton
                icon={HeartIcon}
                color="white"
                bg="rgba(255, 255, 255, 0.2)"
                rounded="2xl"
              />
            </HStack>
          </VStack>
        </HStack>

        <HStack bg="blue.800" p={4} rounded="2xl" mb={4}>
          <Image
            source={{ uri: "https://miblart.com/wp-content/uploads/2020/11/RKdkMtMs-683x1024.jpg" }}
            alt="book image"
            w={109}
            h={133}
            resizeMode="cover"
            rounded="lg"
          />

          <VStack flex={1} marginLeft={4}>
            <Heading color="white">Fury Born of Night</Heading>
            <Text color="blue.100" fontSize={16}>By Rick mofina</Text>

            <HStack marginTop={2}>
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
            </HStack>

            <HStack
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Text
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                R$ 30,50
              </Text>

              <IconButton
                icon={HeartIcon}
                color="white"
                bg="rgba(255, 255, 255, 0.2)"
                rounded="2xl"
              />
            </HStack>
          </VStack>
        </HStack>

        <HStack bg="blue.800" p={4} rounded="2xl" mb={4}>
          <Image
            source={{ uri: "https://miblart.com/wp-content/uploads/2020/11/RKdkMtMs-683x1024.jpg" }}
            alt="book image"
            w={109}
            h={133}
            resizeMode="cover"
            rounded="lg"
          />

          <VStack flex={1} marginLeft={4}>
            <Heading color="white">Fury Born of Night</Heading>
            <Text color="blue.100" fontSize={16}>By Rick mofina</Text>

            <HStack marginTop={2}>
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
              <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="#FEC31A"
                marginRight={1}
              />
            </HStack>

            <HStack
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Text
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                R$ 30,50
              </Text>

              <IconButton
                icon={HeartIcon}
                color="white"
                bg="rgba(255, 255, 255, 0.2)"
                rounded="2xl"
              />
            </HStack>
          </VStack>
        </HStack>
      </ScrollView>
    </VStack>
  )
}