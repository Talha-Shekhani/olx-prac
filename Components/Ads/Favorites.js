import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { fetchAds, fetchCategories, fetchLoc } from '../../redux/Actions'
import * as SecureStore from 'expo-secure-store'
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/baseUrl';


const mapStateToProps = state => {
  return {
    ads: state.ads
  }
}

class Favorites extends Component {

  render() {
    return (
      <View>
        <Text>Favorites</Text>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Favorites)