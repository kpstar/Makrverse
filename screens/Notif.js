import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TopBar from "../navigation/TopBar";
import NotifBox from "../components/Notif/NotifBox";
import notifData from "../components/Notif/notifData";
import Sign from "./Sign";
import Chat from "./Chat";

function Login() {
  return <Sign />;
}

function Chats({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <TopBar
        title="Chat"
        icon="times"
        onPress={() => navigation.navigate("Home")}
      />
      <Chat />
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <TopBar
        title="Inbox"
        icon="times"
        color="white"
        solid
        // onPress={() => navigation.navigate("Chat")}
      />
      <FlatList
        data={notifData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <NotifBox notifData={item} />}
        showsVerticalScrollIndicator={false}
        style={{ position: "relative", padding: 20 }}
        ListFooterComponent={<View style={{ height: 100 }}></View>}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const Notif = () => {
  const loggedIn = 1;
  if (loggedIn) {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chats} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Login />;
  }
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
