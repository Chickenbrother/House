'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  WebView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
export default class jiegu extends Component {
  constructor(props,params) {
      super(props);

}
_onPage(){}
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
           <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,width:24,height:36,justifyContent:'center',marginTop:12}}>
                     <Image
                        style={{width:16,height:20}}
                        source={require('../../../imgs/ic_center_back.png')}
                    />
                  </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:16}}>结果查询</Text>
                    </View>
                </View>



              <View style={styles.row}>
               <Text style={styles.label}>受理编号</Text>
               <TextInput style={styles.input} underlineColorAndroid={'transparent'} placeholder="请输入" placeholderTextColor='gray'/>
             </View>

             <View style={styles.row}>
               <Text style={styles.label}>密       码</Text>
               <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid={'transparent'} placeholder="请输入" placeholderTextColor='gray'/>
             </View>
             <View style={{marginTop:20, marginLeft:10,marginRight:10,alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._addUser}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>查询</Text>
                  </View>
                </TouchableOpacity>
            </View>

      </View>
    );
  }
  back() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  webview_style:{
    flex:1,
  },
  row:{
  flexDirection:'row',
  alignItems:'center',
  marginBottom:1,
  marginTop:20,
  marginLeft:10,
  marginRight:10,
},
label:{
  width:70,
  textAlign:'center',
  fontSize:14,
  color:'black',

},
input:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:0,
  marginLeft:0,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:10,
  textAlign:'center'
},
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-18,
    borderRadius:5,
    borderWidth:2,
    marginLeft:0,
    marginRight:0,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    justifyContent:'center'
  },
});
