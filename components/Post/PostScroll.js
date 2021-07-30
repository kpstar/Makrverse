import React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import FeedContent from "../Feed/FeedContent";
import BtnInteract from "../Feed/BtnInteract";
import itemData from "../Feed/itemData";

const PostScroll = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <FeedContent itemData={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("screen").height}
        style={{ position: "relative" }}
      />
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          bottom: "13%",
        }}
      >
        <View style={styles.user}>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              marginBottom: 10,
              ...styles.shadow,
            }}
          >
            Homemade Wifi Jammer IOT Stuff
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/icons/user3.jpg")}
              style={styles.userPic}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                marginRight: 10,
                ...styles.shadow,
              }}
            >
              johndoe
            </Text>
          </View>
        </View>
        <View style={styles.interact}>
          <BtnInteract
            icon={"heart"}
            color={"white"}
            content={"120k"}
            onPress={() => alert("Pressed!")}
          />
          <BtnInteract icon={"comment"} color={"white"} content={"69K"} />
          <BtnInteract icon={"shopping-cart"} color={"white"} content={"11K"} />
        </View>
      </View>
    </View>
  );
};

export default PostScroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  interact: {
    width: 50,
    flexDirection: "column",
    // backgroundColor: "red",
    right: 20,
  },
  user: {
    top: "37%",
    paddingHorizontal: 20,
    flexDirection: "column",
    // backgroundColor: "green",
  },
  userPic: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 15,
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1.5,
  },
});
