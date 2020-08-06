import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView, FlatList } from 'react-native';
import { Icon, Input, CheckBox, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/baseUrl';
import { Loading } from '../LoadingComponent';
import { postComment } from '../../redux/Actions'
import { ads } from '../../redux/ads';
import { dirctry } from '../../shared/baseUrl'
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapStateToProps = state => ({

})


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            remember: false
        }
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container} >
                        <Input placeholder='Email'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            onChangeText={(email) => this.setState({ email: email })}
                            value={this.state.email}
                            containerStyle={styles.formInput} />
                        <Input placeholder='Password'
                            leftIcon={{ type: 'font-awesome', name: 'key' }}
                            onChangeText={(password) => this.setState({ password: password })}
                            value={this.state.password}
                            containerStyle={styles.formInput} />
                    </View>
                    <View style={styles.formButton} >
                        <Button
                            // onPress={() => this.handleLogin()}
                            title='Login'
                            buttonStyle={{ backgroundColor: '#232323' }} />
                    </View>
                </ScrollView>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        margin: 20,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    image: {
        margin: 10,
        width: 80,
        height: 60
    },
    formInput: {
        margin: 5,
        width: '100%'
    },
    formCheckbox: {
        margin: 40,
        backgroundColor: null
    },
    formButton: {
        width: '90%',
        justifyContent: 'flex-end',
        margin: 20,
        bottom: 0,
    }
})


export default connect(mapStateToProps)(Login)