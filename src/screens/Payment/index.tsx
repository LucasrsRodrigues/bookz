import { IconButton } from "@components/IconButton";
import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";
import { Box, HStack, Heading, Text, VStack, Modal } from "native-base";
import ArrowLeft from "@assets/svg/arrow-left.svg";
import { Entypo } from "@expo/vector-icons";

import MastercardIcon from "@assets/svg/mastercard_icon.svg";
import VisaIcon from "@assets/svg/visa_icon.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import CartLeft from "@assets/svg/menu/Cart.svg";
import DeclineIcon from "@assets/svg/decline.svg";
import Bagtick2Icon from "@assets/svg/bag-tick-2.svg";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
  const [openModalCheckout, setOpenModalCheckout] = useState(false);
  const { navigate } = useNavigation();

  function canContinue() {
    setOpenModalCheckout(false);
    navigate("Payment");
  }

  return (
    <VStack flex={1} bg="blue.900" px={PADDINGBACKGROUND} space={8}>
      <HStack paddingTop={PADDINGTOP} alignItems="center">
        <IconButton icon={ArrowLeft} iconType="stroke" />

        <Heading
          color="white"
          fontSize={HEADINGFONTSIZE}
          flex={1}
          textAlign="center"
          ml={-57}
        >
          Payment
        </Heading>
      </HStack>

      <VStack bg="#2B2A38" p={6} borderRadius={15} space={4}>
        <Text fontSize={20} color="#ffffff" fontWeight="medium">
          Payment Method
        </Text>

        <HStack bg="#383649" p={4} borderRadius={10} space={4}>
          <Box
            bg="#383649"
            p={4}
            shadow={2}
            alignItems="center"
            justifyContent="center"
          >
            <MastercardIcon />
          </Box>

          <VStack space={1}>
            <Text fontSize={18} color="#ffffff" fontWeight="medium">
              Master Card
            </Text>
            <HStack space={2}>
              <Entypo name="dots-three-horizontal" size={24} color="#A0A0CC" />
              <Entypo name="dots-three-horizontal" size={24} color="#A0A0CC" />
              <Entypo name="dots-three-horizontal" size={24} color="#A0A0CC" />
              <Text fontSize={14} color="#A0A0CC" fontWeight="regular">
                2326
              </Text>
            </HStack>
          </VStack>
        </HStack>

        <HStack bg="#383649" p={4} borderRadius={10} space={4}>
          <Box
            bg="#383649"
            p={4}
            shadow={2}
            alignItems="center"
            justifyContent="center"
          >
            <VisaIcon />
          </Box>

          <VStack space={1}>
            <Text fontSize={18} color="#ffffff" fontWeight="medium">
              Visa Card
            </Text>
            <HStack space={2}>
              <Entypo name="dots-three-horizontal" size={24} color="#A0A0CC" />
              <Entypo name="dots-three-horizontal" size={24} color="#A0A0CC" />
              <Entypo name="dots-three-horizontal" size={24} color="#A0A0CC" />
              <Text fontSize={14} color="#A0A0CC" fontWeight="regular">
                1234
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>

      <VStack>
        <Text fontSize={22} fontWeight="medium" color="#fff">
          Card Information
        </Text>

        <VStack bg="#2B2A38" p={6} space={4}>
          <Input label="Card Number" value="1111 2222 3333 4444" />

          <HStack space={10}>
            <Input label="Exp Date" value="08/24" w={20} />
            <Input label="CVV" value="123" w={20} />
          </HStack>
        </VStack>
      </VStack>

      <Button
        label="Confirm Payment"
        onPress={() => setOpenModalCheckout(true)}
      />

      <Modal isOpen={openModalCheckout} bg="#A0A0CC40">
        <Box bg="#1E1E2A" p={9} borderRadius="20px" m={6}>
          <HStack justifyContent="flex-end">
            <IconButton
              icon={DeclineIcon}
              onPress={() => setOpenModalCheckout(false)}
            />
          </HStack>

          <Box
            w={140}
            h={140}
            rounded="full"
            bg="#2B2A38"
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
          >
            <Bagtick2Icon />
          </Box>

          <VStack alignItems="center" mt={8}>
            <Text fontSize={24} color="#ffffff" fontWeight="medium">
              Payment Successful
            </Text>
            <Text
              fontSize={18}
              color="#A0A0CC"
              fontWeight="regular"
              textAlign="center"
            >
              Your payment is successfully completed.
            </Text>
          </VStack>

          <VStack space={3} mt={10}>
            <Button
              label="Go Back"
              onPress={() => setOpenModalCheckout(false)}
            />
            <Button
              label="Continue"
              variant="outline"
              borderWidth={1}
              borderColor="#F6373F"
              onPress={canContinue}
            />
          </VStack>
        </Box>
      </Modal>
    </VStack>
  );
}
