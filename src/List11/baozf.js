'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  WebView,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';
import { NaviGoBack } from '../Common';
export default class Baozf extends Component {
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
             <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                <Image
                   style={{width:16,height:20}}
                   source={require('../../imgs/ic_center_back.png')}
                />
             </TouchableOpacity>
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>保障性住房受理点</Text>
             </View>
          </View>
          <WebView
            source={{uri:'http://121.41.33.67:8080/HousingService/page/convenience/GuaranteedHouse.html'}}
            startInLoadingState={true}
            domStorageEnabled={true}
            javaScriptEnabled={true}
          />
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
  }
});
