import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProfTop = (props) => {
  const { title, icon } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>{title}</Text>
      <TouchableOpacity
        style={styles.iconTouch}
        // onPress={() => navigation.navigate("Details")}
      >
        <Icon name={icon} size={25} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfTop;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,

    // paddingHorizontal: 20,
    // paddingVertical: 30,
    // backgroundColor: "#e0e0e0",
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    left: "15%",
    color: "grey",
  },
  iconTouch: {
    right: 0,
  },
});
