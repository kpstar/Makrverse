import React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import FeedContent from "../Feed/FeedContent";
import itemData from "../Feed/itemData";
// import Profile from "../../screens/Profile";

function prof({ navigation }) {
  return <Profile />;
}

const Feed = () => {
  return (
    <View style={styles.container}>
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
    backgroundColor: "black",
  },
});
