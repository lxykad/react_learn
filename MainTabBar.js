'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    List
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class MainTabBar extends Component {

    static propTypes: {
        //属性验证，为了性能考虑只在开发环境进行验证

        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合

        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    }

    setAnimationValue({value}) {
        console.log("maintabbar=====setAnimationValue===" + value);
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
        console.log("maintabbar=====componentDidMount===");
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#39c6c1" : "#000000"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]} // 图标
                        size={30}
                        color={color}/>
                    <Text style={{color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (

            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}

                {/* {this.renderTabs()}*/}


            </View>

        );
    }

    renderTabs() {

        for (let i in this.props.tabNames) {

            let color = this.props.activeTab == i ? "#39c6c1" : "#000000"; // 判断i是否是当前选中的tab，设置不同的颜色

            // return (

            <TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]} // 图标
                        size={30}
                        color={color}/>
                    <Text style={{color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
            //  );

        }

    }

}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ffffff'
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});


export default MainTabBar;