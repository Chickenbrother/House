'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    InteractionManager,
    Dimensions,
    StyleSheet,
    ToastAndroid,
} from 'react-native';

import Fangcbl from './List11/fangcbl';
import Chaddz from './List11/chaddz';
import Baozfsl from './List11/baozfsl';
import Fangcyy from './List11/fangcyy';
import Zihhf from './List11/zihhf';
import Baiyfz from './List11/baiyfz';

import CenterItem from './List11/CenterItem';
 
var {height,width} =  Dimensions.get('window');

export default class Service extends Component {
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
              component: Fangcbl,
              name: 'Fangcbl'
            });
          });
        }
        else if(position === 1){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Chaddz,
              name: 'Chaddz'
            });
          });
        }
        else if(position === 2){
            InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Baozfsl,
              name: 'Baozfsl'
            });
          });
        } 
        else if(position === 3){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Fangcyy,
              name: 'Fangcyy'
            });
          });
        }
        else if(position === 4){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Zihhf,
              name: 'Zihhf'
            });
          });
        }
        else if(position === 5){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Baiyfz,
              name: 'Baiyfz'
            });
          });
        }
      }
      Zihhf
    render() {
        return (
             <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:16}}> 政民互动</Text>
                    </View>
                </View>

                <View style={styles.top_line}></View>
                <CenterItem
                   title='房产交易办理点'
                   icon={require('../imgs/check03_11.png')}
                   onPress={()=>this.itemActionIndex(0)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='查档地址'
                   icon={require('../imgs/check04_11.png')}
                   onPress={()=>this.itemActionIndex(1)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='保障房受理'
                   icon={require('../imgs/check05_11.png')}
                   onPress={()=>this.itemActionIndex(2)}/>
                <View style={[styles.top_line,styles.center_line]}></View>    
                <CenterItem
                   title='房产交易办理预约'
                   icon={require('../imgs/check06_11.png')}
                   onPress={()=>this.itemActionIndex(3)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='自助换房'
                   icon={require('../imgs/check09_11.png')}
                   onPress={()=>this.itemActionIndex(4)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='白蚁防治'
                   icon={require('../imgs/check13_11.png')}
                   onPress={()=>this.itemActionIndex(5)}/>
                <View style={[styles.top_line,styles.center_line]}></View>                
                       
             </View>
        );
    }
}
const styles=StyleSheet.create({
    top_line:{
        height:1,
        backgroundColor:'#ccc'
    },
    center_line:{
        marginLeft:10,
        marginRight:10,
    },
    
});