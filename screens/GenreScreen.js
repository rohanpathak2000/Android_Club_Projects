import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const GenreScreen = ({ navigation }) => (
  <View>
  <View style={style.header}>
      <Text style={style.title}>Genres</Text> 
  </View> 
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
          <Text style={{ marginBottom: 15 , fontSize:15}}>{item.key}</Text>
        )}
      />
      </View> 
      <View style={{padding: 50}}>
      <Button
      onPress={() => navigation.navigate("Artists")}
      title="Discover Artists"
    />
    </View>
    </View>
  );


export default GenreScreen;

const style = StyleSheet.create({
  container: {
    paddingLeft: 150,
    marginVertical: 20,
    justifyContent: "center"
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "orange",
    
  },
  title: {
    fontSize: 20,
  }
});