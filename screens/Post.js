import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";

const Post = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => Camera.Constants.FlashMode}>
          <Icon
            name="bolt"
            size={25}
            color="white"
            style={{ marginHorizontal: 10, position: "absolute", right: 0 }}
          />
        </TouchableOpacity>
      </View>
      <Camera style={styles.camera} type={type}></Camera>
      <View
        style={{
          bottom: 0,
          ...styles.btnContainer,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/1.png")}
            style={styles.imagePicker}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            backgroundColor: "#316bea",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "white",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Icon
            name="sync"
            size={25}
            color="white"
            style={{ marginHorizontal: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  camera: {
    position: "relative",
    width: 600,
    // width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // height: Dimensions.get("window").height - 160,
  },
  imagePicker: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
});
