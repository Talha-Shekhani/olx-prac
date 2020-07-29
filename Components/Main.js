import React, { Component } from 'react';
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
import Categories from './Home/Categories';
import SubCategories from './Home/SubCategories';
import { fetchAds } from '../redux/Actions'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
  fetchAds: () => dispatch(fetchAds())
})

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

const tabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Explore"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName1, iconName2
        if (route.name === 'Explore') {
          iconName1 = focused ? 'home-variant' : 'home-outline'
        }
        else if (route.name === 'Chats') {
          iconName2 = focused ? 'chat-bubble' : 'chat-bubble-outline';
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

class Main extends Component {

  UNSAFE_componentWillMount() {
    this.props.fetchAds()
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="root" component={tabNavigation} options={{headerShown: false}} />
          <Stack.Screen name='categories' component={Categories} />
          <Stack.Screen name='subcategories' component={SubCategories} />
          
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)