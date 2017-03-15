
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Inform from './Inform';
import Service from './Service';
import Inter from './Inter';

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
	  	selectedTab:'home'
	    };
    }
    render() {
        return (
        <TabNavigator tabBarStyle={{height:56}}>
			  <TabNavigator.Item
			  	title="首页"
			    selected={this.state.selectedTab === 'home'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("../imgs/ic_tab_home.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("../imgs/ic_tab_home_press.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'home' })}>
			    <Home{...this.props}/>
			  </TabNavigator.Item>

			  <TabNavigator.Item
			  	title="信息公开"
			    selected={this.state.selectedTab === 'inform'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("../imgs/ic_tab_inform.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("../imgs/ic_tab_inform_press.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'inform' })}>
			    <Inform {...this.props}/>
			  </TabNavigator.Item>

        <TabNavigator.Item
			  	title="便民服务"
			    selected={this.state.selectedTab === 'service'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("../imgs/ic_tab_service.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("../imgs/ic_tab_service_press.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'service' })}>
			    <Service {...this.props}/>
			  </TabNavigator.Item>

        <TabNavigator.Item
          title="政民互动"
          selected={this.state.selectedTab === 'cart'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../imgs/ic_tab_cart.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../imgs/ic_tab_cart_press.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'cart' })}>
          <Inter {...this.props}/>
        </TabNavigator.Item>
			</TabNavigator>
        );
    }
}
const styles=StyleSheet.create({
   iconStyle:{
       width:40,
       height:40,
       marginBottom:-4,
   },
   textStyle:{
       color:'#999',
   },
   selectedTextStyle:{
       color:'black',
   }
});
