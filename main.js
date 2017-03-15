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
    Image,
    TouchableHighlight,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';

import WeixinTabBar from './WeixinTabBar'

export default class test extends Component {

    /**
     * mounting 开始 1 2 3 4 方法。
     * @param props
     */
    constructor(props) {
        super(props);//子类必须要在constructor中指定super 方法，否则在新建实例的时候会报错.
        console.log('test========1constructor')

        this.state = {
            tabNames: ['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5'],
            tabIconNames: ['ios-paper', 'ios-albums', 'ios-paper-plane', 'ios-person-add', , 'ios-paper-plane'],
        };

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
        console.log("test=====prop===" + nextProps.toString())
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

    /* render() {
     console.log("test========3render")

     let tabNames = this.state.tabNames;
     return (

     <ScrollableTabView

     //renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}

     tabBarPosition='bottom'
     locked={false}//false可以滑动，true不可滑动
     initialPage={0}//初始化选中页面

     tabBarUnderlineColor='#FF0000'
     tabBarBackgroundColor='#FFFFFF'
     tabBarActiveTextColor='#9B30FF'
     tabBarInactiveTextColor='#7A67EE'
     tabBarTextStyle={{fontSize: 18}}

     scrollWithoutAnimation={true}//默认false，表示有动画效果

     //tab切换回调
     onChangeTab={
     (obj)=>{
     console.log("test=========onChangeTab====="+obj.i);
     }
     }

     //tab 滑动回调
     onScroll={
     (position)=>{
     // float类型 [0, tab数量-1]
     console.log("test=========onScroll====="+position);
     }
     }

     renderTabBar={() => <DefaultTabBar/>}>

     <Text tabLabel='福利'/>
     <Text tabLabel='android'/>
     <Text tabLabel='ios'/>
     <Text tabLabel='前端'/>
     <Text tabLabel='休息视频'/>


     </ScrollableTabView>

     );

     let tabIconNames = this.state.tabIconNames;
     }
     */

    render() {
        console.log("test========3render")

        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (

            <ScrollableTabView

                renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>

                <View style={styles.content} tabLabel='key1'>
                    <Text>#1</Text>
                </View>

                <View style={styles.content} tabLabel='key2'>
                    <Text>#2</Text>
                </View>

                <View style={styles.content} tabLabel='key3'>
                    <Text>#3</Text>
                </View>

                <View style={styles.content} tabLabel='key4'>
                    <Text>#4</Text>
                </View>

                <View style={styles.content} tabLabel='key4'>
                    <Text>#5</Text>
                </View>

            < / ScrollableTabView >

        );

    }


}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        flex: 1
    }
});

AppRegistry.registerComponent('test', () => test);
