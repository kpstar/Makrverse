import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const ProfBox = (props) => {
  const { title, icon, count } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Stats")}
    >
      <Icon
        name={icon}
        size={20}
        color="#316bea"
        solid
        style={{ marginLeft: "10%", marginRight: "5%" }}
      />
      <View style={{ flexDirection: "column", left: 10 }}>
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
    </TouchableOpacity>
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
    padding: "7%",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
