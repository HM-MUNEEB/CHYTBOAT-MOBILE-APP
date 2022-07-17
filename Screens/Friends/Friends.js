import { View, Text, Image, ScrollView } from "react-native";
import styles from "./Friends.style";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Feather";

export default function Friends() {
  const resultedContacts = [
    { userName: "munyyb" },
    { userName: "umer" },
    { userName: "saani" },
  ];
  return (
    <View style={styles.friendsContainer}>
      <View style={styles.header}>
        <View style={styles.appName}>
          <Text style={styles.appNameText}>Chytboat</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.superSection}>
          <IconM name="contacts-outline" size={30} color="white" />
          <Text style={styles.addContactText}>Your Contact List</Text>
        </View>
        <View style={styles.resultContactContainer}>
          {resultedContacts.map((contact) => {
            return (
              <View key={contact.userName} style={styles.resultContact}>
                <View style={styles.contactStack}>
                  <Image
                    style={styles.contactAvatar}
                    source={require("./assets/avatar.png")}
                  />
                  <Text style={styles.userNameText}>{contact.userName}</Text>
                </View>
                <View style={styles.iconStack}>
                  <IconF name="send" size={32} color="#FF9D43" />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
