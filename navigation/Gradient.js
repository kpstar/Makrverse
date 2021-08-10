import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// var { vw, vh, vmin, vmax } = require("react-native-viewport-units");

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
        // height: 20 * vh,
        height: 200,
        width: "100%",
        position: "absolute",
        bottom: 100,
      }}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({});
