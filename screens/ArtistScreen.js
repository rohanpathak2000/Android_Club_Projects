import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const ArtistScreen = ({ navigation }) => (
  <View style={style.container}>
    <FlatList
      data={[
        { key: "Slipknot" },
        { key: "Black Veil Brides" },
        { key: "FFDP" },
        { key: "Breaking Benjamin" },
        { key: "Lamb of God" },
        { key: "Metallica" }
      ]}
      renderItem={({ item }) => (
        <Text style={{ marginBottom: 15 }}>{item.key}</Text>
      )}
    />
    <Button
      onPress={() => navigation.navigate("Songs")}
      title="Discover Songs"
    />
  </View>
);

export default ArtistScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center"
  }
});
