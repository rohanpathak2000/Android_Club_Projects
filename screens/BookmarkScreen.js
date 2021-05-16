import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BookmarkScreen = () => (
    <View style={style.container}>
        <Text>Welcome to Bookmark Screen</Text>
    </View>
);


export default BookmarkScreen;
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginVertical: 20,
      justifyContent: "center"
    }
  });