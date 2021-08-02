import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Settings = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Your Profile</Text>
        <TouchableOpacity
          style={{ alignItems: "center", marginBottom: 20 }}
          onPress={pickImage}
        >
          {image && <Image source={{ uri: image }} style={styles.profPic} />}

          <Text style={{ color: "#316bea", fontSize: 18, fontWeight: "bold" }}>
            Change Profile Picture
          </Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Name</Text>
        <TextInput style={styles.input}>John Doe</TextInput>
        <Text style={styles.subtitle}>Username</Text>
        <TextInput style={styles.input}>johndoe</TextInput>
        <Text style={styles.subtitle}>Email</Text>
        <TextInput style={styles.input}>johndoe@email.com</TextInput>
        <Text style={styles.subtitle}>Password</Text>
        <TextInput style={styles.input}>qwertyuiop</TextInput>
        <Text style={styles.title}>Shipping Address</Text>
        <Text style={styles.subtitle}>Country</Text>
        <TextInput style={styles.input}>Indonesia</TextInput>
        <Text style={styles.subtitle}>City</Text>
        <TextInput style={styles.input}>Jakarta</TextInput>
        <Text style={styles.subtitle}>Address 1</Text>
        <TextInput style={styles.input}>
          Kecamatan Kembangan, Meruya Utara
        </TextInput>
        <Text style={styles.subtitle}>Address 2</Text>
        <TextInput style={styles.input}>Kavling DKI Blok 29/2</TextInput>
        <Text style={styles.subtitle}>Postal Code</Text>
        <TextInput style={styles.input}>11620</TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#316bea", fontWeight: "bold", fontSize: 20 }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "white",
    // paddingBottom: 150,
  },
  title: {
    marginVertical: 20,
    // marginHorizontal: 15,
    fontSize: 25,
    fontWeight: "bold",
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
    backgroundColor: "#e0e0e0",
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
  profPic: {
    height: 100,
    width: 100,
    borderRadius: 20,
    margin: 15,
  },
});
