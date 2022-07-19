import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./register.style";
import { useAuth } from "../../../context/authContext/authContext";

const Register = ({ navigation }) => {
  const { user, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (user) {
      if (user.displayName) {
        navigation.navigate("SetupProfile");
      }
    } else {
      // navigation.navigate("Login");
    }
    console.log("ROOT USER: " + user);
  }, [user]);

  function handleRegistration() {
    const data = {
      email,
      password,
      name,
      userName,
    };
    console.log(data);
    signup(data);
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoContainerStack}>
          <Image
            style={styles.img}
            source={require("../../../assets/logo.png")}
          />
          <Text style={styles.text}>ChytBoat</Text>
        </View>
      </View>
      <View>
        <View style={styles.signinst}>
          <View style={styles.seperatorStack}>
            <View style={styles.seperatorStart}></View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 24,
                  color: "white",
                }}
              >
                Register
              </Text>
            </View>
            <View style={styles.seperatorEnd}></View>
          </View>
          <View>
            <Text style={styles.userText}>Name</Text>
            <TextInput
              style={styles.textI}
              placeholder="Enter your name"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              onChangeText={(e) => setName(e)}
            />
          </View>
          <View>
            <Text style={styles.userText}>Email address</Text>
            <TextInput
              style={styles.textI}
              placeholder="Enter username or e-mail"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View>
            <Text style={styles.userText}>Username</Text>
            <TextInput
              style={styles.textI}
              placeholder="Only alphanumeric allowed"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              onChangeText={(e) => setUserName(e)}
            />
          </View>
          <View style={styles.inputFieldLastChild}>
            <Text style={styles.userText}>Password</Text>
            <TextInput
              style={styles.textI}
              placeholder="Enter your Password"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              onChangeText={(e) => setPassword(e)}
            />
          </View>

          <Pressable style={styles.pressStyleReg} onPress={handleRegistration}>
            <Text style={styles.pressStyleText}>Register</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.btmContainer}>
        <Pressable
          style={styles.pressStyleSign}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.pressStyleText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
