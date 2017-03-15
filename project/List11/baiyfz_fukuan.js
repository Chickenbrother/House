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
import Baiyfz_fukuan_content from './baiyfz_fukuan_content';
export default class Baiyfz_fukuan extends Component {
  constructor(props,params) {
      super(props);
      this.state = {
        bh:'',
        qz:'',
        hao:'',
        ren:'',
      }

}
updateName1(newText){
  this.setState({
     bh:newText
  })
}
updateName2(newText){
  this.setState({
     qz:newText
  })
}
updateName3(newText){
  this.setState({
     hao:newText
  })
}
updateName4(newText){
  this.setState({
     ren:newText
  })
}
_Search(){
  var l1 = this.state.bh.length;
  var l2 = this.state.qz.length;
  var l3 = this.state.hao.length;
  var l4 = this.state.ren.length;
  if(l1==0&&(l2==0||l3==0)&&l4==0){
  				Alert.alert("查询时填写\"预受理编号\"\"产权证证号\"与\"产权人姓名\"三项中的两项");
          return;
  			}
  else if(l1!=0&&(l2==0||l3==0)&&l4==0){
  				Alert.alert("查询时填写\"预受理编号\"\"产权证证号\"与\"产权人姓名\"三项中的两项");
          return;
  			}
  else if(l1==0&&(l2==0||l3==0)&&l4!=0){
  				Alert.alert("查询时填写\"预受理编号\"\"产权证证号\"与\"产权人姓名\"三项中的两项");
          return;
  			}
  else if(l1==0&&(l2!=0&&l3!=0)&&l4==0){
  				Alert.alert("查询时填写\"预受理编号\"\"产权证证号\"与\"产权人姓名\"三项中的两项");
          return;
  			}
  else{
  				var searchlb = 1;//查找预受理编号、产权证号和产权人姓名
  				if(l1!=0&&(l2==0||l3==0)&l4!=0){
  					searchlb = 2;//查找预受理编号和产权人姓名
  				}
  				if(l1!=0&&(l2!=0&&l3!=0)&l4==0){
  					searchlb = 3;//查找预受理编号和产权证号
  				}
  				if(l1==0&&(l2!=0&&l3!=0)&l4!=0){
  					searchlb = 4;//查找产权证号和产权人姓名
  				}
          var yslbh = this.state.bh;
  				var cqzh3 = this.state.qz;
  				var cqzh4 = this.state.hao;
  				var cqr  = this.state.ren;
  				var cqzh5 = "杭房权证" + cqzh3 + "字第" + cqzh4 + "号" ;
          this.handleResponse(yslbh,cqr,cqzh5,searchlb);

       }
}

handleResponse(bh,fzr,cq5,sh) {
      this.props.navigator.push({
        name: "Baiyfz_fukuan_content",
        component: Baiyfz_fukuan_content,
        params:{
          bh:bh,
          fzr:fzr,
          cq5:cq5,
          sh:sh
        }
      });
}

  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:40,marginTop:10}}>
                 <Image
                    style={{width:16,height:20}}
                    source={require('../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>白蚁防治</Text>
              </View>
           </View>
           <View style={{marginLeft:10,marginRight:10}}>
               <View style={styles.row}>
                 <Text style={styles.label}>预受理编号</Text>
                 <TextInput style={styles.input1} underlineColorAndroid={'transparent'} 
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName1(newText)}/>
               </View>
             <View style={styles.row}>
                 <Text style={styles.label}>杭 房 权 证</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateName2(newText)}/>
                 <Text>字</Text>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>第</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateName3(newText)}/>
                 <Text>号</Text>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>产   权   人</Text>
                 <TextInput style={styles.input1} underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray' onChangeText = {(newText) =>this.updateName4(newText)}/>
               </View>


             <View style={{marginTop:20, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._Search.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>提交</Text>
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
  marginTop:10,
},
label:{
  width:90,
  fontSize:16,
  //marginLeft:10,
  color:'black',
  textAlign:'center'
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
  //marginRight:1,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:12,
  textAlign:'center'
},
input1:{
  borderWidth:2,
  height:35,
  flex:1,
  marginRight:14,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:12,
  textAlign:'center'
},
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-20,
    borderRadius:5,
    borderWidth:2,
  //  marginLeft:22,
  //  marginRight:12,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    justifyContent:'center'
  },
});
