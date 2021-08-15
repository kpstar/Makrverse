// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const Post = () => {
//   return (
//     <View>
//       <Text>temp test screen</Text>
//     </View>
//   );
// };

// export default Post;

// const styles = StyleSheet.create({});

import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostCam from "../components/PostMenu/PostCam";
import PostEdit from "../components/PostMenu/PostEdit";
import Icon from "react-native-vector-icons/FontAwesome5";
import { zIndex } from "styled-system";

function Cam({ navigation, props }) {
  return (
    <View style={styles.pageContainer}>
      <PostCam />
    </View>
  );
}
function Edit({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <PostEdit />
    </View>
  );
}

const Stack = createStackNavigator();
const Post = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          zIndex: 1,
          right: "10%",
          marginVertical: "5%",
        }}
      >
        <Icon name="times" size={30} color="white" />
      </TouchableOpacity>
      <NavigationContainer
        independent={true}
        style={{ position: "relative", flex: 1 }}
      >
        <Stack.Navigator
          initialRouteName="Cam"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Cam" component={Cam} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
