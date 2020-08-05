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
    ad: state.ads
})

function RenderAd(props) {
    if (props.props.ad.isLoading) {
        return (
            <Loading />
        )
    }
    else if (props.props.ad.errMess) {
        return (<Text>Network Error</Text>)
    }
    else
        return (
            props.props.ad.ads.filter(item => item.id == props.adId ).map((item, index) => {
                return (
                    <View style={styles.imgConatiner}>
                        <Image source={{uri: dirctry + item.img}} style={{width: '100%', height: '100%'}} />
                        {/* <Text>{JSON.stringify(props.props.ad.ads.filter(item => item.id == props.adId )[0])}</Text> */}
                    </View>
                )
            })
        )
}

class adDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }
    render() {
        const { adId, userId } = this.props.route.params
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <RenderAd props={this.props} adId={adId} userId={userId} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    imgConatiner: {
        width: '100%',
        height: 120,
    },
    imageConatiner: {
        height: '70%',
        margin: 5
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
    }
})


export default connect(mapStateToProps)(adDetail)