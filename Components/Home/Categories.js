import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { SearchBar, Icon, Card, Image, ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SimIcon from 'react-native-vector-icons/SimpleLineIcons'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SubCategories from './SubCategories';

export default class Categories extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(
        <ScrollView>
            <View style={styles.container}>
                <ListItem containerStyle={styles.navLink} onPress={() => this.props.navigation.navigate('subcategories', {subCategory: 'mobile'})}
                    title='Mobiles'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#fff700'}]}><Icon name='mobile' type='font-awesome' size={24} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink} onPress={() => this.props.navigation.navigate('subcategories', {subCategory: 'vehicle'})}
                    title='Vehicles'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#42ffc3'}]}><AntIcon name='car' size={18} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Property For Sale'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#ed5328'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Property For Rent'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#88fceb'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Electronics & Home Appliances'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#be90f5'}]}><Icon name='tv' type='font-awesome' size={16} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Bikes'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#cca35c'}]}><Icon name='motorcycle' type='font-awesome' size={18} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Buisness, Industrial & Agricultural'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#f56c8c'}]}><Icon name='industry' type='font-awesome' size={16} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Services'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#fce17e'}]}><MatIcon name='wrench-outline' size={18} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Jobs'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#f56740'}]}><SimIcon name='briefcase' size={16} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Animals'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#42ffc3'}]}><Icon name='paw' type='font-awesome' size={18} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Furniture & Home Decor'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#fff700'}]}><Icon name='mobile' type='font-awesome' size={18} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Fashion & Beauty'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#be90f5'}]}><MatIcon name='tshirt-crew-outline' size={20} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Books, Sports & Hobbies'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#cca35c'}]}><MatIcon name='guitar-acoustic' size={22} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
                <ListItem containerStyle={styles.navLink}
                    title='Kids'
                    leftIcon={<View style={[styles.iconBack, {backgroundColor: '#42ffc3'}]}><MatIcon name='baby-carriage' size={22} /></View>}
                    rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
                </ListItem>
            </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  navLink: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginVertical: 6,
      paddingVertical: 6,
  },
  iconBack: {
    borderRadius: 50,
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  productText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 5
  },
  arrowIcon: {
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
      margin: 5,
      marginRight: 20,
      color: 'grey'
  }
})
