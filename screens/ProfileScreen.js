import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const AlbumScreen = ({ navigation }) => (
    <View style={style.container}>
      <Text>My Profile Screen</Text>
      <Button
      onPress={() => navigation.navigate("Songs")}
      title="Discover Songs"
    />
    </View>
  );


export default AlbumScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center"
  }
});