import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView, FlatList } from 'react-native';
import { SearchBar, Icon, Card, Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/baseUrl';
import { Loading } from '../LoadingComponent';
import { postComment } from '../../redux/Actions'
import { ads } from '../../redux/ads';
import { dirctry } from '../../shared/baseUrl'
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapStateToProps = state => ({
  ads: state.ads.ads
})


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {
    const renderAds = ({ item, index }) => {
      return (
        <Card containerStyle={styles.productCardColumn} key={index}>
          <View style={styles.imageConatiner}>
            <Image containerStyle={styles.cardImage}
              // resizeMethod="scale"
              // resizeMode="cover"
              source={{ uri: (dirctry + item.img1) }}
            />
          </View>
          <View>
            <Text> Rs {item.price}</Text>
            <Text>{item.title}</Text>
          </View>
        </Card>
      )
    }

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
            <View style={styles.cardContainer}>
              <View style={styles.row}><Text>Browse Categories</Text><Text style={styles.link} onPress={() => this.props.navigation.navigate('categories')} >See all</Text></View>
              <View style={styles.categories}>
                <TouchableOpacity style={styles.categoryLink} onPress={() => this.props.navigation.navigate('subcategories', {subCategory: 'mobile'})} >
                  <View style={[styles.iconBack, { backgroundColor: '#fff700' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >MOBILES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} onPress={() => this.props.navigation.navigate('subcategories', {subCategory: 'vehicle'})}>
                  <View style={[styles.iconBack, { backgroundColor: '#42ffc3' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >VEHICLES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} >
                  <View style={[styles.iconBack, { backgroundColor: '#ed5328' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >PROPERTY FOR SALE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} >
                  <View style={[styles.iconBack, { backgroundColor: '#88fceb' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >PROPERTY FOR RENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} >
                  <View style={[styles.iconBack, { backgroundColor: '#be90f5' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >ELECTRONICS & HOME APPLIANCES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} >
                  <View style={[styles.iconBack, { backgroundColor: '#cca35c' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >BIKES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} >
                  <View style={[styles.iconBack, { backgroundColor: '#f56c8c' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >BUISNESS, INDUSTRIAL & AGRICULTURAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} >
                  <View style={[styles.iconBack, { backgroundColor: '#fce17e' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >SERVICES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryLink} >
                  <View style={[styles.iconBack, { backgroundColor: '#f56740' }]}><Icon name='mobile' type='font-awesome' size={28} /></View>
                  <Text style={styles.productText} >JOBS</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContainer} >
              <View style={styles.row}><Text>More on Land & Plots</Text><Text style={styles.link}>View more</Text></View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}
              >
                {/* <View style={styles.cardRow} > */}
                {/* <Card containerStyle={styles.productCard} imageWrapperStyle={styles.cardImage}
                  image={require('../../assets/images/plot.jpg')} >
                  <View>
                    <Text>Rs 31,500</Text>
                  </View>
                </Card>
                <Card containerStyle={styles.productCard} imageWrapperStyle={styles.cardImage}
                  image={require('../../assets/images/plot.jpg')} >
                  <View>
                    <Text>Rs 31,500</Text>
                  </View>
                </Card>
                <Card containerStyle={styles.productCard} imageWrapperStyle={styles.cardImage}
                  image={require('../../assets/images/plot.jpg')} >
                  <View>
                    <Text>Rs 31,500</Text>
                  </View>
                </Card>
                <Card containerStyle={styles.productCard} imageWrapperStyle={styles.cardImage}
                  image={require('../../assets/images/plot.jpg')} >
                  <View>
                    <Text>Rs 31,500</Text>
                  </View>
                </Card> */}
                {/* </View> */}
              </ScrollView>
            </View>
            <View style={styles.cardContainer} >
              <View style={styles.row}><Text>Fresh Recommendations</Text></View>
              <View style={styles.cardColumn} >
                {this.props.ads.map((item, index) => {
                  return (
                    <Card containerStyle={styles.productCardColumn} key={index}>
                      <View style={styles.imageConatiner}>
                        <Image containerStyle={styles.cardImage}
                          resizeMethod="scale"
                          resizeMode="stretch"
                          
                          source={{ uri: (dirctry + item.img1) }}
                        />
                      </View>
                      <View>
                        <Text style={styles.priceText}> Rs {item.price}</Text>
                        <Text>{item.title}</Text>
                      </View>
                    </Card>
                  )
                })}
                {/* <RenderAds item={this.props.ads[0]} /> */}

              </View>
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
    borderRadius: 50,
    width: 40,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  productText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 10
  },
  productCard: {
    width: 160,
    marginHorizontal: 2,
    borderColor: 'grey',
    borderRadius: 5
  },
  cardRow: {
    overflow: "scroll",
    flexWrap: "nowrap",
    flexDirection: 'row',
  },
  imageConatiner: {
    width: '94%',
    height: '70%',
    margin: 5
  },
  cardImage: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    paddingVertical: 5
  },
  cardColumn: {
    overflow: "scroll",
    flexWrap: "wrap",
    flexDirection: 'row'
  },
  productCardColumn: {
    width: '47%',
    height: 250,
    padding: 5,
    marginHorizontal: 4,
    borderColor: 'grey',
    borderRadius: 5,
    marginVertical: 8
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  }
})


export default connect(mapStateToProps)(Home)