import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NotifBox = (props) => {
  const { doer, comment, like, seen } = props.notifData;
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
        <View>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>{doer} </Text> liked your post
          </Text>
        </View>
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
        <View>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>{doer} </Text> commented:{" "}
            {comment}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default NotifBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: "100%",
    padding: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
  },
});
