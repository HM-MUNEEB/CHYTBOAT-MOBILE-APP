import { View, Text, Image, ActivityIndicator } from "react-native";
import { useEffect, useState, useRef } from "react";
import styles from "./SplashScreen.style";
import { useAuth } from "../../context/authContext/authContext";

export default function SplashScreen({ navigation }) {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigation.navigate("Navbar");
    } else if (user === false) {
      navigation.navigate("Login");
    }
  }, [user]);
  return (
    <View style={styles.splashContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logoContainerStack}>
            <Image
              style={styles.img}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.text}>ChytBoat</Text>
          </View>
        </View>
        <View style={styles.laodingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </View>
    </View>
  );
}
