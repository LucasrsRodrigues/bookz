import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";
import { Notifications } from "@screens/Notifications";
import Cheakout from "@screens/Cheakout";
import Details from "@screens/Details";
import Payment from "@screens/Payment";
import ProfileDetails from "@screens/ProfileDetails";
import Password from "@screens/Password";
import Language from "@screens/Language";

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
      <Screen name="ProfileDetails" component={ProfileDetails} />
      <Screen name="Password" component={Password} />
      <Screen name="Language" component={Language} />
    </Navigator>
  );
}

export default AppRoutes;
