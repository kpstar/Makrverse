import * as React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
// import Video from "react-native-video";

const Notif = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        // ref={video}
        style={styles.video}
        source={require("../assets/vids/vid0.mp4")}
        // useNativeControls="false"
        // resizeMode="contain"
        // shouldPlay
        // isLooping
        // onPress={video.current.playAsync()}
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        // onReadyForDisplay={}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({
  video: {
    // alignSelf: "center",
    height: 400,
    // height: Dimensions.get("screen").height,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
