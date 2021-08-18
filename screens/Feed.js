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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FeedContent from "../components/Feed/FeedContent";
import itemData from "../components/Feed/itemData";
import Profile from "./Profile";
import FeedTop from "../components/Feed/FeedTop";
import ChatScreen from "./ChatScreen";

function prof({ navigation }) {
  return <Profile />;
}

function comment({ navigation }) {
  return (
    <View>
      <ChatScreen />
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
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
}

const Stack = createStackNavigator();
const Feed = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        // initialRouteName="comment"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="comment" component={comment} />
        <Stack.Screen name="prof" component={prof} />
      </Stack.Navigator>
    </NavigationContainer>
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
