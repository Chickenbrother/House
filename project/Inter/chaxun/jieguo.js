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
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
export default class jieguo extends Component {
  constructor(props,params) {
      super(props);
      this.state = {
        number:'',
        name:'',
      }
}
back() {
    this.props.navigator.pop();
     }
updateNum(newText){
  this.setState({
     number:newText
  })
}
updateName(newText){
  this.setState({
    name:newText
  })
}


_jieguo(){
  var seach_id = this.state.number;
  var seach_name = this.state.name;
  var outData = {"id":seach_id,"name":seach_name};
        fetch("http://121.41.33.67:8080/HousingService/api/seach/certificate/result",{
                method:'POST',
                headers:{
                 'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(outData),
              })
            .then((response) => response.json())
            .then((result) =>{
                  if(result.show_info_more){
                    this.props.navigator.push({
                      name: "jieguo_content",
                      component: jieguo_content,
                      params:{
                              show:result.show_info,
                              cfmc:result.cfmc,
                              type:result.type,
                              sfmc:result.sfmc,
                              address:result.address
                          }
                    });
                } else {
                  Alert.alert('提示','用户名或者密码错误!');
                }
            })
            .catch((error) => {
              Alert.alert('提示','查询失败!');
                });

        }


  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,width:24,height:40,justifyContent:'center',marginTop:10}}>
                     <Image
                        style={{width:16,height:20}}
                        source={require('../../../imgs/ic_center_back.png')}
                    />
                  </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>我要查询</Text>
                    </View>
                </View>

             <View style={styles.row}>
               <Text style={styles.label}>受 理 编 号</Text>
               <TextInput style={styles.input} underlineColorAndroid={'transparent'}
               placeholder="请输入" placeholderTextColor='gray'
               onChangeText = {(newText) =>this.updateNum(newText)}/>
             </View>

             <View style={styles.row}>
               <Text style={styles.label}>申 请 姓 名</Text>
               <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                placeholder="请输入" placeholderTextColor='gray'
                onChangeText = {(newText) =>this.updateName(newText)}/>
             </View>
             <View style={{marginTop:20,marginLeft:10,marginRight:10,alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._jieguo.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>查询</Text>
                  </View>
                </TouchableOpacity>
            </View>

      </View>
    );
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
  fontSize:14,
  color:'black'
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
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
  }
});
