import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './Home/Home'
import Chat from './Chats/Chat';

const Tab = createMaterialBottomTabNavigator();


const Stack = createStackNavigator()

const tabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Explore"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}>
      <Tab.Screen name="Explore" component={Home} />
      <Tab.Screen name="Chats" component={Chat} />
    </Tab.Navigator>
  )
}

export default function Main() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName="root">
        <Stack.Screen name="root" component={tabNavigation} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
