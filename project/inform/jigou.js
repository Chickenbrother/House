/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
import React,{Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  WebView,
  TouchableOpacity,
  ToastAndroid,
  Navigator,
  } from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Page1 from './jigou/Page1_1';
import Page2 from './jigou/Page1_2';
import Page3 from './jigou/Page1_3';
export default class Jigou extends Component {
  constructor(props) {
    super(props);
  }
  back() {
    this.props.navigator.pop();
     }
	render() {
	  return (
      <View style={{backgroundColor:'#fff',flex:1}}>
        <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
           <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:40,marginTop:10}}>
              <Image
                 style={{width:16,height:20}}
                 source={require('../../imgs/ic_center_back.png')}
              />
           </TouchableOpacity>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>机构职能</Text>
           </View>
       </View>

		<ScrollableTabView
		  renderTabBar={() => <DefaultTabBar underlineHeight={2} textStyle={{ fontSize: 14, marginTop: 6 }} style={{ height: 30,marginLeft:10,marginRight:10 }}/>}
      tabBarBackgroundColor="#fcfcfc"
      tabBarUnderlineColor="black"
      tabBarActiveTextColor="black"
      tabBarInactiveTextColor="gray"
      tabBarPosition='top'
      >
		  <Page1 navigator={this.props.navigator}  tabLabel='基本信息' style={styles.center} />
		  <Page2 navigator={this.props.navigator}  tabLabel='内设机构' style={styles.center} />
		  <Page3 navigator={this.props.navigator}  tabLabel='直属单位' style={styles.center} />
		</ScrollableTabView>
    </View>
	  );
	}
}
const styles = StyleSheet.create({
  center: {
        flex:1,
      },
      webview_style:{
        backgroundColor:'#FFFFFF',
    }

});
