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
var bh,fzr,cq5,sh;
export default class Baiyfz_fukuan_content extends Component {
  constructor(props,params) {
      super(props);
      bh:this.props.bh;
      fzr:this.props.fzr;;
      cq5:this.props.cq5;;
      sh:this.props.sh;;
      }

updateName1(newText){
  this.setState({
     bh:newText
  })
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

             <Text style={{width:Width,backgroundColor:'#E7E6E6',fontSize:14,alignItems:'flex-start',justifyContent:'flex-start'}}>受理信息查询</Text>
               <View style={styles.row}>
                 <Text style={styles.label}>预受理编号</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'} multiline={true} numberOfLines={2}
                 placeholder="预受理编号，产权证号和产权人三项必须填写两项进行查询" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName1(newText)}/>
               </View>
             <View style={styles.row}>
                 <Text style={styles.label}>杭房权证</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateName2(newText)}/>
                 <Text style={styles.label}>字</Text>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>第</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateName3(newText)}/>
                 <Text style={styles.label}>号</Text>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>产权人</Text>
                 <TextInput style={styles.input} multiline={true} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateName4(newText)}/>
               </View>


             <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._Search.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:16, color: '#fff'}}>提交</Text>
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
},
label:{
  width:60,
  fontSize:12,
  marginLeft:10,
  color:'black',
  textAlign:'center'
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:20,
  borderColor:'#ddd',
  borderRadius: 4,
//  fontSize:14,
//  textAlign:'center'
},
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width/2,
    borderRadius:5,
    borderWidth:2,
    marginLeft:22,
    marginRight:22,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    justifyContent:'center'
  },
  contentContainer: {
     margin:10,
     backgroundColor:"#fff",
   }
});
