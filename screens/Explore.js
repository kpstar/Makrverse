import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";

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

const Notif = () => {
  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
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
      ListHeaderComponent={<Text>Tello</Text>}
    />
  );
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // marginBottom: 90,
    backgroundColor: "white",
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
});
