import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { SearchBar, Icon, Card, Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/baseUrl';
import { Loading } from '../LoadingComponent';
import { postComment } from '../../redux/Actions'

const mapStateToProps = state => ({
  dishes: state.dishes
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <SearchBar containerStyle={styles.searchBar}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder=""
              value={this.state.search}
              onChangeText={(val) => this.setState({ search: val })}
              platform='android' />

            <View style={styles.cardContainer} >
              <Card containerStyle={styles.productCardColumn}>
                <View style={styles.product} >
                  <View style={styles.imageConatiner}>
                    <Image containerStyle={styles.cardImage}
                      resizeMethod="scale"
                      resizeMode="cover"
                      source={require('../../assets/images/plot.jpg')}
                    />
                  </View>
                  <View style={styles.rightSide} >
                    <Text style={styles.productPrice}>Rs 79,500</Text>
                    <Text style={styles.productTitle} numberOfLines={1}>Samsung 16gb RAM , 64 gb ROM 10/10</Text>
                    <View style={styles.rightBottom} >
                      <Text style={styles.productLoc}><MatIcon name="map-marker" size={10} />Karachi, Sindh</Text>
                      <Text style={styles.productDate}>23 JUL</Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  inputContainerStyle: {
    height: 24,
  },
  inputStyle: {
    minHeight: 24,
    fontSize: 14
  },
  searchBar: {
    height: 40,
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
  rightSide: {
    margin: 5,
    width: '60%',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  },
  productTitle: {
    fontSize: 14,
    overflow: "hidden",
  },
  rightBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  productLoc: {
    fontSize: 10,
  },
  productDate: {
    fontSize: 10
  },
  imageConatiner: {
    width: '32%',
    height: '85%',
    margin: 10
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  productCardColumn: {
    width: '100%',
    height: 130,
    marginHorizontal: 2,
    padding: 0,
    borderColor: 'grey',
    borderRadius: 5,
    marginVertical: 8
  },
  product: {
    flexDirection: 'row',
    width: '100%'
  }
})


export default connect(mapStateToProps)(Home)