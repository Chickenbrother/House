'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  WebView,
  Linking,
  Dimensions,
  InteractionManager,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
var url = 'tel:96711';
let totalWidth = Dimensions.get('window').width;
export default class Rexian extends Component {
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
                <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>便民服务</Text>
             </View>
          </View>

          <View style={{flex:1,marginLeft:10,marginRight:10,}}>
            <Text style={{fontSize:15,color:'black',fontWeight:'bold',textAlign:'center'}}>杭州市住房保障和房产管理局“967111”接访中心</Text>
            <Text style={{fontSize:14,marginTop:6,color:'black'}}>
            为提升我市房产管理行业的服务水平，提高为人民服务的效率，我局于2008年开通
            了“967111”房管服务热线，并设立了查询、转接和人工服务的功能。群众可拨
            打“967111”，根据语音提示查询或转接我局主要业务部门的咨询电话，就住房保障和房管方面的问题进行咨询，也可以通过语音提示查询或转接我市五个主城区（上城区、下城区、拱墅区、江干区、西湖区）的房屋应急维修中心电话。为了更加方便群众投诉和咨
            询，“967111”服务热线专门设立了人工服务功能，群众可以直接通过人工服务就关心的问题进行咨询。
  		      如您遇到了住房保障和房管方面的问题，欢迎拨打“967111”房管服务热线！</Text>

            <TouchableOpacity onPress={() => {
              Linking.openURL(url)
              }}  style={styles.width55}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>点击拨打热线“967111”</Text>
            </TouchableOpacity>
           </View>

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
  width55:{
    width:totalWidth-20,
    height:35,
    borderRadius:4,
    //marginLeft:12,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#1E90FF',
  //  marginRight:10,
    marginTop:10,

  },
});
