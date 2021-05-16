import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const GenreScreen = ({ navigation }) => (
    <View style={style.container}>
      <FlatList 
        data={[
          { key: "Metal" },
          { key: "Hip-Hop" },
          { key: "Pop" },
          { key: "Rap" },
          { key: "Rock n Roll" },
        ]}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 15 }}>{item.key}</Text>
        )}
      />
      <Button
      onPress={() => navigation.navigate("Artists")}
      title="Discover Artists"
    />
    </View>
  );


export default GenreScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center"
  }
});