import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ArtistScreen from "./screens/ArtistScreen";
import SongScreen from "./screens/SongScreen";
import MainTabScreen from "./screens/MainTabScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import SettingsScreen from "./screens/SettingsScreen";

import { DrawerContent } from "./screens/DrawerContent";

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Artists">
        <Drawer.Screen name="ArtistsDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />   
      </Drawer.Navigator>  
    </NavigationContainer>
  );
}