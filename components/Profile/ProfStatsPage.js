import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfStatsPage = (props) => {
  const { goto } = props;
  // if ({ goto } == "pos") {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 2,
          backgroundColor: "green",
          // height: 100,
          // width: 100,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          // height: 100,
          // width: 100,
        }}
      ></View>
      {/* <Text>This screen is intended for Visual Testing</Text>
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
      ></View> */}
    </View>
  );
  // }
};

export default ProfStatsPage;

const styles = StyleSheet.create({});
