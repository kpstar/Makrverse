import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ChatBox from "../components/Notif/ChatBox";
import chatData from "../components/Notif/chatData";

const Chat = () => {
  return (
    <FlatList
      data={chatData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ChatBox chatData={item} />}
      showsVerticalScrollIndicator={false}
      style={{ position: "relative", padding: 20 }}
      ListFooterComponent={<View style={{ height: 100 }}></View>}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({});
