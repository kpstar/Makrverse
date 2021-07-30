import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Your Profile</Text>
        <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
          <Image
            source={require("../../assets/icons/user3.jpg")}
            style={styles.profPic}
          />
          <Text style={{ color: "#316bea", fontSize: 18, fontWeight: "bold" }}>
            Change Profile Picture
          </Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Name</Text>
        <TextInput style={styles.input}>John Doe</TextInput>
        <Text style={styles.subtitle}>Username</Text>
        <TextInput style={styles.input}>johndoe</TextInput>
        <Text style={styles.subtitle}>Email</Text>
        <TextInput style={styles.input}>johndoe@email.com</TextInput>
        <Text style={styles.subtitle}>Password</Text>
        <TextInput style={styles.input}>qwertyuiop</TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#316bea", fontWeight: "bold", fontSize: 20 }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "white",
    // paddingBottom: 150,
  },
  title: {
    marginVertical: 20,
    // marginHorizontal: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 10,
    // marginHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
  input: {
    height: "auto",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 5,
    fontSize: 15,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  button: {
    // backgroundColor: "#316bea",
    borderColor: "#e0e0e0",
    borderWidth: 3,
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 200,
    borderRadius: 20,
    padding: 15,
  },
  profPic: {
    height: 100,
    width: 100,
    borderRadius: 20,
    margin: 15,
  },
});
