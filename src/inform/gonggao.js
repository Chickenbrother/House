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
import { NaviGoBack } from '../Common';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Page1 from './gonggao/Page1';
import Page2 from './gonggao/Page2';
import Page3 from './gonggao/Page3';
export default class gonggao extends Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);
}
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
	render() {
	  return (
      <View style={{backgroundColor:'#fff',flex:1}}>
        <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
           <TouchableOpacity onPress={() => {this.buttonBackAction()}}
           style={{marginLeft:6,justifyContent:'center',width:24,height:36}}
            >
              <Image
                 style={{width:16,height:20}}
                 source={require('../../imgs/ic_center_back.png')}
              />
           </TouchableOpacity>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>信息公开</Text>
           </View>
       </View>
		<ScrollableTabView
		  renderTabBar={() => <DefaultTabBar underlineHeight={2} textStyle={{ fontSize: 14, marginTop: 6 }} style={{ height: 36 ,marginLeft:10,marginRight:10}}/>}
      tabBarBackgroundColor="#fcfcfc"
      tabBarUnderlineColor="black"
      tabBarActiveTextColor="black"
      tabBarInactiveTextColor="gray"
      tabBarPosition='top'
      >
		  <Page1 navigator={this.props.navigator} tabLabel='经济适用住房' style={styles.center} />
		  <Page2 navigator={this.props.navigator} tabLabel='廉价房屋公告' style={styles.center} />
		  <Page3 navigator={this.props.navigator} tabLabel='公租房公告' style={styles.center} />
		</ScrollableTabView>
    </View>
	  );
	}
}
const styles = StyleSheet.create({
  center: {
        flex:1,
      },
});
