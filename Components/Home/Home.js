import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView, FlatList } from 'react-native';
import { SearchBar, Icon, Card, Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/baseUrl';
import { Loading } from '../LoadingComponent';
import { postComment } from '../../redux/Actions'
import { ads } from '../../redux/ads'
import * as SecureStore from 'expo-secure-store'
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapStateToProps = state => ({
  ads: state.ads.ads,
  cat: state.categories,
  loc: state.loc
})

function RenderCat(props) {
  if (props.props.cat.isLoading) {
    return (
      <Loading />
    )
  }
  else if (props.props.cat.errMess) {
    return (<Text>Network Error</Text>)
  }
  else
    return (
      // <Text>{JSON.stringify(props.props)}</Text>
      props.props.cat.categories.map((item, index) => {
        while (index < 9)
          return (
            <TouchableOpacity key={index} style={styles.categoryLink} onPress={() => props.props.navigation.navigate('subcategories', { cat_id: item.cat_id, catName: item.title })} >
              <View style={styles.iconBack}><Image style={{ width: 40, height: 40 }} source={{ uri: baseUrl + item.img }} /></View>
              <Text style={styles.productText} >{item.title}</Text>
            </TouchableOpacity>
          )
      })
    )
}

function RenderAds(props) {
  if (props.props.ads.isLoading) {
    return (
      <Loading />
    )
  }
  else if (props.props.ads.errMess) {
    return (<Text>Network Error</Text>)
  }
  else
    return (
      // <Text>{JSON.stringify(props.props)}</Text>
      props.props.ads.map((item, index) => {
        return (
          <Card containerStyle={styles.productCardColumn} key={index} >
            <View style={styles.iconHBack} ><Icon name={props.favId == item.id ? 'heart' : 'heart-o'} type="font-awesome" style={styles.iconHeart} color={'red'} /></View>
            <TouchableOpacity key={index} onPress={() => props.props.navigation.navigate('addetail', { adId: item.id, userId: item.user_id })} >
              <View style={styles.imageConatiner}>
                <Image containerStyle={styles.cardImage}
                  resizeMethod="scale"
                  resizeMode="stretch"
                  source={{ uri: (baseUrl + item.img1), cache: 'force-cache' }}
                />
              </View>
              <View>
                <Text style={styles.priceText}> Rs {item.price}</Text>
                <Text >{item.title}</Text>
                <Text style={styles.loc} ><MatIcon name="map-marker" size={10} /><Text style={styles.locText}>{props.props.loc.loc.filter(itm => itm.area_id == item.area_id).map((itm, index) => {
                  return (<Text key={index}>  {itm.area}, {itm.city}</Text>)
                })}</Text> </Text>
              </View>
            </TouchableOpacity>
          </Card>
        )
      })
    )
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      userId: '',
    }
  }

  componentDidMount() {
    SecureStore.getItemAsync('userdata')
      .then((userdata) => {
        // Alert.alert(JSON.stringify(userinfo))
        if (userdata) {
          let userinfo = JSON.parse(userdata)
          this.setState({userId: userinfo.userId})
        }
      })
      .catch((err) => console.log('Cannot find user info' + err))
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
            <View style={styles.cardContainer}>
              <View style={styles.row}><Text>Browse Categories</Text><Text style={styles.link} onPress={() => this.props.navigation.navigate('categories')} >See all</Text></View>
              <View style={styles.categories}>
                <RenderCat props={this.props} />
              </View>
            </View>
            <View style={styles.cardContainer} >
              <View style={styles.row}><Text>More on Land & Plots</Text><Text style={styles.link}>View more</Text></View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}
              >
              </ScrollView>
            </View>
            <View style={styles.cardContainer} >
              <View style={styles.row}><Text>Fresh Recommendations</Text></View>
              <View style={styles.cardColumn} >
                <RenderAds props={this.props} favId={this.state.userId} />
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
    justifyContent: 'center',
  },
  iconHBack: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    zIndex: 2,
    // elevation: 20,
  },
  iconHeart: {
    zIndex: 2
  },
  productText: {
    alignSelf: 'center',
    textAlign: 'center',
    textTransform: "uppercase",
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
    height: '62%',
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
  },
  locText: {
    fontSize: 10
  },
  loc: {
    marginTop: 10
  }
})


export default connect(mapStateToProps)(Home)