import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {

    return(
      <View style={styles.container}>
        Chat
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})
