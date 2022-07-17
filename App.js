import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeChatStack from "./Navigation/HomeChatStack";
import { AuthContextProvider } from "./context/authContext/authContext";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#252525",
  },
};

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer theme={MyTheme}>
        <StatusBar style="light" />
        <HomeChatStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
