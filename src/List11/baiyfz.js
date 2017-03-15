'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  WebView,
  Dimensions,
  Navigator,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';
import { NaviGoBack } from '../Common';
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
import Baiyfz_yewu from './baiyfz_yewu';
import Baiyfz_fukuan from './baiyfz_fukuan';
export default class Baiyfz extends Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);
    this.itemActionIndex=this.itemActionIndex.bind(this);
}
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  //判断当前点击了那个按钮
  itemActionIndex(position){
      const {navigator} = this.props;
      if(position === 0){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Baiyfz_yewu,
            name: 'Baiyfz_yewu'
          });
        });
      }
      else if(position === 1){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Baiyfz_fukuan,
            name: 'Baiyfz_fukuan'
          });
        });
      }
  }

  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>

          <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
             <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                <Image
                   style={{width:16,height:20}}
                   source={require('../../imgs/ic_center_back.png')}
                />
             </TouchableOpacity>
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>白蚁防治</Text>
             </View>
          </View>

           <View style={{marginTop:Height/4, marginLeft:10,marginRight:10,}}>
              <TouchableOpacity onPress={()=>this.itemActionIndex(0)}>
                <View style={styles.btn}>
                  <Text style={{fontSize:20, color: 'white'}}>白蚁防治业务受理</Text>
                </View>
              </TouchableOpacity>
           </View>
          <View style={{marginTop:20, marginLeft:10,marginRight:10,}}>
             <TouchableOpacity onPress={()=>this.itemActionIndex(1)}>
               <View style={styles.btn}>
                 <Text style={{fontSize:20, color: 'white'}}>业务查询及付款</Text>
               </View>
             </TouchableOpacity>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-18,
    borderRadius:5,
    borderWidth:2,
  //  marginLeft:13,
  //  marginRight:13,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    justifyContent:'center'
  },
});
