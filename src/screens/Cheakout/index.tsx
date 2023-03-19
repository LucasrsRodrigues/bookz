import { Button } from "@components/Button";
import { IconButton } from "@components/IconButton";
import {
  HEADINGFONTSIZE,
  PADDINGBACKGROUND,
  PADDINGTOP,
} from "@global/variables";
import { Box, HStack, Heading, Modal, Text, VStack } from "native-base";
import ArrowLeft from "@assets/svg/arrow-left.svg";
import CartLeft from "@assets/svg/menu/Cart.svg";
import { Input } from "@components/Input";
import DeclineIcon from "@assets/svg/decline.svg";
import Bagtick2Icon from "@assets/svg/bag-tick-2.svg";
import { useState } from "react";

export default function Cheakout() {
  const [openModalCheckout, setOpenModalCheckout] = useState(false);

  return (
    <VStack flex={1} bg="blue.900" px={PADDINGBACKGROUND}>
      <HStack
        paddingTop={PADDINGTOP}
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton icon={ArrowLeft} iconType="stroke" />

        <Heading color="white" fontSize={HEADINGFONTSIZE}>
          Checkout
        </Heading>

        <IconButton icon={CartLeft} />
      </HStack>

      <VStack mt={10} space={4} bg="#2B2A38" p={6} borderRadius="15px">
        <Input label="Name" />
        <Input label="Shipping Address" />
        <Input label="Payment Method" />
      </VStack>

      <VStack space={3} mt={10}>
        <Text fontSize={22} fontWeight="medium" color="#ffffff">
          Cheakout Info
        </Text>

        <HStack justifyContent="space-between">
          <Text fontSize={18} fontWeight="regular" color="#ffffff">
            Subtotal:
          </Text>
          <Text fontSize={18} fontWeight="regular" color="#ffffff">
            $61.00
          </Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text fontSize={18} fontWeight="regular" color="#ffffff">
            Delivery fee:
          </Text>
          <Text fontSize={18} fontWeight="regular" color="#ffffff">
            $10
          </Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text fontSize={18} fontWeight="regular" color="#ffffff">
            Discount:
          </Text>
          <Text fontSize={18} fontWeight="regular" color="#ffffff">
            35%
          </Text>
        </HStack>

        <Box borderWidth={1} borderStyle="dashed" borderColor="#ffffff" />

        <HStack justifyContent="space-between">
          <Text fontSize={22} fontWeight="medium" color="#ffffff">
            Total
          </Text>
          <Text fontSize={22} fontWeight="medium" color="#ffffff">
            $39.65
          </Text>
        </HStack>
      </VStack>

      <Button
        label="Order Now"
        mt={10}
        onPress={() => setOpenModalCheckout(true)}
      />

      <Modal isOpen={openModalCheckout} bg="#A0A0CC40">
        <Box bg="#1E1E2A" p={9} borderRadius="20px" m={6}>
          <HStack justifyContent="flex-end">
            <IconButton
              icon={DeclineIcon}
              onPress={() => setOpenModalCheckout(true)}
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
              Order Successful
            </Text>
            <Text
              fontSize={18}
              color="#A0A0CC"
              fontWeight="regular"
              textAlign="center"
            >
              Your order #212423 is successfully Placed.
            </Text>
          </VStack>

          <VStack space={3} mt={10}>
            <Button
              label="Go Back"
              onPress={() => setOpenModalCheckout(true)}
            />
            <Button
              label="Continue"
              variant="outline"
              borderWidth={1}
              borderColor="#F6373F"
            />
          </VStack>
        </Box>
      </Modal>
    </VStack>
  );
}
