import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TestScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "flex-start" }}>
      <Text>This screen is intended for Visual Testing</Text>
      <View
        style={{ backgroundColor: "red", width: 100, height: 100, margin: 10 }}
      ></View>
      <View
        style={{
          backgroundColor: "green",
          width: "10%",
          height: "10%",
          margin: 10,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          left: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          left: "50%",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "black",
          width: 100,
          height: 100,
          right: 10,
        }}
      ></View>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
