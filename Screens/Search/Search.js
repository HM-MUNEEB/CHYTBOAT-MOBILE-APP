import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import styles from "./Search.style";
import Icon from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import { useAuth } from "../../context/authContext/authContext";
import { useLoading } from "../../context/loadingContext/loadingContext";
import { SearchContact } from "../../FirebaseModules/SearchContact";
import { AddContact } from "../../FirebaseModules/AddContact";

export default function Search() {
  const { user } = useAuth();
  const { setLoading } = useLoading();
  const [searchInputField, setSearchInputField] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  function handleTextChange(e) {
    setSearchInputField(e);
  }
  async function handleSearchPress() {
    setSearchResult(null);
    setLoading(true);
    setSearchResult(await SearchContact(searchInputField, setLoading));
    console.log(searchResult);
  }
  function handleUserAddition() {
    console.log("USER ADDITTION UNITIATED!!!");
    AddContact(user.displayName, searchResult.userName, setLoading);
  }

  return (
    <View style={styles.SearchContainer}>
      <View style={styles.header}>
        <View style={styles.headerContentContainer}>
          <View style={styles.searchInputFieldView}>
            <View style={styles.searchIcon}>
              <Icon name="search" size={20} color="white" />
            </View>
            <TextInput
              placeholder="Search by username or email..."
              style={styles.searchInputField}
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              autoFocus={true}
              selectionColor="#FF9D43"
              autoComplete="off"
              onChangeText={handleTextChange}
            />
          </View>
          <Pressable style={styles.searchBtn} onPress={handleSearchPress}>
            <Text style={styles.searchBtnText}>Search</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.superSection}>
          <IconAnt name="contacts" size={30} color="white" />
          <Text style={styles.addContactText}>Add Contact</Text>
        </View>
        <View style={styles.resultContactContainer}>
          {searchResult ? (
            <View style={styles.resultContact}>
              <View style={styles.contactStack}>
                <Image
                  style={styles.contactAvatar}
                  source={require("./assets/avatar.png")}
                />
                <Text style={styles.userNameText}>
                  @{searchResult.userName}
                </Text>
              </View>
              <Pressable style={styles.iconStack} onPress={handleUserAddition}>
                <Icon name="md-person-add-outline" size={32} color="#FF9D43" />
              </Pressable>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
