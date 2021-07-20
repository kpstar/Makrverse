import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import TopBar from "../navigation/TopBar";

const Settings = () => {
  return (
    <View style={styles.container}>
      <TopBar title="Settings" icon="times" />
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.subtitle}>Your Profile</Text>
      <TextInput style={styles.input}>John Doe</TextInput>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    marginHorizontal: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
  input: {
    height: "auto",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 15,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
});
