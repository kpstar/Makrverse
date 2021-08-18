import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const PostCat = (props) => {
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
        // color="#316bea"
        color="red"
        solid
        style={{ marginRight: 20, left: "40%" }}
      />
      <View style={{ flexDirection: "column", left: "35%" }}>
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

export default PostCat;

const styles = StyleSheet.create({
  container: {
    borderColor: "#c1c1c1",
    borderWidth: 2,
    borderRadius: 20,
    width: 170,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
