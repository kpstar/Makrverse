import React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import FeedContent from "../components/Feed/FeedContent";
import BtnInteract from "../components/Feed/BtnInteract";
import itemData from "../components/Feed/itemData";

const Feed = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <FlatList
        data={itemData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <FeedContent itemData={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("screen").height}
        style={{ position: "relative" }}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
