import {
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import react, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import IconE from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import styles from "./Home.style";
import Contact from "../../Components/Contact/Contact";
import { useAuth } from "../../context/authContext/authContext";
import { ReadContactList } from "../../FirebaseModules/ReadContactList";
import { useLoading } from "../../context/loadingContext/loadingContext";
import { uid } from "uid";
export default function Home({ navigation }) {
  const { user, logout } = useAuth();
  const { setLoading } = useLoading();
  const [userData, setUserData] = useState("");
  const [contactList1, setContactList1] = useState([]);
  const [showContactList, setShowContactList] = useState([]);
  const [executed, setExecuted] = useState(false);
  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
    console.log("ROOT USER: " + user);
  }, [user]);

  //Gets contactlist on Components Mount
  useEffect(() => {
    ReadContactList(user.displayName, setLoading, setUserData);
  }, []);

  //When contactlist changes, this formats object in numerable array
  useEffect(() => {
    if (userData) {
      setContactList1(Object.entries(userData).map((e) => ({ [e[0]]: e[1] })));
      setExecuted(true);
    }
  }, [userData]);

  //When contactlist becomes numerable array, this formats nested objects in numerable array form
  useEffect(() => {
    console.log("Contact List 1: ");
    console.log(contactList1);
    const check = handleSetContactList();
    if (check) {
      setExecuted(true);
    }
  }, [contactList1]);

  //Displays ContactList when some change happends
  // useEffect(() => {
  //   console.log("CONTACT LIST : ");
  //   console.log(showContactList);
  // }, [showContactList]);

  function handleSetContactList() {
    setShowContactList([]);
    console.log("\n----------------STARTED FORMATTING----------------\n");
    var data;
    var contactListFormated = []; //Formats Objects of object into simple array, latter pushed to state
    for (let i = 0; i < contactList1.length; i++) {
      const obj = contactList1[i];
      console.log("Process 1:");
      console.log(obj);
      var data = Object.values(obj)[0];
      console.log("Process 2:");
      console.log(data);
      contactListFormated.push(data);
    }
    setShowContactList(contactListFormated); //arr which is formated, being pushed to the state, latter used to show contacts
    console.log("\n----------------ENDED FORMATTING----------------\n");
    return true;
  }

  function handleContactPress(UUID, name) {
    console.log("PRESSED");
    navigation.navigate("Chat", { UUID, name });
  }
  function handleLogout() {
    logout();
  }

  function handleKey() {
    return uid(16);
  }

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={styles.appName}>
          <Text style={styles.appNameText}>Chytboat</Text>
        </View>
        <View style={styles.headerContentContainer}>
          <Pressable onPress={handleLogout}>
            <View style={styles.searchIcon}>
              <IconE name="logout" size={25} color="white" />
            </View>
          </Pressable>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.homeContainer}
      >
        <View style={styles.superSection}>
          <View style={styles.superSectionHeader}>
            <View style={styles.welcomeMsgContainer}>
              <Text style={styles.welcomeMsg}>Welcome To ChytBoat,</Text>
              {user ? (
                <Text style={styles.userGreeting}>{user.displayName}</Text>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.contactListContainer}>
          {executed ? (
            showContactList.map((item) => {
              return (
                <Pressable
                  key={item.name + handleKey()}
                  onPress={() =>
                    navigation.navigate("Chat", {
                      UUID: item.UUID,
                      NAME: item.name,
                    })
                  }
                >
                  <Contact userName={item.name} />
                </Pressable>
              );
            })
          ) : (
            <View>
              <Text>No Contacts to show!!!</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
