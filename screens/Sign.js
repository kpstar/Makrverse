import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function SignUp({ navigation }) {
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
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ password: text })}
        />
      </View>
      <TouchableOpacity style={styles.signinBtn}>
        <Text style={styles.signinText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignIn({ navigation }) {
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
      <TouchableOpacity
        style={{ width: 250, height: 50, alignItems: "center" }}
      >
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();
const Sign = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Sign;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
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
    backgroundColor: "#e0e0e0",
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
    fontSize: 13,
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
