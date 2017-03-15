'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Dimensions,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';

let totalWidth = Dimensions.get('window').width;
import Sousuo_content from './sousuo_content';
export default class Sousuo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tit:'',
      dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      show:false,
    }
}
updateName(newText){
  this.setState({
     tit:newText
  })
}
  back() {
         this.props.navigator.pop();
       }
_sous(){
  var title = this.state.tit;
  console.log(title);
  this.setState({
    show: false
  });
  var pageIndex=1,dataLength=1,pageSize = 99;
    var classes = "http://121.41.33.67:8080/HousingService/api/seach/news/list";
    var outData={"title":title,"pageIndex":pageIndex,"pageSize":pageSize};
        fetch(classes,{
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({outData}),
        })
        .then((response) => response.json())
        .then((responseData) => {
          if(responseData.rows != null){
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.rows),
                show: true
            })
        } else {
          Alert.alert('提示','没有数据');
          }
      })
}
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={styles.row}>
                <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:10,justifyContent:'center',width:24,height:30}}>
                   <Image
                      style={{width:16,height:20}}
                      source={require('../../imgs/ic_center_back.png')}
                   />
                </TouchableOpacity>

                <View style={{flex:1,marginLeft:10,alignItems:'center',justifyContent:'center',flexDirection:'row' }}>
                    <TextInput style={styles.input} underlineColorAndroid={'transparent'}
                      placeholder="请输入关键字" placeholderTextColor='gray'
                      onChangeText = {(newText) =>this.updateName(newText)} />
                      <TouchableOpacity
                          activeOpacity={0.75}
                          style={styles.searchInput}
                          onPress={this._sous.bind(this)}>
                            <Image
                                style={styles.scanIcon}
                                source={require('../../imgs/img_search.png') }
                                />
                      </TouchableOpacity>
                </View>

            </View>

              {
                  this.state.show ?
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this._renderClass}
                      />
                    : null
                }

      </View>
    )
  }

_renderClass(taget) {
            return (
                <TouchableOpacity onPress={() => this.getClassInfo(taget.contentId)}>
        					  <View style={styles.item}>
        					    <View style={styles.width50}>
        					         <Text style={{color:'#1BB7FF', fontSize:12,}}>{taget.title}</Text>
        						  </View>
                      <View style={styles.nameView}>
                           <Text style={styles.nm}>发布时间：{this.DateGridFormat(taget.fbDate)}</Text>
                           <Text style={styles.nm1}>点击量：{taget.click}</Text>
                           <Image style={styles.rightIcon} source={{uri: 'right_07'}}/>
      			          </View>
      					   </View>
                </TouchableOpacity>
            )
        }
getClassInfo(id) {
            this.props.navigator.push({
                name: "Sousuo_content",
                component: Sousuo_content,
                params:{
                    id:id,
                }
            });
        }
DateGridFormat(value){
        	if(value=='' || value==null)return '';
            var date = new Date(value);
            var year = date.getFullYear();
            var _month=date.getMonth()+1;
            var month = _month<10?('0'+_month):_month;
            var time = date.getDate()<10?('0'+date.getDate()):date.getDate();
            var hours = date.getHours()<10?('0'+date.getHours()):date.getHours();
            var minutes=date.getMinutes()<10?('0'+date.getMinutes()):date.getMinutes();
            var seconds= date.getSeconds()<10?('0'+date.getSeconds()):date.getSeconds();
            return year+'-'+month+'-'+time+' '+hours+':'+minutes+':'+seconds;
  }

}


const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FAEBD7',
  },
webview_style:{
    flex:1,
  },
row:{
  flexDirection:'row',
  alignItems:'center',
  marginBottom:1,
  marginTop:24,
  marginLeft:2,
  backgroundColor:'#08BBF9',
},
input:{
  borderWidth:2,
  height:36,
  flex:1,
  marginRight:20,
  borderColor:'#ddd',
  borderRadius: 4,
  backgroundColor:'#fff',
  fontSize:12,
  textAlign:'center'
},
label:{
  width:40,
  fontSize:20,
  marginLeft:-4,
  color: 'white',
  height:36,
  justifyContent:'center',
  alignItems:'center',
},
scanIcon: {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: 15,
  height: 15,
  marginLeft:-16,
  },
searchInput: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 36,
  width: 60,
  marginLeft: -20,
  padding: 10,
  backgroundColor: '#08BBF9',
  borderRadius: 2,
  },
  ScrollView:{
    margin:6
    },
    nm: {
        color: "#333",
        fontSize: 10,
      },
    nm1: {
        color: "#333",
        fontSize: 10,
        marginLeft:30,
      },
    nameView: {
        paddingTop: 2,
        flexDirection: 'row',
        alignItems: "flex-start",
        marginLeft:1,
      },
      item:{
        flex:1,
        height:42,
        width:totalWidth,
        padding:1,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
      },
    width50:{
      marginLeft:1,
      marginRight:40,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      backgroundColor: 'white',
    },
    rightIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 15,
      height: 15,
      marginLeft:50,
      marginRight:4,
      marginTop:-6,
          },
});
