import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ArtistScreen from "./ArtistScreen";
import SongScreen from "./SongScreen";
import GenreScreen from "./GenreScreen";
import ProfileScreen from "./ProfileScreen";

const SongStack = createStackNavigator();
const ArtistStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Artists"
    activeColor="#fff"
    barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Artists"
      component={ArtistStackScreen}
      options={{
        tabBarLabel: 'Artists',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Songs"
      component={SongStackScreen}
      options={{
        tabBarLabel: 'Songs',
        tabBarColor: '#6699ff',
        tabBarIcon: ({ color }) => (
          <Icon name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#ff6600',
        tabBarIcon: ({ color }) => (
          <Icon name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Genres"
      component={GenreScreen}
      options={{
        tabBarLabel: 'Genres',
        tabBarColor: '#cca333',
        tabBarIcon: ({ color }) => (
          <Icon name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default MainTabScreen;

const ArtistStackScreen = ({ navigation }) => (
    <ArtistStack.Navigator
       //Applies the styles to all the screens
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "orange"
        }
      }}
    >
      <ArtistStack.Screen
        options={{
          title: "Recommended Artists",        //Only applies styles to the specific screen
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={21}
            backgroundColor="orange"
            onPress = {() =>  
              navigation.openDrawer()}></Icon.Button>
          )
        }}
        name="Artists"
        component={ArtistScreen}
      />
    </ArtistStack.Navigator>
  
  );
  
  const SongStackScreen = ({ navigation }) => (
    <SongStack.Navigator
      //Applies the styles to all the screens
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FF9664"
        }
      }}
    >
      <SongStack.Screen
        options={{
          title: "Recommended Songs", //Only applies styles to the specific screen
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={21}
          backgroundColor="orange"
          onPress = {() =>  
            navigation.openDrawer()}></Icon.Button>
        )
      }}
        name="Songs"
        component={SongScreen}
      />
    </SongStack.Navigator>
  
  );