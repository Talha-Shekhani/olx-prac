import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { SearchBar, Icon, Card, Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {

    return(
      <View style={styles.container}>
        <SearchBar containerStyle={styles.searchBar}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder=""
          value={this.state.search}
          onChangeText={(val) => this.setState({search: val})}
          platform='android' />
          <View style={styles.cardContainer}>
            <View style={styles.row}><Text>Browse Categories</Text><Text style={styles.link}>See all</Text></View>
            <View style={styles.categories}>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#fff700'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >MOBILES</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#42ffc3'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >VEHICLES</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#ed5328'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >PROPERTY FOR SALE</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#88fceb'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >PROPERTY FOR RENT</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#be90f5'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >ELECTRONICS & HOME APPLIANCES</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#cca35c'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >BIKES</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#f56c8c'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >BUISNESS, INDUSTRIAL & AGRICULTURAL</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#fce17e'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >SERVICES</Text>
              </View>
              <View style={styles.categoryLink} >
                <View style={[styles.iconBack, {backgroundColor: '#f56740'}]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                <Text style={styles.productText} >JOBS</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer} >
            <View style={styles.row}><Text>More on Land & Plots</Text><Text style={styles.link}>View more</Text></View>
            <Card>
              <Image width={24} source={require('../../assets/images/plot.jpg')} />
              <View>
                <Text>Rs 31,500</Text>
              </View>
            </Card>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  inputContainerStyle: {
    height: 12,
  },
  inputStyle: {
    minHeight: 12
  },
  searchBar: {
    height: 30,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 5,
    marginHorizontal: 5
  },
  cardContainer: {
    backgroundColor: 'white',
    marginTop: 5,
    padding: 10,
    paddingBottom: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  link: {
    textDecorationLine: 'underline'
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  categoryLink: {
    width: 120,
    margin: 5,
    marginVertical: 12
  },
  iconBack: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  productText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 10
  }
})
