

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

import chaxun from './Inter/chaxun';
import zixun  from './Inter/zixun';
import C from './Inter/C';
import CenterItem from './Inter/CenterItem';
 
var {height,width} =  Dimensions.get('window');

export default class Inter extends Component {
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
              component: chaxun,
              name: 'chaxun'
            });
          });

        }else if(position === 1){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: zixun,
              name: 'zixun'
            });
          });
        }else if(position === 2){
            InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: C,
              name: 'C'
            });
          });
        } 
      }
    render() {
        return (
             <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:16}}> 便民服务</Text>
                    </View>
                </View>

                <View style={styles.top_line}></View>
                <CenterItem
                   title='我要查询'
                   icon={require('../imgs/check14_11.png')}
                   onPress={()=>this.itemActionIndex(0)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='我要咨询'
                   icon={require('../imgs/check11_11.png')}
                   onPress={()=>this.itemActionIndex(1)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='我要投票'
                   icon={require('../imgs/check10_11.png')}
                   onPress={()=>this.itemActionIndex(2)}/>
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

