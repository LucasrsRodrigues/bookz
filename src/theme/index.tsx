import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue: {
      100: "#A0A0CC",
      700: "#383649",
      800: "#2B2A38",
      900: "#1E1E2A"
    },
    red: {
      900: "#F6373F"
    }
  },
  fontConfig: {
    Cerebri: {
      100: {
        normal: "Cerebri-100",
      },
      200: {
        normal: "Cerebri-200",
      },
      300: {
        normal: "Cerebri-300",
      },
      400: {
        normal: "Cerebri-400",
      },
      500: {
        normal: "Cerebri-500",
      },
      700: {
        normal: "Cerebri-700",
      },
      900: {
        normal: "Cerebri-900",
      },
    },
  },
  fonts: {
    heading: "Cerebri",
    body: "Cerebri",
    mono: "Cerebri",
  },
  fontSizes: {
    xs: 7,
    sm: 8,
    md: 15,
    lg: 15,
    xl: 32
  },
  sizes: {
    13: 52,
    15: 60,
    18: 72,
    33: 148
  }

})
