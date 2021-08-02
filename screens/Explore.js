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
import ExploreTop from "../components/Explore/ExploreTop";
import PostCard from "../components/Post/PostCard";
import PostScroll from "../components/Post/PostScroll";

const data = [
  { key: "b", thumb: require("../assets/images/2.png") },
  { key: "a", thumb: require("../assets/images/1.png") },
  { key: "f", thumb: require("../assets/images/6.png") },
  { key: "g", thumb: require("../assets/images/7.png") },
  { key: "h", thumb: require("../assets/images/8.png") },
  { key: "c", thumb: require("../assets/images/3.png") },
  { key: "d", thumb: require("../assets/images/4.png") },
  { key: "e", thumb: require("../assets/images/5.png") },
  { key: "i", thumb: require("../assets/images/9.png") },
  { key: "j", thumb: require("../assets/images/10.png") },
  { key: "k", thumb: require("../assets/images/11.png") },
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
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={styles.type}>
                <Text style={styles.typeText}>Inventions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.type}>
                <Text style={styles.typeText}>Challenges</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListFooterComponent={<View style={{ height: 200 }}></View>}
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Explore = (props) => {
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
  type: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: "#e0e0e0",
    margin: 10,
  },
  typeText: { fontSize: 15, color: "grey" },
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
