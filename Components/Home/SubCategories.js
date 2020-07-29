import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { SearchBar, Icon, Card, Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SimIcon from 'react-native-vector-icons/SimpleLineIcons'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SubCategories extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.categoryLink} >
                    <Text style={styles.productText} >Mobiles</Text>
                </View>
                <View style={styles.categoryLink} >
                    <Text style={styles.productText} >Mobiles</Text>
                </View>
                <View style={styles.categoryLink} >
                    <Text style={styles.productText} >Mobiles</Text>
                </View>
            </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  categoryLink: {
    margin: 10,
  },
  productText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 5
  },
})
