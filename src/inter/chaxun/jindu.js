'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  WebView,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import jindu_content from './jindu_content';
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
  import { NaviGoBack } from '../../Common';
export default class jindu extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);

      this.state = {
        number:'',
        name:'',
      }
}
buttonBackAction(){
    const {navigator} = this.props;
    return NaviGoBack(navigator);
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
_chaxun(){
  var seach_id = this.state.number;
  var seach_name = this.state.name;
  var outData = {"id":seach_id,"name":seach_name};
        fetch("http://121.41.33.67:8080/HousingService/api/seach/work/schedule/result",{
                method:'POST',
                headers:{
                 'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(outData),
              })
            .then((response) => response.json())
            .then((result) =>{
                  if(result.havadata){
                    this.props.navigator.push({
                      name: "jindu_content",
                      component: jindu_content,
                      params:{
                              jd:result.jd,
                              st:result.state,
                              personID:result.personID,
                              registlb:result.registlb
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
          <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                 <Image
                    style={{width:16,height:20}}
                    source={require('../../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>我要查询</Text>
              </View>
           </View>

              <View style={styles.row}>
               <Text style={styles.label}>受理编号</Text>
               <TextInput style={styles.input} underlineColorAndroid={'transparent'}
               placeholder="请输入" placeholderTextColor='gray'
               onChangeText = {(newText) =>this.updateNum(newText)}/>
             </View>

             <View style={styles.row}>
               <Text style={styles.label}>申请姓名</Text>
               <TextInput style={styles.input} underlineColorAndroid={'transparent'}
               placeholder="请输入" placeholderTextColor='gray'
               onChangeText = {(newText) =>this.updateName(newText)}/>
             </View>
             <View style={{marginTop:20, marginLeft:10,marginRight:10,alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._chaxun.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>查询</Text>
                  </View>
                </TouchableOpacity>
            </View>
            <Text style={{width:Width,marginLeft:10,marginRight:10,fontSize:14,alignItems:'flex-start',justifyContent:'flex-start'}}>*本平台提供昨日之前30天之内受理业务的查询。</Text>
            <Text style={{width:Width,marginLeft:10,marginRight:10,fontSize:14,alignItems:'flex-start',justifyContent:'flex-start'}}>*目前仅开通产权交易、市场管理类业务。</Text>
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
  fontSize:16,
  color:'black'
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
//  marginRight:6,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:12,
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
