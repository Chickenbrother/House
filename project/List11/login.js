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
  PickerIOS,
  Alert,
  TouchableOpacity,
  TextInput
} from 'react-native';

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
      language: '',
      num:'',
      topic:'',
      name:'',
      tel:'',
      fax:'',
      code:'',
      address:'',
      text:'',
      mima:''
    }
}
updateNum(newText){
  this.setState({
     num:newText
  })
}
updateTopic(newText){
  this.setState({
     topic:newText
  })
}
updateName(newText){
  this.setState({
     name:newText
  })
}
updateTel(newText){
  this.setState({
     tel:newText
  })
}
updateFax(newText){
  this.setState({
     fax:newText
  })
}
updateCode(newText){
  this.setState({
     code:newText
  })
}
updateAddress(newText){
  this.setState({
     address:newText
  })
}
updateText(newText){
  this.setState({
     text:newText
  })
}


_getCheckNumber(){
  var phone = this.state.tel;
  if(!phone){
    Alert.alert('提示', '请输入手机号码');
    return;
  }
  else {
    var url = "http://121.41.33.67:8080/HousingService/api/message/verification/" + phone;
    var outData={"phone":phone};
    fetch(url,{
            method:'GET',
            headers:{
             'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(outData),
          })
        .then((response) => response.json())
        .then((Data) =>{
          this.setState({
                   mima: Data
                })
        })
        .catch((error) => {
          Alert.alert('提示','获取验证码失败');
            });
          }
    }
_tijiao(){
  var vCode = this.state.num;
  if(vCode != this.state.mima){
    Alert.alert('输入验证码错误');
    return;
  };
  var emailsubject = this.state.topic;
  var operationclass = this.state.language;
  var sendman = this.state.name;
  var phone = this.state.tel;
  var replyfax= this.state.fax;
  var replycode=  this.state.code;
  var replyaddress=  this.state.address;
  var emailtext=  this.state.text;
  var classes = "http://121.41.33.67:8080/HousingService/api/question/create";
  var outD={"emailsubject":emailsubject,"operationclass":operationclass,"sendman":sendman,"replyphone":phone,
              "replyfax":replyfax,"replycode":replycode,"replyaddress":replyaddress,"emailtext":emailtext};
    if(!vCode || !emailsubject || !operationclass || !sendman || !phone || !replyfaxt || !replycode || !replyaddress || !emailtext){
              Alert.alert('提示', '请填写信息');
              return;
              }
      else {
        fetch(classes,{
                method:'POSt',
                headers:{
                 'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(outD),
              })
            .then((response) => response.json())
            .then((Data) =>{
                    Alert.alert("提交咨询成功");
                    })
            .catch((error) => {
              Alert.alert('提示','提交咨询失败');
                });
      }
}
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,width:24,height:36,justifyContent:'center',marginTop:12}}>
                     <Image
                        style={{width:16,height:20}}
                        source={require('../../imgs/ic_center_back.png')}
                    />
                  </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:16}}>换房意向登记平台</Text>
                    </View>
                </View>
           <ScrollView showsVerticalScrollIndicator={true}
                  contentContainerStyle={styles.contentContainer}>
             <View style={styles.width30}>
               <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',}}>用   户   登   录</Text>
             </View>
             <View >
               <PickerIOS
                  mode={'dropdown'}
                  itemStyle={styles.input2}
                  selectedValue={this.state.language}
                  onValueChange={(value) => this.setState({language: value})}>
                  <PickerIOS.Item label="公共租赁" value="51306" />
                  <PickerIOS.Item label="廉租" value="51301" />
                </PickerIOS>
              </View>

               <View style={styles.row}>
                 <Text style={styles.label}>姓       名</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                  onChangeText = {(newText) =>this.updateName(newText)}/>
               </View>

               <View style={styles.row}>
                 <Text style={styles.label}>身份证号</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateTel(newText)}/>
               </View>

               <View style={styles.row}>
                 <Text style={styles.label}>手       机</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateTel(newText)}/>
               </View>

               <View style={styles.row}>
                 <TextInput style={styles.input1} underlineColorAndroid={'transparent'}
                   placeholder="请输入" placeholderTextColor='gray' 
                   onChangeText = {(newText) =>this.updateNum(newText)} />

                   <TouchableOpacity onPress={this._getCheckNumber.bind(this)} style={{width:50,height:32,marginRight:0,marginLeft:8,backgroundColor:'#1E90FF',borderRadius:3,borderWidth:0,alignItems:'center',
                       justifyContent:'center'}}>
                      <Text style={{fontSize:8,color:'#fff',}}>获取验证码</Text>
                   </TouchableOpacity>
               </View>

             <View style={{marginTop:20,marginBottom:20,marginLeft:10,marginRight:10,alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._tijiao.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>提交</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </ScrollView>
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
  marginTop:10,
  marginLeft:10,
  marginRight:10,

},
label:{
  width:60,
  fontSize:14,
//  textAlign:'center',
  color:'black'
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:0,
  borderColor:'#ddd',
  borderRadius: 4,
    fontSize:10,

//  fontSize:14,
 textAlign:'center'
},
input1:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:0,
  marginLeft:60,
  borderColor:'#ddd',
  borderRadius: 4,
   textAlign:'center',
   fontSize:10

},
input2:{
  height:40,
  flex:1,
  marginRight:0,
  fontSize:14,

},
width30:{
      marginTop:2,
      width:100,
      height:24,
      borderRadius:4,
      marginLeft:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ddd',
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
  contentContainer: {
  //   margin:10,
     backgroundColor:"#fff",
   }
});
