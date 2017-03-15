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
  DatePickerAndroid,
  TextInput
} from 'react-native';

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
var bid,slbh,sqrxm4,sqrxm5,sqrxm6,sqrxm8,sftl,ffsj,kysj,kysj1,qtsm,fwnm,szcq,xqname,sqrxm7,fwjg,syqzid,sqrxm3,cqzmz,cqzid,crlx;
import Baiyfz_yewu_content1_Page from './baiyfz_yewu_content1_Page';
export default class Baiyfz_yewu_content1_Page3 extends Component {
  constructor(props,params) {
      super(props);
      bid:this.props.bid;
      slbh:this.props.slbh;
      sqrxm4:this.props.sqrxm4;
      sqrxm5:this.props.sqrxm5;
      sqrxm6:this.props.sqrxm6;
      sqrxm8:this.props.sqrxm8;
      sftl:this.props.sftl;
      ffsj:this.props.ffsj;
      kysj:this.props.fkysj;
      kysj1:this.props.kysj1;
      qtsm:this.props.qtsm;
      fwnm:this.props.fwnm;
      szcq:this.props.szcq;
      xqname:this.props.xqname;
      sqrxm7:this.props.sqrxm7;
      fwjg:this.props.fwjg;
      syqzid:this.props.syqzid;
      sqrxm3:this.props.sqrxm3;
      cqzmz:this.props.cqzmz;
      cqzid:this.props.cqzid;
      crlx:this.props.crlx;
      this.state = {
    //  area1: '',
  //    person:'',
  //    tel:'',
    //  phone1:'',
  //    place1:'',
  //    weihai:'',
  //    shuoming:'',
      operation_type:'',
//      ffsj1:'',
  //    tuoluo:'',
      minText: '请选择第一个日期',
      nextmin: '请选择第二个日期',
      presetDate: new Date(2017, 0, 1),
    }
}

updateName1(newText){
  this.setState({
     area1:newText
  })
}
updateName2(newText){
  this.setState({
     person:newText
  })
}
updateName3(newText){
  this.setState({
     tel:newText
  })
}
updateName4(newText){
  this.setState({
     phone1:newText
  })
}
updateName5(newText){
  this.setState({
     place1:newText
  })
}
updateName6(newText){
  this.setState({
    weihai:newText
  })
}
updateName7(newText){
  this.setState({
     shuoming:newText
  })
}
_tijiao(){
  var terpageNo = 3;
//  var lxr = this.state.person;
  var cqxz= this.state.operation_type;
//  var ffsj= this.state.ffsj1;
//  var bytc= this.state.tuoluo;
//  var area =this.state.area1;
//  var lxdh = this.state.tel;
//  var lxsj = this.state.phone1;
//  var address = this.state.place1;
//  var whqk= this.state.weihai;
//  var bz=  this.state.shuoming;

  var czlx = "更新";
  var statu= "0";
	var classes = "http://121.41.33.67:8080/HousingService/api/byfz/check/info";
  var outData ={"ywlb":terpageNo,"lxr":sqrxm4,"name":cqzmz,"address":sqrxm7,"szcq":szcq,"xqname":xqname,
 							"lxdh":sqrxm5,"lxsj":sqrxm6,"syqzid":syqzid,"cqzh":cqzid,"fwaddress":sqrxm7,"area":sqrxm3,"fwjg":fwjg,
              "cqxz":cqxz,
 							"whqk":sqrxm8,"bz":qtsm,"ffsj":ffsj,"bytc":sftl,
              "kysj":kysj,"kysj1":kysj1,"bid":bid,"statu":statu,"slbh":slbh,"czlx":czlx};
          if(!cqxz){
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
                    body:JSON.stringify(outData),
                  })
                .then((response) => response.json())
                .then((Data) =>{
                        if(Data.result ==="1" ){
                          Alert.alert('提示','登记成功,请下一步');
                          var uploadno=result.slbh;
                          this.handleResponse(responseData.uploadno);
                        } else {
                            Alert.alert('提示','登记失败,请重新填写');
                        }
                    })
                .catch((error) => {
                  Alert.alert('提示','登记失败!');
                    });
          }
  }
handleResponse(id) {
      this.props.navigator.push({
        name: "Baiyfz_yewu_content1_Page",
        component: Baiyfz_yewu_content1_Page,
        params:{
          id:id,
        }
      });
}
//进行创建时间日期选择器
async showPicker(stateKey, options) {
  try {
    var newState = {};
    const {action, year, month, day} = await DatePickerAndroid.open(options);
    if (action === DatePickerAndroid.dismissedAction) {
      newState[stateKey + 'Text'] = 'dismissed';
    } else {
      var date = new Date(year, month, day);
      newState[stateKey + 'Text'] = date.toLocaleDateString();
      newState[stateKey + 'Date'] = date;
    }
    this.setState(newState);
  } catch ({code, message}) {
    console.warn(`Error in example '${stateKey}': `, message);
  }
}


 /**
 <DatePicker text={this.state.minText}
 onPress={this.showPicker.bind(this, 'min', {date: this.state.minDate,minDate:new Date()})}
 />
<DatePicker text={this.state.nextmin}
 onPress={this.showPickern.bind(this, 'nextmin', {date: this.state.minDate,minDate:new Date()})}
 />

 //进行创建时间日期选择器
 async showPicker(stateKey, options) {
   try {
     var newState = {};
     const {action, year, month, day} = await DatePickerAndroid.open(options);
     if (action === DatePickerAndroid.dismissedAction) {
       newState[stateKey + 'Text'] = 'dismissed';
     } else {
       var date = new Date(year, month, day);
       newState[stateKey + 'Text'] = date.toLocaleDateString();
       newState[stateKey + 'Date'] = date;
     }
     this.setState(newState);
   } catch ({code, message}) {
     console.warn(`Error in example '${stateKey}': `, message);
   }
 }

 //进行创建时间日期选择器
 async showPickern(Key, result) {
   try {
     var newDate = {};
     const {action, year, month, day} = await DatePickerAndroid.open(result);
     if (action === DatePickerAndroid.dismissedAction) {
       newDate[Key + 'Text'] = 'dismissed';
     } else {
       var date = new Date(year, month, day);
       newDate[Key + 'Text'] = date.toLocaleDateString();
       newDate[Key + 'Date'] = date;
     }
     this.setState(newDate);
   } catch ({code, message}) {
     console.warn(Error);
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
} **/
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
           <ScrollView showsVerticalScrollIndicator={true}
                  contentContainerStyle={styles.contentContainer}>
               <View style={styles.row}>
                 <Text style={styles.label}>产权性质</Text>
                 <Picker
                    mode={'dropdown'}
                    style={styles.input}
                    selectedValue={this.state.operation_type}
                    onValueChange={(value) => this.setState({operation_type: value})}>
                    <Picker.Item label="产权性质" value="" />
                    <Picker.Item label="住宅" value="10" />
                    <Picker.Item label="非住宅" value="12" />
                  </Picker>
               </View>

               <View style={styles.row}>
                 <Text style={styles.label}>建筑面积</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName1(newText)}/>
                 <Text>㎡</Text>
               </View>

               <View style={styles.row}>
                 <Text style={styles.label}>联系人</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName2(newText)}/>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>联系电话</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName3(newText)}/>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>联系手机</Text>
                 <TextInput style={styles.input} multiline={true} numberOfLines={2}
                 underlineColorAndroid={'transparent'} placeholder="请输入"
                 placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName4(newText)}/>
               </View>
               <View style={styles.row}>
                 <Text style={styles.label}>地址</Text>
                 <TextInput style={styles.input} multiline={true} numberOfLines={2}
                 underlineColorAndroid={'transparent'} placeholder="内容需和产权证一致"
                 placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateName5(newText)}/>
               </View>

            <Text style={{width:Width,backgroundColor:'#E7E6E6',fontSize:14,alignItems:'flex-start',justifyContent:'flex-start'}}>详细信息</Text>
                 <View style={styles.row}>
                   <Text style={styles.label}>危害部位</Text>
                   <TextInput style={styles.input} multiline={true} numberOfLines={2}
                   underlineColorAndroid={'transparent'} placeholder="请输入"
                   placeholderTextColor='gray'
                   onChangeText = {(newText) =>this.updateName6(newText)} />
                 </View>
                 <View style={styles.row}>
                   <Text style={styles.label}>分飞时间</Text>
                   <Picker
                      mode={'dropdown'}
                      style={styles.input}
                      selectedValue={this.state.ffsj1}
                      onValueChange={(value) => this.setState({ffsj1: value})}>
                      <Picker.Item label="上午" value="1" />
                      <Picker.Item label="中午" value="2" />
                      <Picker.Item label="下午" value="3" />
                      <Picker.Item label="傍晚" value="4" />
                      <Picker.Item label="晚上" value="5" />
                    </Picker>
                 </View>
                 <View style={styles.row}>
                   <Text style={styles.label}>翅膀脱落</Text>
                   <Picker
                      mode={'dropdown'}
                      style={styles.input}
                      selectedValue={this.state.tuoluo}
                      onValueChange={(value) => this.setState({tuoluo: value})}>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="是" value="1" />
                      <Picker.Item label="否" value="2" />
                    </Picker>
                 </View>
                 <View style={styles.row}>
                   <Text style={styles.label}>第一个家中有人时间</Text>
                   <DatePicker text={this.state.minText}
                   onPress={this.showPicker.bind(this, 'min', {date: this.state.minDate,minDate:new Date()})}
                   />
                  </View>

                 <View style={styles.row}>
                   <Text style={styles.label}>其他说明</Text>
                   <TextInput style={styles.input} multiline={true} numberOfLines={2}
                   underlineColorAndroid={'transparent'} placeholder="请输入"
                   placeholderTextColor='gray'
                   onChangeText = {(newText) =>this.updateName7(newText)} />
                 </View>

             <View style={{marginTop:10, marginBottom:30,
               alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._tijiao.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>下一步</Text>
                  </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }
}
//简单封装一个组件
class DatePicker extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
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
  marginTop:10,
},
label:{
  width:60,
  fontSize:12,
  marginLeft:10,
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
    width:Width-50,
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
   },
  button: {

     backgroundColor: 'white',
     padding: 15,
     borderBottomWidth: StyleSheet.hairlineWidth,
     borderBottomColor: '#cdcdcd',
   }
});
