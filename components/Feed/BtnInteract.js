import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const BtnInteract = (props) => {
  const { color, content, icon, onPress } = props;
  return (
    <TouchableOpacity style={{ ...styles.touch }} onPress={onPress}>
      <Icon
        name={icon}
        color={color}
        solid
        style={{ ...styles.icon, ...styles.shadow }}
      />
      <Text style={{ ...styles.text, ...styles.shadow }}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    alignItems: "center",
    // bottom: 70,
    // backgroundColor: "red",
  },
  icon: {
    marginBottom: 5,
    fontSize: 30,
    borderRadius: 12,
    // backgroundColor: "green",
  },
  text: {
    color: "white",
    marginBottom: 20,
  },

  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1.5,
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 10,
    // elevation: 10,
  },
});

export default BtnInteract;
