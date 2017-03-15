'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  WebView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
var jd,st,personID,registlb;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
export default class jindu_content extends Component {
  constructor(props,params) {
      super(props);
}
back() {
    this.props.navigator.pop();
     }
componentDidMount() {
    jd = this.props.jd;
    st = this.props.st;
    personID= this.props.personID;
    registlb= this.props.registlb;
}

  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:40,marginTop:10}}>
                 <Image
                    style={{width:16,height:20}}
                    source={require('../../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>办事进度查询</Text>
              </View>
           </View>


             <View style={styles.row}>
               <Text style={styles.label}>当前进度:</Text>
               <Text style={styles.label}>{this.state.jd}</Text>
             </View>

             <View style={styles.row}>
               <Text style={styles.label}>当前事件状态:</Text>
               <Text style={styles.label}>{this.getTypeNameStr(this.state.st)}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>证件号:</Text>
               <Text style={styles.label}>{this.state.personID}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>登记类别:</Text>
               <Text style={styles.label}>{this.state.registlb}</Text>
             </View>

        </View>
    );
  }
  getTypeNameStr(typeId){
      var typeNameStr = "";
      if(typeId==1){
        typeNameStr = "已办结";
      }else if(typeId==2){
        typeNameStr = "已终止";
      }else if(typeId==3){
        typeNameStr = "未办结";
      }
      return typeNameStr;
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
  marginLeft:10,
    fontSize:12,
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:20,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:12,
  textAlign:'center'
},
  btn:{
    borderColor:'#ddd',
    height:35,
    width:Width-50,
    borderRadius:5,
    borderWidth:2,
    marginLeft:22,
    marginRight:22,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
  }
});
