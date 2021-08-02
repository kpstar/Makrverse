import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import BtnInteract from "../../components/Feed/BtnInteract";
import Gradient from "../../navigation/Gradient";

const FeedContent = (props) => {
  const {
    userName,
    userPic,
    postName,
    postPic,
    postVid,
    likes,
    comments,
    sold,
  } = props.itemData;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, position: "relative" }}>
        {/* <ImageBackground source={postPic} style={styles.image} /> */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Video
            ref={video}
            style={styles.video}
            source={postVid}
            // source={require("../../assets/vids/vid1.mp4")}
            useNativeControls="false"
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            // shouldPlay
            // onReadyForDisplay={() =>
            // status.isPlaying
            //     ? video.current.pauseAsync()
            //     : video.current.playAsync()
            // }
          />
        </TouchableOpacity>
        {/* Interact Section */}
        <View
          style={{
            position: "absolute",
            zIndex: 10,
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
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
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
            </TouchableOpacity>
          </View>
          <View style={styles.interact}>
            <BtnInteract
              icon={"heart"}
              color={"white"}
              content={likes}
              onPress={() => alert("Added to Favorites!")}
            />
            <BtnInteract icon={"comment"} color={"white"} content={comments} />
            <BtnInteract
              icon={"shopping-cart"}
              color={"white"}
              content={sold}
            />
          </View>
        </View>
      </View>
      <Gradient />
    </View>
  );
};

export default FeedContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    height: Dimensions.get("screen").height,
  },
  // image: {
  //   width: "100%",
  //   height: "100%",
  // },
  video: {
    height: Dimensions.get("screen").height,
    bottom: 50,
    // height: "100%",
    // width: "120%",
  },
  interact: {
    width: 50,
    flexDirection: "column",
    right: 20,
  },
  user: {
    top: "35%",
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 15,
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1.5,
  },
});
