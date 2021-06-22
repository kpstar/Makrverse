import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import Items from "./Items";
import itemData from "./itemData";
import { LinearGradient } from "expo-linear-gradient";
const Feeds = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </View> */}
      {/* <LinearGradient
        colors={["#000000E6", "#00000000"]}
        // colors={["#55fcddE6", "#00000000"]}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 0, y: 1 }}
        style={styles.titles}
      >
        <Text style={styles.title}>test</Text>
        <Text style={styles.subtitle}>test</Text>
      </LinearGradient> */}

      <FlatList
        data={itemData}
        renderItem={({ item }) => <Items itemData={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
  header: {
    // zIndex: 100,
  },
  headerContainer: {
    position: "absolute",
    top: 50,
    // zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  // logo: {
  //   width: 100,
  //   height: 20,
  //   resizeMode: "contain",
  // },
  titles: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    zIndex: 100,
  },
  title: {
    marginTop: "10%",
    fontSize: 40,
    fontWeight: "500",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "#edebea",
    marginBottom: "25%",
  },
});
