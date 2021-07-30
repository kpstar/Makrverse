import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Feed from "../screens/Feed";
import Explore from "../screens/Explore";
import Post from "../screens/Post";
import Notif from "../screens/Notif";
import Profile from "../screens/Profile";
import Sign from "../screens/Sign";

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
        // component={Sign}
        component={Notif}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="inbox" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        // component={Sign}
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
