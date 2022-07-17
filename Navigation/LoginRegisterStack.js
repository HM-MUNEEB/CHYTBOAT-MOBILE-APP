import { createStackNavigator } from "@react-navigation/stack";
import LoginModule from "../Screens/AuthScreen/Login/login";
import Register from "../Screens/AuthScreen/Register/register";
import SplashScreen from "../Screens/SplashScreen/SplashScreen";

const Stack = createStackNavigator();

export default function LoginRegisterStack() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 5000,
      damping: 500,
      mass: 5,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        animationTypeForReplace: "push",
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginModule} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
