// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   StatusBar,
//   Image,
// } from "react-native";
// import { Camera } from "expo-camera";
// import Icon from "react-native-vector-icons/FontAwesome5";

// const Post = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         hidden={false}
//         backgroundColor="black"
//         networkActivityIndicatorVisible={true}
//       />
//       <View style={styles.btnContainer}>
//         <TouchableOpacity onPress={() => Camera.Constants.FlashMode}>
//           <Icon
//             name="bolt"
//             size={25}
//             color="white"
//             style={{ marginHorizontal: 10, position: "absolute", right: 0 }}
//           />
//         </TouchableOpacity>
//       </View>
//       <Camera style={styles.camera} type={type}></Camera>
//       <View
//         style={{
//           bottom: 0,
//           ...styles.btnContainer,
//         }}
//       >
//         <TouchableOpacity>
//           <Image
//             source={require("../assets/images/1.png")}
//             style={styles.imagePicker}
//           />
//         </TouchableOpacity>
//         <View
//           style={{
//             width: 70,
//             height: 70,
//             borderRadius: 100,
//             backgroundColor: "#316bea",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity
//             style={{
//               width: 60,
//               height: 60,
//               borderRadius: 100,
//               backgroundColor: "white",
//             }}
//           />
//         </View>
//         <TouchableOpacity
//           onPress={() => {
//             setType(
//               type === Camera.Constants.Type.back
//                 ? Camera.Constants.Type.front
//                 : Camera.Constants.Type.back
//             );
//           }}
//         >
//           <Icon
//             name="sync"
//             size={25}
//             color="white"
//             style={{ marginHorizontal: 10 }}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Post;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   btnContainer: {
//     position: "absolute",
//     width: "100%",
//     zIndex: 1,
//     padding: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   camera: {
//     position: "relative",
//     width: 600,
//     // width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//     // height: Dimensions.get("window").height - 160,
//   },
//   imagePicker: {
//     width: 50,
//     height: 50,
//     borderRadius: 15,
//   },
// });

import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Feed from "../screens/Feed";
import Explore from "../screens/Explore";
import Post from "../screens/Post";
import Notif from "../screens/Notif";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      // top: -20,
      margin: 10,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "red",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 20,
        marginBottom: 20,
        // width: 100,
        // height: 80,
        // borderLeftWidth: 20,
        // borderRightWidth: 20,
        // borderBottomWidth: 20,
        // borderColor: "transparent",
        // borderRadius: 40,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        backgroundColor: "#316bea",
        ...styles.shadow,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          position: "absolute",
          height: 80,
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 50,
          borderTopWidth: 20,
          borderTopColor: "rgba(0, 0, 0, 0)",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderRadius: 20,
          backgroundColor: "white",
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        // component={testFeed}
        options={{
          tabBarIcon: ({ focused, color }) => (
            // <Icon name="home" size={25} color={color} />
            <Icon name="scroll" size={25} color={color} />
          ),
          // tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="plus" size={25} color="white" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Notif"
        component={Notif}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="inbox" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="user-alt" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 50,
  },
});

export default Tabs;
