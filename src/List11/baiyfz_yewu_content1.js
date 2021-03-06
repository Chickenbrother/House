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
  ScrollView,
  Picker,
  Alert,
  TouchableOpacity,
  TextInput
} from 'react-native';

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
import Baiyfz_yewu_content1_Page1 from './baiyfz/baiyfz_yewu_content1_Page1';
export default class Baiyfz_yewu_content1 extends Component {
  constructor(props,params) {
      super(props);
      this.state = {
        word:'',
        num:'',
        nam:''
      }
}
updateWord(newText){
  this.setState({
     word:newText
  })
}
updateNum(newText){
  this.setState({
     num:newText
  })
}
updateName(newText){
  this.setState({
     nam:newText
  })
}
_addUser(){
      var cqzh1 = this.state.word;
			var cqzh2 = this.state.num;
			var cqzh = "杭房权证" + cqzh1 + "字第" + cqzh2 + "号" ;
			var name = this.state.nam;
      var czlx = "查询";
      if( !cqzh1|| !cqzh2|| !name){
        Alert.alert('提示','请输入信息');
        return;
      };
			var outData = {"ywlb":1,"name":name,"cqzh":cqzh,"czlx":czlx};
      fetch("http://121.41.33.67:8080/HousingService/api/byfz/check/info",{
          method:'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({outData}),
      })
      .then((response) => response.json())
      .then((responseData) => {
              var havedate = result.havedate;
              if(havedate){
                      this.handleResponse(responseData.fwcode,responseData.szcq,"",responseData.address,responseData.fwjg,responseData.syqzid,
                      responseData.area,responseData.name,responseData.cqzh,"add");
              } else{
								 Alert.alert("请核对'房产证证号'和'产权所有人'");
							 }
        })
      .catch((error) => {
          Alert.alert('提示','验证失败!');
        });
}
handleResponse(fwnm,szcq,xqname,sqrxm7,fwjg,syqzid,sqrxm3,cqzmz,cqzid,crlx) {
      this.props.navigator.push({
        name: "Baiyfz_yewu_content1_Page1",
        component: Baiyfz_yewu_content1_Page1,
        params:{
          fwnm:fwnm,
          szcq:szcq,
          xqname:xqname,
          sqrxm7:sqrxm7,
          fwjg:fwjg,
          syqzid:syqzid,
          sqrxm3:sqrxm3,
          cqzmz:cqzmz,
          cqzid:cqzid,
          crlx:crlx
        }
      });
}
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                 <Image
                    style={{width:16,height:20}}
                    source={require('../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>白蚁防治</Text>
              </View>
           </View>
              <View style={styles.contentContainer}>
                <View style={styles.row}>
                 <Text style={styles.label}>杭房权证</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateWord(newText)}/>
                 <Text>字</Text>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>第</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateNum(newText)}/>
                 <Text>号</Text>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>产权人</Text>
                 <TextInput style={styles.input1} multiline={true} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName(newText)}/>
               </View>


             <View style={{marginTop:20, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._addUser.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>验证</Text>
                  </View>
                </TouchableOpacity>
            </View>
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
},
label:{
  width:80,
  fontSize:16,
//  marginLeft:10,
  color:'black',
//  textAlign:'center'
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
//  marginRight:1,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:12,
//  textAlign:'center'
},
input1:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:14,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:12,
//  textAlign:'center'
},
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-20,
    borderRadius:5,
    borderWidth:2,
  //  marginLeft:22,
//    marginRight:12,
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
