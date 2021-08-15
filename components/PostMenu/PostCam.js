import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Pressable,
  Alert,
  FlatList,
} from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import PostItem from "./PostItem";

const PostCam = ({ props }) => {
  //ItemList
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    // Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  // Alert
  // const [showItem, setShowItem] = uskeState(true);
  const showConfirmDialog = () => {
    return Alert.alert(
      "Delete Item?",
      "Are you sure you want to remove this item?",
      [
        {
          text: "Delete",
          onPress: () => {
            // setShowItem(false);
            completeTask(index);
          },
        },
        {
          text: "No", // Does nothing
        },
      ]
    );
  };
  // Navigation
  const navigation = useNavigation();
  // Camera
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
      {/* Top Area */}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: "5%",
          paddingHorizontal: "8%",
          ...styles.btnContainer,
        }}
      >
        <TouchableOpacity onPress={() => Camera.Constants.FlashMode}>
          <Icon name="bolt" size={25} color="white" />
        </TouchableOpacity>
        <View />
        {/* <TouchableOpacity
          // onPress={() => navigation.dangerouslyGetParent().navigate("Feed")}
          onPress={() => navigation.navigate("Edit")}
        >
          <Icon name="chevron-right" size={25} color="white" />
        </TouchableOpacity> */}
      </View>
      <Camera style={styles.camera} type={type}></Camera>
      {/* Bottom Area */}
      <View
        style={{
          bottom: 0,
          ...styles.btnContainer,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: "10%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Icon name="sync" size={25} color="white" />
          </TouchableOpacity>
          {/* Camera Button  */}
          <Pressable
            onPress={() => handleAddTask()}
            onLongPress={() => alert("rekam")}
            style={({ pressed }) => [
              { backgroundColor: pressed ? "grey" : "white" },
              styles.camButton,
            ]}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
            <Icon name="chevron-right" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.PostRow}>
          <TouchableOpacity style={styles.rowItems}>
            <Icon name="images" size={25} color="white" />
          </TouchableOpacity>
          <PostItem />
          {/* <FlatList
            horizontal
            // data={itemData}
            // keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <PostItem itemData={item} />}
            showsVerticalScrollIndicator={false}
            style={{ position: "relative" }}
          /> */}
          {taskItems.map((item, index) => {
            return (
              <Pressable key={index} onPress={() => showConfirmDialog()}>
                <PostItem text={item} />
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default PostCam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btnContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    justifyContent: "space-between",
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
  PostRow: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#000000aa",
  },
  rowItems: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  camButton: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#316bea",
  },
});
