import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const PostCard = () => {
  return (
    <TouchableOpacity style={{ width: "100%" }}>
      <Image
        source={require("../../assets/images/1.jpg")}
        style={styles.itemImage}
      />
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  itemImage: {
    // resizeMode: "contain" ,
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
