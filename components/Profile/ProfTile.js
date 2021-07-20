import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import PostTop from "./ProfTop";
import PostContent from "./ProfContent";

const data = [
  { key: "A" },
  { key: "B" },
  { key: "C" },
  { key: "D" },
  { key: "E" },
  { key: "F" },
  { key: "G" },
  { key: "H" },
  { key: "I" },
  { key: "J" },
  { key: "K" },
  // { key: "L" },
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

const PostTile = () => {
  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Image
          source={require("../../assets/images/1.jpg")}
          style={styles.itemImage}
        />
        {/* <Text style={styles.itemText}>{item.key}</Text> */}
      </View>
    );
  };
  return (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View>
          <PostTop />
          <PostContent />
        </View>
      }
    />
  );
};

export default PostTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // marginBottom: 90,
  },
  item: {
    backgroundColor: "grey",
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
  itemText: {
    color: "white",
  },
  itemImage: {
    // resizeMode: "contain" ,
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
