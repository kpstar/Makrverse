import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import BtnInteract from "../../components/Feed/BtnInteract";

const FeedContent = (props) => {
  const { userName, userPic, postName, postPic, likes, comments, sold } =
    props.itemData;
  // const { name, tagline, image } = props.itemData;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <Text style={{ color: "transparent", fontSize: 635 }}>A</Text> */}
      <ImageBackground source={postPic} style={styles.image} />
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
            {postName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={userPic} style={styles.userPic} />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                marginRight: 10,
                ...styles.shadow,
              }}
            >
              {userName}
            </Text>
          </View>
        </View>
        <View style={styles.interact}>
          <BtnInteract
            icon={"heart"}
            color={"white"}
            content={likes}
            onPress={() => alert("Pressed!")}
          />
          <BtnInteract icon={"comment"} color={"white"} content={comments} />
          <BtnInteract icon={"shopping-cart"} color={"white"} content={sold} />
        </View>
      </View>
      {/* <Video
        // ref={video}
        style={styles.video}
        source={require("../../assets/vids/vid0.mp4")}
        // useNativeControls="false"
        // resizeMode="contain"
        // isLooping
        shouldPlay
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        // onLoad={video.current.playAsync()}
      /> */}
    </View>
  );
};

export default FeedContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  image: {
    width: "100%",
    height: "100%",
    // flex: 1,
    // resizeMode: "cover",
    // position: "absolute",
    // bottom: 0,
  },
  video: {
    height: 400,
    // alignSelf: "center",
    // height: Dimensions.get("screen").height,
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
