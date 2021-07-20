import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
      top: -25,
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
        backgroundColor: "#316bea",
        // ...styles.shadow,
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
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 70,
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
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default Tabs;
