import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const AlbumScreen = ({ navigation }) => (
    <View>
    <View style={style.header}>
      <Text style={style.title}>My Profile</Text> 
    </View> 
    <View>
      <Text style={{fontSize: 20, marginTop: 15}}>Rohan Pathak</Text>
      <Text style={{marginBottom: 50}}>@Luprycus</Text>  
    </View>  
    <View>
      <Text style={{fontSize: 20, marginTop: 15, fontStyle:"bold"}}>About me</Text>
      <Text style={{fontSize: 15, marginTop: 5}}>Enthusiastic to learn new things and ready to dive into the fields unknown.</Text>
      <Text style={{fontSize: 20, marginTop: 15, fontStyle:"bold"}}>About this app</Text>
      <Text style={{fontSize: 15, marginTop: 5}}>This app demonstrates react navigation and let's you slip into the world of music I like</Text>   
    </View>
      <View style={{padding:20, marginTop: 100}}>
      <Button
      onPress={() => navigation.navigate("Songs")}
      title="Discover Songs"
    />
      </View>
    </View>
  );


export default AlbumScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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