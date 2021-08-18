import React, { useState } from "react";
import { StyleSheet, View, Image, Alert, Pressable } from "react-native";

const PostItems = () => {
  // const [showItem, setShowItem] = useState(true);
  // const showConfirmDialog = () => {
  //   return Alert.alert(
  //     "Delete Item?",
  //     "Are you sure you want to remove this item?",
  //     [
  //       {
  //         text: "Delete",
  //         onPress: () => {
  //           setShowItem(false);
  //         },
  //       },
  //       {
  //         text: "No", // Does nothing
  //       },
  //     ]
  //   );
  // };

  return (
    <View
      style={{ backgroundColor: "green", ...styles.container }}
      // <Pressable
      // style={({ pressed }) => [
      //   { backgroundColor: pressed ? "red" : "blue" },
      //   styles.container,
      // ]}
      // onLongPress={() => showConfirmDialog()}
    >
      {/* {showItem && (
      )} */}

      <Image
        source={require("../../assets/users/user1.jpg")}
        style={{ width: "100%", height: "100%", borderRadius: 15 }}
        // style="parent-style"
      />
      {/* </Pressable> */}
    </View>
  );
};

export default PostItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginHorizontal: "2%",
  },
});
