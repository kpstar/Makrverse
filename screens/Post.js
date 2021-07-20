import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextArea, Stack, Center, NativeBaseProvider } from "native-base";
const Post = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <NativeBaseProvider>
        <Center flex={1}>
          <Stack space={4} w="90%">
            <TextArea h={20} placeholder="Text Area Placeholder" />
          </Stack>
        </Center>
      </NativeBaseProvider> */}
      <Text>This page is under development</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
