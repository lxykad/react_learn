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
    /**
     * mounting 开始 1 2 3 4 方法。
     * @param props
     */
    constructor(props) {
        super(props);//子类必须要在constructor中指定super 方法，否则在新建实例的时候会报错.
        console.log('test========1constructor')

    }

    //服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。
    componentWillMount() {
        console.log("test========2componentWillMount")
    }

    //在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
    componentDidMount() {
        console.log("test========4componentDidMount")
    }

    //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
    //shouldComponentUpdate用于比较props和state的变化，决定UI是否更新，当组件比较多时，使用这个方法能有效提高应用性能
    componentWillReceiveProps(nextProps) {
        console.log("test=====prop==="+nextProps.toString())
    }

    //在接收到新的 props 或者 state，将要渲染之前调用。
    shouldComponentUpdate(nextProps, nextState) {
        console.log("test========shouldComponentUpdate")
    }

    /**
     * 在接收到新的 props 或者 state 之前立刻调用。
     * 在初始化渲染的时候该方法不会被调用。使用该方法做一些更新之前的准备工作。
     * 你不能在该方法中使用 this.setState()。如果需要更新 state 来响应某个 prop 的改变，请使用 componentWillReceiveProps。
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("test========componentWillUpdate")
    }

    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount() {
        console.log("test========componentWillUnmount")
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        console.log("test========3render")
        return (
            //  <Image source={pic} style={{width: 193, height: 110}}/>
            <View>
                <Text style={styles.item1} >hello</Text>
            </View>

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
