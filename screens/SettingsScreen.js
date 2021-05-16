import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SettingsScreen = () => (
    <View style={style.container}>
        <Text>Welcome to Settings Screen</Text>
    </View>
);


export default SettingsScreen;
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginVertical: 20,
      justifyContent: "center"
    }
  });