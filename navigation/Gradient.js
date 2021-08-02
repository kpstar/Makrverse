import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Gradient(props) {
  //   const { gradHeight, gradBot } = props;
  return (
    <LinearGradient
      colors={["transparent", "black"]}
      //   start={{ x: 0, y: 0.1 }}
      //   end={{ x: 0, y: 3.5 }}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 0, y: 1 }}
      style={{
        height: 200,
        width: "100%",
        position: "absolute",
        zIndex: 1,
        bottom: 100,
      }}
    />
  );
}

const styles = StyleSheet.create({});
