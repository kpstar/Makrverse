import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const ChatBox = (props, navigation1) => {
  const { doer, pic, seen } = props.chatData;
  // const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: seen ? "#e0e0e0" : "#bedaf4",
      }}
      onPress={() => navigation1.navigate("ChatScreen1")}
    >
      <Image source={pic} style={styles.userPic} />
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>{doer}</Text>: Hello
      </Text>
    </TouchableOpacity>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 17,
  },
  userPic: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 15,
  },
});
