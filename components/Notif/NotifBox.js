import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const NotifBox = (props) => {
  const { user, comment, like, seen, userPic } = props.notifData;
  const boxColor = seen;
  const heart = like;
  if (heart) {
    return (
      <TouchableOpacity
        style={{
          ...styles.container,
          backgroundColor: seen ? "#e0e0e0" : "#bedaf4",
        }}
      >
        <Image source={userPic} style={styles.userPic} />
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>{user} </Text> liked your post
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          ...styles.container,
          backgroundColor: seen ? "#e0e0e0" : "#bedaf4",
        }}
      >
        <Image source={userPic} style={styles.userPic} />
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>{user} </Text> commented on your
          post
          {/* {comment} */}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default NotifBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 10,
    padding: 15,
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
