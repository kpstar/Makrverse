import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const PostEdit = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 25,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Cam")}>
          <Icon name="chevron-left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Post Title"
        maxLength={40}
        multiline
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Post Description"
        maxLength={100}
        numberOfLines={4}
        multiline
      ></TextInput>
      <View style={styles.itemsContainer}></View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#316bea", fontWeight: "bold", fontSize: 20 }}>
          Post
        </Text>
      </TouchableOpacity>
      <View style={{ height: 50 }} />
    </View>
  );
};

export default PostEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "6%",
    paddingVertical: "5%",
    backgroundColor: "white",
  },
  subtitle: {
    marginBottom: 10,
    // marginHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
  input: {
    height: "auto",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 5,
    fontSize: 15,
    borderRadius: 20,
    marginVertical: 10,
    color: "black",
    backgroundColor: "#e0e0e0",
  },
  itemsContainer: {
    marginTop: 10,
    backgroundColor: "#e0e0e0",
    width: "100%",
    height: "20%",
    borderRadius: 15,
  },
  button: {
    // backgroundColor: "#316bea",
    borderColor: "#e0e0e0",
    borderWidth: 3,
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 200,
    borderRadius: 20,
    padding: 15,
  },
});
