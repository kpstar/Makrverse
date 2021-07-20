import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const Sign = () => {
  // state = {
  //   email: "",
  //   password: "",
  // };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/iconFullTrans.png")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ password: text })}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signinBtn}>
        <Text style={styles.signinText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#a6a7a8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "#316bea",
    fontSize: 11,
  },
  signinBtn: {
    width: "80%",
    backgroundColor: "#316bea",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  signinText: {
    color: "white",
  },
  signupText: {
    color: "#316bea",
    fontWeight: "bold",
  },
});
