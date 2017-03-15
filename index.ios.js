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
  Navigator,
  View
} from 'react-native';
import main from './project/main';
export default class App extends Component {
  render() {
    return (
           <Navigator
        //ref='navigator'
        initialRoute={{ name: 'main', component: main }}
        // configureScene={(route) => {
        //   return Navigator.SceneConfigs.VerticalUpSwipeJump;
        // } }
        renderScene={(route, navigator) => {
          let Component = route.component;
          //_navigator = navigator;
          return <Component {...route.params} navigator={navigator}  />
        } }

        />
    );
  }
}

AppRegistry.registerComponent('House', () => App);
