import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";
import { Notifications } from "@screens/Notifications";
import Cheakout from "@screens/Cheakout";
import Details from "@screens/Details";
import Payment from "@screens/Payment";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={TabRoutes} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="Cheakout" component={Cheakout} />
      <Screen name="Details" component={Details} />
      <Screen name="Payment" component={Payment} />
    </Navigator>
  );
}

export default AppRoutes;
