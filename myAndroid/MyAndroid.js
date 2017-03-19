/**
 * Created by lxy on 2017/3/16.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import MeiZi from '../meizi/MeiZi';

export default class MyAndroid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 20,
        }
    }

    render() {
        return (

            <View >

                <Text style={{width:100,height:100,backgroundColor:'#ff0000'}} onPress={()=>{
                    {this.getInput()}
                }}>
                    Android
                </Text>

                <TextInput ref="myInput" style={{width:200,height:50,backgroundColor:'#ffffff'}} />


            </View>

        );
    }

    getInput() {

        console.log("input=======" );
    }

}

AppRegistry.registerComponent('MyAndroid', () => MyAndroid);