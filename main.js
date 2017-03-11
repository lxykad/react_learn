/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class test extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    item1: {

        width: 50,
        height: 50,
        backgroundColor: '#ff0000'
    },
    item2: {

        width: 50,
        height: 50,
        backgroundColor: '#00ff00'
    },
    item3: {
        width: 50,
        height: 50,
        backgroundColor: '#0000ff'
    },

});

AppRegistry.registerComponent('test', () => test);
