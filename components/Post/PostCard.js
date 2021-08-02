import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostCard = (props) => {
  const { image } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ width: "100%" }}
      onPress={() => navigation.navigate("Post")}
    >
      <Image
        // source={require("../../assets/images/1.png")}
        source={image}
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
