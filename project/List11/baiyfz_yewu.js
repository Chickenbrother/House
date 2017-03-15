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
  ScrollView,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
import Baiyfz_yewu_content1 from './baiyfz_yewu_content1';
import Baiyfz_yewu_content2 from './baiyfz_yewu_content2';
export default class Baiyfz_yewu extends Component {
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
            component:Baiyfz_yewu_content1,
            name: 'Baiyfz_yewu_content1'
          });
        });
      }
      else if(position === 1){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Baiyfz_yewu_content2,
            name: 'Baiyfz_yewu_content2'
          });
        });
      }
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
                <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>白蚁防治</Text>
             </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={true}
                 contentContainerStyle={styles.contentContainer}>

           <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity onPress={()=>this.itemActionIndex(0)}>
                <View style={styles.btn}>
                  <Text style={{fontSize:20, color: 'white'}}>新办白蚁灭治业务</Text>
                </View>
              </TouchableOpacity>
          </View>
          <View style={{marginTop:10, alignItems:'center', justifyContent:'center'}}>
             <TouchableOpacity onPress={()=>this.itemActionIndex(1)}>
               <View style={styles.btn}>
                 <Text style={{fontSize:20, color: 'white'}}>装修白蚁预防业务</Text>
               </View>
             </TouchableOpacity>
         </View>
         <Text style={{marginLeft:1,marginTop:10,backgroundColor:'#F0F0F0',fontSize:14,alignItems:'flex-start',justifyContent:'flex-start',marginBottom:6,color:'black'}}>业务类别解释</Text>
         <Text style={{marginLeft:1,fontSize:14,alignItems:'flex-start',justifyContent:'flex-start',marginBottom:6}}>新办白蚁灭治业务：有白蚁危害或分飞，未办理过白蚁灭治委托手续的，或已过包治期限的。</Text>
         <Text style={{marginLeft:1,fontSize:14,alignItems:'flex-start',justifyContent:'flex-start',marginBottom:6}}>装修白蚁预防业务：房屋装修时需进行白蚁预防处理的。</Text>
         <Text style={{marginLeft:1,marginTop:10,backgroundColor:'#F0F0F0',fontSize:14,alignItems:'flex-start',justifyContent:'flex-start',marginBottom:6,color:'black'}}>温馨提示</Text>
         <Text style={{marginLeft:1,fontSize:14,alignItems:'flex-start',justifyContent:'flex-start',marginBottom:6}}>受理范围杭州市五城区及杭州经济技术开发区，不包括萧山区、余杭区、滨江区。</Text>
         </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FAEBD7',
  },
  webview_style:{
    flex:1,
  },
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-20,
    borderRadius:5,
    borderWidth:2,
  //  marginLeft:13,
//    marginRight:13,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    justifyContent:'center'
  },
  contentContainer: {
     marginLeft:10,
     marginRight:10,
     backgroundColor:"#fff",
   }
});
