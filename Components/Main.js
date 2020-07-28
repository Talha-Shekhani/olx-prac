import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './Home/Home'
import Chat from './Chats/Chat';

const Tab = createMaterialBottomTabNavigator();


const Stack = createStackNavigator()

const tabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Explore"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName1, iconName2
        if (route.name === 'Explore') {
          // color = focused ? 'black' : 'grey'
          iconName1 = focused ? 'home-variant' : 'home-outline'
        }
        else if (route.name === 'Chats') {
          iconName2 = focused ? 'chat-bubble' : 'chat-bubble-outline';
          // color = focused ? 'black' : 'grey';
        }
        return(
          <Text>
            <IconMat name={iconName1} size={24} color={focused ? 'black' : 'grey'} />
            <MatIcon name={iconName2} size={24} color={focused ? 'black' : 'grey'} />
          </Text>
        )
      },
    })}
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'white',
    }}
    inactiveColor="grey"
    barStyle={{ backgroundColor: '#ddd' }}>
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
