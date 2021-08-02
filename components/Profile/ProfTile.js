import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ProfContent from "./ProfContent";
import PostCard from "../Post/PostCard";
import PostScroll from "../Post/PostScroll";

const data = [
  { key: "a", thumb: require("../../assets/images/1.png") },
  { key: "c", thumb: require("../../assets/images/3.png") },
  { key: "d", thumb: require("../../assets/images/4.png") },
  { key: "i", thumb: require("../../assets/images/9.png") },
  { key: "j", thumb: require("../../assets/images/10.png") },
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

const ProfTile = () => {
  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <PostCard image={item.thumb} />
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
          <ProfContent />
        </View>
      }
      ListFooterComponent={<View style={{ height: 200 }}></View>}
    />
  );
};

export default ProfTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
