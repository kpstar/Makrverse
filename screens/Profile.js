// import * as React from "react";
// import { Button, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import ProfTile from "../components/Profile/ProfTile";

// function ProfHome({ navigation }) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <ProfTile />
//     </View>
//   );
// }

// function Settings() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function Profile() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="ProfHome">
//         <Stack.Screen name="ProfHomee" component={ProfHome} />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default Profile;

import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ProfTile from "../components/Profile/ProfTile";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfTile />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
