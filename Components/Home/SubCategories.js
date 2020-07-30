import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { SearchBar, Icon, Card, Image, ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SimIcon from 'react-native-vector-icons/SimpleLineIcons'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'

function RenderItem({ name, props }) {
  if (name == 'mobile') {
    return (
      <View style={styles.container}>
        <ListItem style={styles.categoryLink} onPress={() => props.navigation.navigate('productlist')} title='Tablet' >
        </ListItem>
        <ListItem style={styles.categoryLink} title='Accessories' >
        </ListItem>
        <ListItem style={styles.categoryLink} title='Mobile Phones' >
        </ListItem>
        <ListItem style={styles.categoryLink} title='View All' >
        </ListItem>
      </View>
    )
  }
  else if (name == 'vehicle') {
    return(
      <View style={styles.container}>
        <ListItem style={styles.categoryLink} title='Cars' >
        </ListItem>
        <ListItem style={styles.categoryLink} title='Cars on Installment' >
        </ListItem>
        <ListItem style={styles.categoryLink} title='Cars Accessories' >
        </ListItem>
        <ListItem style={styles.categoryLink} title='Spare Parts' >
        </ListItem>
      </View>
    )
  }
}

export default class SubCategories extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { subCategory } = this.props.route.params

    return (
      <ScrollView>
        <RenderItem name={subCategory} props={this.props} />
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
    marginHorizontal: 5
  },
})
