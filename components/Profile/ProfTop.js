import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProfTop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Profile</Text>
      <TouchableOpacity style={styles.iconTouch}>
        <Icon name="cog" size={25} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfTop;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
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
