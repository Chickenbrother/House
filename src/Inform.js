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
    let titles = ['公告公示', '政务动态', '机构职能'];
    let icons = ['check07_11', 'check08_11','check12_11'];
    let contents=['经济适用，廉租，公共租赁的住房公告','住保房管动态','基本信息，内设机构，直属单位'];
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>

        <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>

           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>信息公开</Text>
           </View>
       </View>

       <ScrollView showsVerticalScrollIndicator={true}
           contentContainerStyle={styles.contentContainer}>
       {
           titles.map((title,i) => {
               return (
                   <TouchableOpacity
                       key={title}
                       style={styles.cell}
                   onPress={()=>this.itemActionIndex(i)}>
                   <View style={styles.width1}>
                       <Image source={{uri: icons[i]}} style={{height: 36, width: 36}}/>
                   </View>
                   <View style={{flex:1,marginTop:0,marginLeft:10}}>
                       <Text tyle={{fontSize:16,color:'black',alignSelf:'flex-start'}}>{title}</Text>
                       <Text style={{color:'#ccc',fontSize:10,}}>{contents[i]}</Text>
                   </View>
                   <View style={{marginBottom:10}}>
                       <Image style={styles.rightIcon} source={{uri: 'right_07'}}/>
                   </View>
                   </TouchableOpacity>
               )
           })
       }
       </ScrollView>
    </View >
    );
  }
}
const styles = StyleSheet.create({
contentContainer: {
       marginLeft:10,
       marginRight:10,
       backgroundColor:"#FFFFFF",
      },
cell: {
  padding:0,
  flexDirection: 'row',
  height:42,
  marginLeft: 0,
  marginRight: 0,
  marginTop:4,
  marginBottom:4,
  justifyContent: 'space-between',
  borderBottomColor: '#ddd',
  borderBottomWidth: 1,
  alignItems: 'center'
  },
width1:{
      marginLeft:0,
      marginTop:3,
      marginBottom:5,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#FFF',
      height: 42,
      borderRadius: 8,
      },

rightIcon: {
      position: 'absolute',
      right: -4,
      top: -8,
      height: 15,
      width: 15
            },
  });
