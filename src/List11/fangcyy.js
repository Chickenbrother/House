'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  WebView,
  navigator,
  Dimensions,
  Alert,
  InteractionManager,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { NaviGoBack } from '../Common';
import fangcyy_content from './fangcyy_content';
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

export default class Fangcyy extends Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);
    this.state = {
      name:'',
      password:'',

    }
}

  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }

  updateName(newText){
    this.setState({
      name:newText
    })
  }

  updatePass(newText){
    this.setState({
       password:newText
    })
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
                <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>系统登录</Text>
             </View>
           </View>
        <View style={{marginLeft:10,marginRight:10}}>
          <View style={styles.row}>
            <Text style={styles.label}>用户名</Text>
            <TextInput style={styles.input} underlineColorAndroid={'transparent'}
             placeholder="请输入" placeholderTextColor='gray'
             onChangeText = {(newText) =>this.updateName(newText)}
              />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>密码</Text>
            <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid={'transparent'}
             placeholder="请输入" placeholderTextColor='gray'
             onChangeText = {(newText) =>this.updatePass(newText)}
             />
          </View>
          <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
             <TouchableOpacity onPress={this._login.bind(this)}>
               <View style={styles.btn}>
                 <Text style={{fontSize:20, color:'#fff'}}>登录</Text>
               </View>
             </TouchableOpacity>
         </View>
        </View>
      </View>
    )
  }

  _login(){
    var loginUserName = this.state.name;
    var loginIndex_password = this.state.password;

    var outData = {"loginUserName":loginUserName,"loginPassword":loginIndex_password};
          fetch("http://121.41.33.67:8080/HousingService/api/appointment/login",{
                  method:'POST',
                  headers:{
                   'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body:JSON.stringify(outData),
                })
              .then((response) => response.json())
              .then((responseData) =>{
                    if(responseData != null){
                      var uid = responseData.userId;
                       console.log(uid);
                      AsyncStorage.setItem('userId',uid, (error) => {console.log(error);});
                      this.props.navigator.push({
                        name: "fangcyy_content",
                        component: fangcyy_content,
                      });
                  } else {
                    Alert.alert('提示','用户名或者密码错误!');
                  }
              })
              .catch((error) => {
                Alert.alert('提示','请输入正确的用户名或者密码!');
                  });
          }
}



const styles = StyleSheet.create({
row:{
  flexDirection:'row',
  alignItems:'center',
  marginBottom:1,
  marginTop:20,
},
label:{
  width:60,
  fontSize:16,
  //marginLeft:10,
  color:'black',
  //textAlign:'center'
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
  //marginRight:20,
  borderColor:'#ddd',
  borderRadius: 4,
//  fontSize:14,
//  textAlign:'center'
},
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-18,
    borderRadius:5,
    borderWidth:2,
  //  marginLeft:12,
  //  marginRight:10,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    justifyContent:'center'
  },

});
