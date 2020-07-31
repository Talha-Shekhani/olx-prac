import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { SearchBar, Icon, Card, Image, ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SimIcon from 'react-native-vector-icons/SimpleLineIcons'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { fetchCategories } from '../../redux/Actions'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    cat: state.categories.categories
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
})


function RenderItem(props) {
  // if (props.name == 'mobile') {
    return (
      <View style={styles.container}>
        {/* <Text>{JSON.stringify(props.props.cat)}</Text> */}
        {props.props.cat.filter(item => item.name == props.name).map((item, index) => {
          return (
            <ListItem style={styles.categoryLink} onPress={() => props.navigation.navigate('productlist')} title={item.name} ></ListItem>
          )
        })}
        <ListItem style={styles.categoryLink} title='View All' >
        </ListItem>
      </View>
    )
  // }
  // else if (props.name == 'vehicle') {
  //   return(
  //     <View style={styles.container}>
  //       <ListItem style={styles.categoryLink} title='Cars' >
  //       </ListItem>
  //       <ListItem style={styles.categoryLink} title='Cars on Installment' >
  //       </ListItem>
  //       <ListItem style={styles.categoryLink} title='Cars Accessories' >
  //       </ListItem>
  //       <ListItem style={styles.categoryLink} title='Spare Parts' >
  //       </ListItem>
  //     </View>
  //   )
  // }
}

class SubCategories extends Component {
  constructor(props) {
    super(props)
  }

  UNSAFE_componentWillMount() {
    this.props.fetchCategories()
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

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories)