import { View, Text, Image, ActivityIndicator } from "react-native";
import { useEffect, useState, useRef } from "react";
import styles from "./SplashScreen.style";
import { useAuth } from "../../context/authContext/authContext";

export default function SplashScreen({ navigation }) {
  const { user } = useAuth();
  const [authCheck, setAuthCheck] = useState(false);

  //Used useRef as the setTimeOut Behavior is different when being used in useEffect
  //problem Reference https://github.com/facebook/react/issues/14010
  const userRef = useRef(user);
  userRef.current = user;

  useEffect(() => {
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userRef.current) {
        navigation.navigate("SetupProfile");
      } else {
        navigation.navigate("Login");
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.splashContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <View>
            <Image style={styles.img} source={require("./assets/logo.png")} />
          </View>
          <View>
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
