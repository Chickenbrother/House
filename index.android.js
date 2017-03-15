/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid,
  ToastAndroid
} from 'react-native';
import main from "./src/main";
import { NaviGoBack } from './src/Common';
var _navigator;
export default class House extends Component {
  constructor(props) {
     super(props);
     this.goBack = this.goBack.bind(this);
     BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
goBack() {
  // return NaviGoBack(_navigator);
   if (_navigator && _navigator.getCurrentRoutes().length > 1) {
 		_navigator.pop();
 		return true;
   }  else {
 		if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
 							 return false;
 					 }
 					 this.lastBackPressed = Date.now();
 					 ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
 					 return true;
   }
 }
  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute={{ name: 'main', component: main }}
        // configureScene={(route) => {
        //   return Navigator.SceneConfigs.VerticalUpSwipeJump;
        // } }
        renderScene={(route, navigator) => {
          let Component = route.component;
          _navigator = navigator;
          return <Component {...route.params} navigator={navigator}  />
        } }

        />
    );
  }
}

AppRegistry.registerComponent('House', () => House);
