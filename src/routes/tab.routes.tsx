import { Box, useTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '@screens/Dashboard';

import HomeSvg from '@assets/svg/menu/Home.svg';
import FavouriteSvg from '@assets/svg/menu/Favourite.svg';
import CartSvg from '@assets/svg/menu/Cart.svg';
import SettingsSvg from '@assets/svg/menu/Settings.svg';
import { Favourite } from '@screens/Favourite';
import { Cart } from '@screens/Cart';
import { Settings } from '@screens/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

const menuItens = [
  {
    id: "0",
    icon: HomeSvg,
    name: 'Dashboard',
    component: Dashboard
  },
  {
    id: "1",
    icon: FavouriteSvg,
    name: 'Favourite',
    component: Favourite
  },
  {
    id: "2",
    icon: CartSvg,
    name: 'Cart',
    component: Cart
  },
  {
    id: "3",
    icon: SettingsSvg,
    name: 'Settings',
    component: Settings
  },
];


export default function TabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: theme.colors.blue[800],
          borderRadius: 15,
          height: 92,
          paddingVertical: 24,
          borderTopWidth: 0
        }
      }}
    >

      {menuItens.map(({ id, name, component: Component, icon: Icon }) => (
        <Screen
          key={id}
          name={name}
          component={Component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Box
                bg={focused ? "red.900" : 'blue.800'}
                w="57"
                h="57"
                rounded="lg"
                borderWidth={1}
                borderColor="gray.800"
                alignItems="center"
                justifyContent="center"
              >
                <Icon fill={focused ? "white" : "#A0A0CC"} />
              </Box>
            ),
          }}

        />
      ))}

    </Navigator>
  );
}
