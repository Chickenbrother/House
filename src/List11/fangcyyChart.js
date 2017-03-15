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
  ListView,
  Picker,
  Alert,
  TouchableOpacity,
  TextInput,
  InteractionManager,
  AsyncStorage
} from 'react-native';
var date,id,sk;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;
import Ser from "../Ser";

export default class fangcyyChart extends Component {
  constructor(props) {
      super(props);
      date = this.props.date;
      id = this.props.id;
      sk = this.props.sk;
      this.itemActionIndex=this.itemActionIndex.bind(this);
      this.buttonBackAction=this.buttonBackAction.bind(this);
      this.state = {
        dataSource: [] ,
        time:[],
        nam:'',
        card:'',
        tel:'',
        usr:'',
        taoshu:'',
        banlyw:'',
        yuysj:'',
    }
}
//返回
 buttonBackAction(){
     const {navigator} = this.props;
     return NaviGoBack(navigator);
 }

updateName(newText){
  this.setState({
     nam:newText
  })
}
updateCard(newText){
  this.setState({
     card:newText
  })
}
updateTel(newText){
  this.setState({
     tel:newText
  })
}
componentDidMount() {
  this.fetchData1();
  this.fetchData2();
}
fetchData1() {
        fetch("http://121.41.33.67:8080/HousingService/api/appointment/bussinessType/list",{
            method:'GET',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
        .then((response) => response.json())
        .then((responseData) => {
          //console.log(responseData.length);
            this.setState({ dataSource:  responseData});
              //for(var i=0;i<responseData.length;i++){
              //  dataSource.push({
              //    Id:i,
              //    link:responseData[i].link,
              //    ywlb:responseData[i].ywlb,
              //    ywlbId:responseData[i].ywlbId,
              //  })
              //}
        });

}
fetchData2() {
        fetch("http://121.41.33.67:8080/HousingService/api/appointment/time/list/" + id,{
            method:'GET',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
        .then((response) => response.json())
        .then((responseData) => {

            this.setState({ time:  responseData});

        });

}
/**
renderItems(data){
      		 data.map(function(items,i){
      			return (
      				<View key={i}>
                <Picker
                  mode={'dropdown'}
                  style={styles.input}
                  selectedValue={this.state.banlyw}
                  onValueChange={(value) => this.setState({banlyw: value})}>
                    <Picker.Item label={items.text} value={items.url} />
                </Picker>
      				</View>
      			)
      		});
    }
    **/
_tijiao(){

var name = this.state.nam;
var cId = this.state.card;
var mob = this.state.tel;


AsyncStorage.getItem('userId').then(
  (result)=>{
    if(result===null){
      console.log(error);
      return ;
    }
    else {
      this.setState({
        usr: result });
        return  ;
      }
  });
var userId = this.state.usr;
console.log(userId);
var business_td = this.state.banlyw;
var fangwuNumber = this.state.taoshu;

var chbId = this.state.yuysj;
var sfdhyy = "0";
var contents={"name":name,"cId":cId,"mob":mob,"ywlb":business_td,"chbId":chbId,
  "yyrq":date,"userId":userId,"sfdhyy":sfdhyy,"slck":sk,"slsj":sk};
  if(!name || !cId || !mob || !ywlb || !chbId || !yyrq || !userId || !sfdhyy || !slck || !slsj){
            Alert.alert('提示', '请填写信息');
            return;
            }
    else {
      fetch("http://121.41.33.67:8080/HousingService/api/appointment/insert/info",{
              method:'POSt',
              headers:{
               'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(contents),
            })
          .then((response) => response.json())
          .then((Datajson) =>{
                        if(Datajson === 1){
                            Alert.alert("预约成功");
                            //  this.props.navigator.push({
                            //    component: Ser,
                            //    name: 'Ser'
                            //  });
                            } else{
                              Alert.alert("预约失败");
                            }
                     })
          .catch((error) => {
            Alert.alert(error);
              });
    }


  /**

  {
      便利，可以参考fetchjson中的life和user中的list
    data.map(function(items,i){
             return (
               <Picker
                   key={i}
                   mode={'dropdown'}
                   style={styles.input}
                   selectedValue={this.state.banlyw}
                   onValueChange={(value) => this.setState({banlyw: value})}
               >
               <Picker.Item label="items.ywlb" value="items.ywlbId" />
               </Picker>
             )
           })
      }
  var business_td = $("#business_td").val();
  		var fangwuNumber = $("#fangwuNumber").val();
  		var chbId =  $("#appoint_Time").val();
  		var slsj = $("#appoint_Time").find("option:selected").text();
  		var yyrq = registrationAppoint_cjsj;
  		var slck = registrationAppoint_slck;
  		var userId ="";
  		userId = getLocalStorageObj().getItemInLS("loginuserid");
  		var sfdhyy = "0";
	var classes = "http://121.41.33.67:8080/HousingService/api/appointment/insert/info";
  var data={"name":name,"cId":cId,"mob":mob,"ywlb":business_td(),"chbId":chbId(),
		"yyrq":date,"userId":userId,"sfdhyy":sfdhyy,"slck":sk,"slsj":sk};
  var outD={"emailsubject":emailsubject,"operationclass":operationclass,"sendman":sendman,"replyphone":phone,
		          "replyfax":replyfax,"replycode":replycode,"replyaddress":replyaddress,"emailtext":emailtext};
    if(!vCode || emailsubject || operationclass || sendman || phone || replyfaxt || replycode || replyaddress || emailtext){
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
      **/
}
  render() {
  //var data = this.state.dataSource;
  //       console.log(data);
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:10,justifyContent:'center',width:24,height:36}}>
                 <Image
                    style={{width:16,height:20}}
                    source={require('../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>房产登记预约</Text>

              </View>



           </View>
           <ScrollView showsVerticalScrollIndicator={true}
                  contentContainerStyle={styles.contentContainer}>

               <View style={styles.row}>
                 <Text style={styles.label}>姓名</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                  onChangeText = {(newText) =>this.updateName(newText)}/>
               </View>

               <View style={styles.row}>
                 <Text style={styles.label}>身份证号</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateCard(newText)}/>
               </View>

               <View style={styles.row}>
                 <Text style={styles.label}>手机号码</Text>
                 <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                 placeholder="请输入" placeholderTextColor='gray'
                 onChangeText = {(newText) =>this.updateTel(newText)}/>
               </View>


            <Text style={{width:Width,backgroundColor:'#E7E6E6',marginTop:10,fontSize:14,alignItems:'flex-start',justifyContent:'flex-start'}}>平海大厦({date})</Text>
               <View style={styles.row}>
                 <Text style={styles.label}>办理业务</Text>
                 <Picker
                      style={styles.input1}
                      mode={'dropdown'}
                      selectedValue={this.state.banlyw}
                      onValueChange={value => this.setState({banlyw: value})}>
                        {this.state.dataSource.map((item,i) =>
                         <Picker.Item style={{fontSize:12}} label={item.ywlb} value={item.ywlbId} key={i}/> )}
                    </Picker>


               </View>

                 <View style={styles.row}>
                   <Text style={styles.label}>房屋套数</Text>
                   <Picker
                      mode={'dropdown'}
                      style={styles.input1}
                      selectedValue={this.state.taoshu}
                      onValueChange={(value) => this.setState({taoshu: value})}>
                      <Picker.Item label="1套" value="1" style={{fontSize:12}}/>
                      <Picker.Item label="2套" value="2" style={{fontSize:12}}/>
                      <Picker.Item label="3套" value="3" style={{fontSize:12}}/>
                    </Picker>
                 </View>

                 <View style={styles.row}>
                   <Text style={styles.label}>预约时间</Text>
                   <Picker
                        style={styles.input1}
                        mode={'dropdown'}
                        selectedValue={this.state.yuysj}
                        onValueChange={value => this.setState({yuysj: value})}>
                          {this.state.time.map((item,i) =>
                           <Picker.Item style={{fontSize:16}} label={item.sjd + item.slsj} value={item.chbId} key={i}/> )}
                      </Picker>
                 </View>

             <View style={{marginTop:10, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={this._tijiao.bind(this)}>
                  <View style={styles.btn}>
                    <Text style={{fontSize:20, color: '#fff'}}>提交</Text>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:10, marginBottom:30, alignItems:'center', justifyContent:'center'}}>
               <TouchableOpacity onPress={()=>this.itemActionIndex()}>
                 <View style={styles.btn}>
                   <Text style={{fontSize:20, color: '#fff'}}>退出</Text>
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
  //退出机制有问题
  //退出机制有问题
  //退出机制有问题
  itemActionIndex(){
    //  AsyncStorage.setItem('userId',"", (error) => {console.log(error);});
      AsyncStorage.clear();
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
                navigator.push({
                  component: Ser,
                  name: 'Ser'
                });
              });
        }
}

const styles = StyleSheet.create({

  row:{
  flexDirection:'row',
  alignItems:'center',
  marginBottom:1,
  marginTop:10,
},
label:{
  width:70,
  fontSize:16,
marginTop:10,
  color:'black',
},
input:{
  borderWidth:2,
  height:35,
  flex:1,
//  marginRight:20,
  borderColor:'#ddd',
  borderRadius: 4,
  fontSize:12,
//  fontSize:14,
//  textAlign:'center'
},
input1:{
  borderWidth:2,
  height:35,
  flex:1,
  //marginRight:20,
  borderColor:'#ddd',
  borderRadius: 4,

},

  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-18,
    borderRadius:5,
    borderWidth:2,
    marginLeft:0,
  //  marginRight:10,
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
