import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const Separator = () => {
  return (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: "red",
        borderBottomWidth: 2
      }}
    />
  );
};

const SongScreen = ({ navigation }) => (
  <View style={style.container}>
    <FlatList
      data={[
        { key: "Burn MF - FFDP" },
        { key: "In the End - Black Veil Brides" },
        { key: "Laid to Rest - Lamb of God" },
        { key: "Angels Fall - Breaking Benjamin" },
        { key: "My Own Hell - FFDP" },
        { key: "Master of Puppets - Metallica" }
      ]}
      renderItem={({ item }) => (
        <Text style={{ marginBottom: 15 }}>{item.key}</Text>
      )}
    />
    <Button
      onPress={() => navigation.navigate("Artists")}
      title="Discover Artists"
    />
    <Separator />
    <Button
      onPress={() => navigation.push("Songs")} //Push the screen again into the stack
      title="Discover Songs .. again"
    />
    <Separator />
    <Button
      onPress={() => navigation.goBack()} //Go to the previous screen
      title="Go Back"
    />
  </View>
);

export default SongScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center"
  }
});