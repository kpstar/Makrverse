import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const ProfBox = (props) => {
  const { title, icon, count } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={40}
        color="#316bea"
        solid
        style={{ marginBottom: "10%" }}
      />
      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          color: "black",
        }}
      >
        {count}
      </Text>
      <Text style={{ fontSize: 15, color: "grey" }}>{title}</Text>
    </View>
  );
};

export default ProfBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    borderRadius: 20,
    width: "100%",
    padding: "5%",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
