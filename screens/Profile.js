import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Sign from "./Sign";
import ProfTile from "../components/Profile/ProfTile";
import Settings from "../components/Profile/Settings";
import TopBar from "../navigation/TopBar";
import PostScroll from "../components/Post/PostScroll";
import ProfStatsPage from "../components/Profile/ProfStatsPage";

function Prof({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <TopBar
        title="Profile"
        icon="cog"
        onPress={() => navigation.navigate("Settings")}
      />
      <ProfTile />
    </View>
  );
}

function Set({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <TopBar
        title="Settings"
        icon="times"
        onPress={() => navigation.navigate("Prof")}
      />
      <Settings />
    </View>
  );
}

function Stats({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <TopBar
        title="Stats"
        icon="times"
        onPress={() => navigation.navigate("Prof")}
      />
      <ProfStatsPage />
    </View>
  );
}

function Post({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <PostScroll />
    </View>
  );
}

const Stack = createStackNavigator();

function Profile() {
  const loggedIn = 0;
  if (loggedIn) {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Prof"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Prof" component={Prof} />
          <Stack.Screen name="Settings" component={Set} />
          <Stack.Screen name="Stats" component={Stats} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Sign />;
  }
}

export default Profile;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
