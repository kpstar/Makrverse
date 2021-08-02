import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const FeedTop = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.type}>
        <Text style={{ color: "white", ...styles.typeText }}>For me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.type}>
        <Text style={{ color: "white", ...styles.typeText }}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedTop;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: 35,
  },
  type: {
    alignItems: "center",
    width: 120,
    height: 40,
  },
  typeText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFFa0",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1.5,
  },
});
