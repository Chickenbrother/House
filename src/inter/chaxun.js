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
} from 'react-native';
import Jindu from './chaxun/jindu';
import Jieguo from './chaxun/jieguo';
export default class chaxun extends Component {
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
            component:Jindu,
            name: 'Jindu'
          });
        });
      }
      else if(position === 1){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Jieguo,
            name: 'Jieguo'
          });
        });
      }
  }

  render() {
    let titles = ['办事进度查询', '办证结果查询'];
    let icons = ['check14_11', 'check14_11'];
    let contents=['本平台提供昨日之前30天之内受理业务的查询','请通过受理编号和出/受方名称进行查询'];
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>

        <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
           <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
              <Image
                 style={{width:16,height:20}}
                 source={require('../../imgs/ic_center_back.png')}
              />
           </TouchableOpacity>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>我要查询</Text>
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
                       <Text tyle={{fontSize:16,alignSelf:'flex-start'}}>{title}</Text>
                       <Text style={{color:'#ccc',fontSize:10,}}>{contents[i]}</Text>
                   </View>
                   <View style={{ marginTop:10,marginBottom:10}}>
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
  back() {
    this.props.navigator.pop();
  }
}
const styles = StyleSheet.create({
contentContainer: {
       margin:10,
       backgroundColor:"#FFFFFF",
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
cell: {
      flexDirection: 'row',
      height: 42,
      marginLeft: 0,
      marginRight: 10,
      marginTop:4,
      marginBottom:4,
      justifyContent: 'space-between',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      alignItems: 'center'
      },
rightIcon: {
      position: 'absolute',
      right: -4,
      top: -6,
      height: 15,
      width: 15
            },
  });
