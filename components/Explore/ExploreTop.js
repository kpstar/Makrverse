import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ExploreTop = () => {
  return (
    <View style={styles.container}>
      {/* <Icon
        name="search"
        color="grey"
        size={20}
        style={{ position: "absolute", elevation: 1, top: 30, left: 30 }}
      /> */}
      <TextInput style={styles.search} placeholder="Search" />
    </View>
  );
};

export default ExploreTop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  search: {
    marginVertical: 10,
    height: "auto",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 15,
    borderRadius: 20,
    position: "relative",
    backgroundColor: "#e0e0e0",
  },
});
