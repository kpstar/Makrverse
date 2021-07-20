import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const FeedContent = (props) => {
  const { image } = props.itemData;
  // const { name, tagline, image } = props.itemData;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <Text style={{ color: "transparent", fontSize: 635 }}>A</Text> */}
      <ImageBackground source={image} style={styles.image} />

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
});
