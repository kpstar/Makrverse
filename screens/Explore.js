import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import ExploreTop from "../components/Explore/ExploreTop";
import PostCard from "../components/Post/PostCard";
import PostScroll from "../components/Post/PostScroll";

const data = [
  { key: "b", thumb: require("../assets/images/2.png"), type: 1 }, //type 1 is inven, 2 is chal
  { key: "a", thumb: require("../assets/images/1.png"), type: 1 },
  { key: "f", thumb: require("../assets/images/6.png"), type: 1 },
  { key: "g", thumb: require("../assets/images/7.png"), type: 1 },
  { key: "h", thumb: require("../assets/images/8.png"), type: 1 },
  { key: "c", thumb: require("../assets/images/3.png"), type: 1 },
  { key: "d", thumb: require("../assets/images/4.png"), type: 1 },
  { key: "e", thumb: require("../assets/images/5.png"), type: 1 },
  { key: "i", thumb: require("../assets/images/9.png"), type: 1 },
  { key: "j", thumb: require("../assets/images/10.png"), type: 1 },
  { key: "k", thumb: require("../assets/images/11.png"), type: 1 },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

function Post({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <Icon
        name="times"
        size={25}
        color="white"
        solid
        style={{
          position: "absolute",
          zIndex: 2,
          marginVertical: "10%",
          marginHorizontal: "2%",
          right: 0,
        }}
        onPress={() => navigation.navigate("Home")}
      />
      <PostScroll />
    </View>
  );
}

function Home({ navigation }) {
  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />; //Adding space under the grid
    }
    return (
      <View style={styles.item}>
        <PostCard image={item.thumb} />
        {/* <Text style={{ fontSize: 20, margin: 5 }}>{item.key}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.pageContainer}>
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={renderItem}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ExploreTop />
          </View>
        }
        ListFooterComponent={<View style={{ height: 200 }}></View>}
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Explore = ({ props, navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Explore;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 20,
    // marginBottom: 90,
    backgroundColor: "white",
    position: "relative",
  },
  item: {
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 10,
    borderRadius: 20,
    // height: Dimensions.get("window").width / numColumns, // approximate a square
    height: 200,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
});
