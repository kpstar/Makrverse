import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ProfStats1 from "./ProfStats1";
import ProfStats from "./ProfStats";

const ProfContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 20, ...styles.group }}>
        <View style={styles.group1a}>
          <Image
            source={require("../../assets/users/user1.jpg")}
            style={styles.userPic}
          />
        </View>
        <View style={styles.group1b}>
          <Text style={styles.group1bTitle}>User Name</Text>
          <Text style={styles.group1bSub}>userID</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="clock"
              size={12}
              color="grey"
              solid
              style={{ marginRight: 5 }}
            />
            <Text style={styles.group1bSub}>Joined November 2016</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, marginBottom: 25 }}>
        <Text style={{ color: "grey" }}>
          Student at MIT, Aerospace Eng. Tech Enthusiast. Test test 123
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View style={styles.groupStats}>
          <ProfStats1 title="Inventions" count="69" icon="tools" />
        </View>
        <View style={styles.groupStats}>
          <ProfStats title="Followers" count="120K" icon="users" goto="fol" />
          <ProfStats title="Sold" count="120" icon="store" goto="sol" />
          <ProfStats title="Challenges" count="13" icon="trophy" goto="cha" />
        </View>
      </View>
    </View>
  );
};

export default ProfContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  group: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  groupStats: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  group1a: {
    alignItems: "center",
  },
  userPic: {
    width: 130,
    height: 130,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#c1c1c1",
  },
  group1b: {
    // backgroundColor: "red",
    width: 190,
  },
  group1bTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  group1bSub: {
    fontSize: 15,
    color: "grey",
    marginBottom: 5,
  },
  postCount: {
    flex: 1,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    borderRadius: 20,
    width: "100%",
    padding: "5%",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
