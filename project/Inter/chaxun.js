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

import Jindu from './chaxun/jindu';
import Jieguo from './chaxun/jieguo';
import CenterItem from './chaxun/CenterItem';
 
var {height,width} =  Dimensions.get('window');

export default class chaxun extends Component {
    constructor(props) {
        super(props);
        this.itemActionIndex=this.itemActionIndex.bind(this);
    }
    back() {
    this.props.navigator.pop();
     }

    //判断当前点击了那个按钮
    itemActionIndex(position){
        const {navigator} = this.props;
        if(position === 0){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Jindu,
              name: 'Jindu'
            });
          });

        }else if(position === 1){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Jieguo,
              name: 'Jieguo'
            });
          });
        }
      }
    render() {
        return (
             <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,width:24,height:40,justifyContent:'center',marginTop:10}}>
                     <Image
                        style={{width:16,height:20}}
                        source={require('../../imgs/ic_center_back.png')}
                    />
                  </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>我要查询</Text>
                    </View>
                </View>

                <View style={styles.top_line}></View>
                <CenterItem
                   title='办事进度查询'
                   icon={require('../../imgs/check14_11.png')}
                   onPress={()=>this.itemActionIndex(0)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='办事结果查询'
                   icon={require('../../imgs/check14_11.png')}
                   onPress={()=>this.itemActionIndex(1)}/>
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
