import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { Box, NativeBaseProvider, Spinner } from "native-base";

import { useFonts } from "@expo-google-fonts/source-sans-pro";

import { THEME } from "./src/theme";

import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawnerMenu } from "@components/DrawnerMenu";
import { Splash } from "@screens/Splash";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Cerebri-100": require("./src/assets/fonts/CerebriSansPro-Thin.ttf"),
    "Cerebri-200": require("./src/assets/fonts/CerebriSansPro-ExtraLight.ttf"),
    "Cerebri-300": require("./src/assets/fonts/CerebriSansPro-Light.ttf"),
    "Cerebri-400": require("./src/assets/fonts/CerebriSansPro-Regular.ttf"),
    "Cerebri-500": require("./src/assets/fonts/CerebriSansPro-Medium.ttf"),
    "Cerebri-700": require("./src/assets/fonts/CerebriSansPro-Bold.ttf"),
    "Cerebri-900": require("./src/assets/fonts/CerebriSansPro-ExtraBold.ttf"),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider theme={THEME}>
        <StatusBar barStyle="light-content" />

        {!fontsLoaded ? (
          <Splash />
        ) : (
          <Box flex={1} bg="blue.900">
            <Routes />
          </Box>
        )}
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
