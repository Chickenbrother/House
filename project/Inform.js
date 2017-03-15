/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  InteractionManager,
  ListView,
  ScrollView,
  Navigator,
} from 'react-native';
import Gonggao from './inform/gonggao';
import Zhengwu from './inform/zhengwu';
import Jigou from './inform/jigou';
import CenterItem from './Inter/CenterItem';
export default class Inform extends Component {
  constructor(props) {
    super(props);
    this.itemActionIndex=this.itemActionIndex.bind(this);
}
  //判断当前点击了那个按钮
  itemActionIndex(position){
      const {navigator} = this.props;
      if(position === 0){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component: Gonggao,
            name: 'Gonggao'
          });
        });
      }
      else if(position === 1){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Zhengwu,
            name: 'Zhengwu'
          });
        });
      }
    else if(position === 2){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Jigou,
            name: 'Jigou'
          });
        });
      }
  }

  render() {
    return (
       <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:16}}>信息公开</Text>
                    </View>
                </View>

                <View style={styles.top_line}></View>
                <CenterItem
                   title='公告公示'
                   icon={require('../imgs/check07_11.png')}
                   onPress={()=>this.itemActionIndex(0)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='政务动态'
                   icon={require('../imgs/check08_11.png')}
                   onPress={()=>this.itemActionIndex(1)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='机构职能'
                   icon={require('../imgs/check12_11.png')}
                   onPress={()=>this.itemActionIndex(2)}/>
                <View style={[styles.top_line,styles.center_line]}></View>                
             </View>
    );
  }
}
const styles = StyleSheet.create({
    top_line:{
        height:1,
        backgroundColor:'#ccc'
    },
    center_line:{
        marginLeft:10,
        marginRight:10,
    },
    
  });
