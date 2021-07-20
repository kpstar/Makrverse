import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import PostTile from "../components/Profile/ProfTile";
import PostTop from "../components/Profile/ProfTop";
import ProfContent from "../components/Profile/ProfContent";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* <PostTop /> */}
      {/* <ProfContent /> */}
      <PostTile />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
