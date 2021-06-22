import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StyledButton from "./StyledButton";

const Items = (props) => {
  const { name, tagline, taglineCTA, image } = props.itemData;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <LinearGradient
        colors={["#000000E6", "#00000000"]}
        // colors={["#55fcddE6", "#00000000"]}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 0, y: 1 }}
        style={styles.titles}
      >
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </LinearGradient>
      <View style={styles.postAction}>
        <View style={styles.postActionLeft}>
          <StyledButton
            type="secondary"
            content={"Explore"}
            onPress={() => {
              console.warn("Go to Explore Page");
            }}
          />
        </View>
        <View style={styles.postActionRight}>
          <StyledButton
            type="primary"
            content={"Grab"}
            onPress={() => {
              console.warn("Added to favorites");
            }}
          />
          <StyledButton
            type="secondary"
            content={"Like"}
            onPress={() => {
              console.warn("Added to favorites");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  titles: {
    width: "100%",
    alignItems: "center",
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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  postActionLeft: {
    bottom: 40,
    width: "30%",
  },
  postActionRight: {
    bottom: 40,
    width: "30%",
  },
  postAction: {
    position: "absolute",
    bottom: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
});
