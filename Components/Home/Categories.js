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
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/baseUrl';
import { Loading } from '../LoadingComponent';

const mapStateToProps = state => {
  return {
    cat: state.categories
  }
}

function RenderItem(props) {
  if (props.props.cat.errMess) {
    return (<Text>Network Error</Text>)
  }
  else
    return (
      // <Text>{JSON.stringify(props.props)}</Text>
      props.props.cat.categories.map((item, index) => {
        return (
          <ListItem containerStyle={styles.navLink} onPress={() => props.props.navigation.navigate('subcategories', { cat_id: item.cat_id, catName: item.title })}
            key={index}
            title={item.title}
            leftAvatar={{ source: { uri: baseUrl + item.img } }}
            rightIcon={<Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' size={24} />} >
          </ListItem>
        )
      })
    )
}

class Categories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <RenderItem props={this.props} />
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


export default connect(mapStateToProps)(Categories)