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
var show,cfmc,type,sfmc,address;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
import { NaviGoBack } from '../../Common';
export default class jindu_content extends Component {
  constructor(props,params) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);
}
componentDidMount() {
    show = this.props.show;
    cfmc = this.props.cfmc;
    type = this.props.type;
    sfmc= this.props.sfmc;
    address= this.props.address;
}


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
                    source={require('../../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>办证结果查询</Text>
              </View>
           </View>


             <View style={styles.row}>
               <Text style={styles.label}>当前进度:</Text>
               <Text style={styles.label}>{this.getTypeNameStr(this.state.show)}</Text>
             </View>

             <View style={styles.row}>
               <Text style={styles.label}>出方名称:</Text>
               <Text style={styles.label}>{this.state.cfmc}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>受方名称:</Text>
               <Text style={styles.label}>{this.state.sfmc}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>交易类型:</Text>
               <Text style={styles.label}>{this.state.type}</Text>

               <View style={styles.row}>
                 <Text style={styles.label}>房屋坐落:</Text>
                 <Text style={styles.label}>{this.state.address}</Text>
               </View>
             </View>

        </View>
    );
  }
  getTypeNameStr(typeId){
      var typeNameStr = "";
      if(typeId==2){
        typeNameStr = "您所查询的业务正在办理中";
      }else if(typeId==3){
        typeNameStr = "您所查询的业务已办结并已领证";
      }else if(typeId==4){
        typeNameStr = "您所查询的业务已办结！可以前来领证！";
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
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:20,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:14,
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
