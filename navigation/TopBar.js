import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProfTop = (props) => {
  const { title, icon, onPress } = props;
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <Text style={styles.Title}>{title}</Text>
      <TouchableOpacity style={styles.iconTouch} onPress={onPress}>
        <Icon name={icon} size={25} color="black" style={styles.icon} solid />
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
    paddingHorizontal: 20,
    paddingVertical: 15,

    // backgroundColor: "white",
    // paddingHorizontal: 20,
    // paddingVertical: 30,
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
  shadow: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    // overflow: "hidden",
  },
});
