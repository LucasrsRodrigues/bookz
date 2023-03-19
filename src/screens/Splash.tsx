import { Center } from "native-base";

import LogoSvg from '@assets/svg/logo.svg';

export function Splash() {
  return (
    <Center bg="blue.900" flex={1}>
      <LogoSvg />
    </Center>
  )
}