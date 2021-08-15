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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FeedContent from "../components/Feed/FeedContent";
import itemData from "../components/Feed/itemData";
import Profile from "./Profile";
import FeedTop from "../components/Feed/FeedTop";

function prof({ navigation }) {
  return <Profile />;
}

const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
        networkActivityIndicatorVisible={true}
        // translucent={true}
      />
      <FeedTop />
      <FlatList
        data={itemData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <FeedContent itemData={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
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
    backgroundColor: "white",
    // backgroundColor: "black",
  },
});
