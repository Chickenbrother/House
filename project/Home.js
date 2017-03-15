/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    Navigator,
    Dimensions,
    ListView,
    StatusBar,
    InteractionManager,
    TouchableOpacity,
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
let partwidth =totalWidth/4-10;
import Page1_content from './inform/gonggao/Page1_content';
import Rexian from './List11/rexian';
import Weixiu from './List11/weixiu';
import Baiyfz from './List11/baiyfz';
import Chaddz from './List11/chaddz';
import Baozfsl from './List11/baozfsl';
import Zihhf from './List11/zihhf';
import Zhengwdt from './inform/zhengwu';
import Zixun from './Inter/zixun';
import Sousuo from './List11/sousuo';
import Gonggao from './inform/gonggao';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.itemActionIndex=this.itemActionIndex.bind(this);
    }
    //判断当前点击了那个按钮
    itemActionIndex(position){
        const {navigator} = this.props;
        if(position === 0){
            InteractionManager.runAfterInteractions(() => {
                                                    navigator.push({
                                                                   component: Rexian,
                                                                   name: 'Rexian'
                                                                   });
                                                    });
        }
        else if(position === 1){
            InteractionManager.runAfterInteractions(() => {
                                                    navigator.push({
                                                                   component:Weixiu,
                                                                   name: 'Weixiu'
                                                                   });
                                                    });
        }
        else if(position === 2){
            InteractionManager.runAfterInteractions(() => {
                                                    navigator.push({
                                                                   component: Baiyfz,
                                                                   name: 'Baiyfz'
                                                                   });
                                                    });
        }
        else if(position === 3){
            InteractionManager.runAfterInteractions(() => {
                                                    navigator.push({
                                                                   component: Chaddz,
                                                                   name: 'Chaddz'
                                                                   });
                                                    });
        }
        else if(position === 4){
            InteractionManager.runAfterInteractions(() => {
                                                    navigator.push({
                                                                   component: Baozfsl,
                                                                   name: 'Baozfsl'
                                                                   });
                                                    });
        }
        else if(position === 5){
            InteractionManager.runAfterInteractions(() => {
                                                    navigator.push({
                                                                   component: Zihhf,
                                                                   name: 'Zihhf'
                                                                   });
                                                    });
        }
        else if(position === 6){
            InteractionManager.runAfterInteractions(() => {
              navigator.push({
                component: Zhengwdt,
                name: 'Zhengwdt'
              });
            });
        }
        else if(position === 7){
             InteractionManager.runAfterInteractions(() => {
                      navigator.push({
                        component: Zixun,
                        name: 'Zixun'
                      });
                  });
        }
        else if(position === 8){
            InteractionManager.runAfterInteractions(() => {
                      navigator.push({
                        component: Sousuo,
                        name: 'Sousuo'
                    });
                });
        }
        else if(position === 9){
             InteractionManager.runAfterInteractions(() => {
                        navigator.push({
                          component: Gonggao,
                          name: 'Gonggao'
                        });
                      });
        }
    }
    render() {

        return (
                <View style={styles.container}>

                <View style={styles.header}>
                <TouchableOpacity
                activeOpacity={0.75}
                style={styles.searchInput}
                onPress={()=>this.itemActionIndex(8)}>
                <Image
                style={styles.scanIcon}
                source={require('../imgs/img_search.png') }
                />
                <Text style={styles.searchPlaceholder}>搜索房产咨询</Text>
                </TouchableOpacity>
                </View>

                <View style={{height:124,marginTop:-10}}>
                <Image style={styles.myBgImage} source={require('../imgs/hang.jpg')}>
                </Image>
                </View>

                <View style={{marginLeft:10,marginTop:10,marginRight:10}}>
                <View style={{flexDirection:'row'}}>

                <TouchableOpacity onPress={()=>this.itemActionIndex(0)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check01_07.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>服务热线</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.itemActionIndex(1)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check02_11.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>应急维修</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.itemActionIndex(2)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check13_11.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>白蚁防治</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.itemActionIndex(3)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check04_11.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>查档地址</Text>
                </View>
                </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity onPress={()=>this.itemActionIndex(4)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check05_11.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>保障房</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.itemActionIndex(5)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check09_11.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>自助换房</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.itemActionIndex(6)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check08_11.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>政务动态</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.itemActionIndex(7)}>
                <View style={{width:partwidth}}>
                <Image source={require('../imgs/check10_11.png')} style={{alignSelf:'center',width:50,height:50}} />
                <Text style={{marginTop:5,textAlign:'center',fontSize:12,color:'#555555'}}>我要咨询</Text>
                </View>
                </TouchableOpacity>
                </View>
                </View>

                <View style={styles.contentContainer}>
                <View style={styles.item}>
                <View style={styles.width30}>
                <Text style={{color:'#fff', fontSize:16,fontWeight:'bold'}}>公告公示</Text>
                </View>
                <TouchableOpacity onPress={()=>this.itemActionIndex(9)}>
                <View numberOfLines={1} style={{marginLeft:totalWidth-136}}>
                <Text style={{color:'black',fontSize:12}}>更多</Text>
                </View>
                </TouchableOpacity>
                </View>

                </View>
                <List1 navigator={this.props.navigator} style={styles.ScrollView}/>
                </View>
                )
    }
}
// listView
class List1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        dataSource: new ListView.DataSource({
                                            rowHasChanged: (row1, row2) => row1 !== row2,
                                            }),
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var pageSize=3,pageIndex=1,dataLength=1,columnId=30009;
        var classes = "http://121.41.33.67:8080/HousingService/api/news/list";
        fetch(classes,{
              method:'POST',
              headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                                  pageSize:pageSize,
                                  pageIndex:pageIndex,
                                  columnId:columnId}),
              })
        .then((response) => response.json())
        .then((responseData) => {

              this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(responseData.rows)
                            })
              })
    }

    render() {
        return (
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderClass.bind(this)}
                />
                )
    }

    renderClass(taget) {
        return (
                <TouchableOpacity onPress={() => this.getClassInfo(taget.contentId)}>
                <View style={styles.item1}>
                <View style={styles.width50}>
                <Text style={{color:'#1BB7FF', fontSize:12,}}>{taget.title}</Text>
                </View>
                <View style={styles.nameView}>
                <Text style={styles.nm}>发布时间：{this.DateGridFormat(taget.fbDate)}</Text>
                <Text style={styles.nm1}>点击量：{taget.click}</Text>
                <Image style={styles.rightIcon} source={require('../imgs/ic_center_right_arrow.png')} />
                </View>
                </View>
                </TouchableOpacity>
                )
    }
    getClassInfo(id) {
        this.props.navigator.push({
            name: "Page1_content",
            component: Page1_content,
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
                                 flex: 1,
                                 marginLeft:10,
                                 marginRight:10,

                                 },
                                 header: {
                                 flexDirection: 'row',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 backgroundColor: '#fff',
                                 borderBottomColor: '#ccc',
                                 borderBottomWidth: 0.5,
                                  },
                                 searchInput: {
                                 flexDirection: 'row',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 height: 52,
                                 width: totalWidth-4,
                                 marginTop:0,
                                 padding: 0,
                                 backgroundColor: 'rgb(245, 246, 247)',
                                 borderRadius: 2,
                                 },
                                 scanIcon: {
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: 15,
                                 height: 15,
                                 },
                                 searchPlaceholder: {
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 marginLeft: 10,
                                 textAlign: 'center',
                                 fontSize: 12,
                                 color: 'gray'
                                 },
                                 myBgImage: {
                                 alignSelf:'center',
                                 width:totalWidth,
                                 height:124,
                                 margin:0,
                                 padding:0
                                 },

                                 handleView: {
                                 flexDirection: 'row',
                                 },
                                 contentContainer: {
                                 marginTop:0,
                                 //  backgroundColor:"#fff",
                                 },
                                 item:{
                                 marginTop:2,
                                 height:36,
                                 padding:0,
                                 borderBottomWidth: 4,
                                 borderBottomColor: '#ddd',
                                 flexDirection:'row',
                                 alignItems:'center',
                                 },
                                 width30:{
                                 marginTop:2,
                                 width:80,
                                 height:28,
                                 borderRadius:4,
                                 marginLeft:0,
                                 alignItems:'center',
                                 justifyContent:'center',
                                 backgroundColor:'#05C147',
                                 marginRight:10,
                                 },
                                 cell: {
                                 flexDirection: 'row',
                                 height: 40,
                                 marginLeft: 10,
                                 marginRight: 10,
                                 justifyContent: 'space-between',
                                 borderBottomColor: '#ccc',
                                 borderBottomWidth: 0.5,
                                 alignItems: 'center'
                                 },
                                 ScrollView:{
                                 flex:1,
                                 marginBottom:30,
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
                                 marginLeft:0,
                                 },
                                 item1:{
                                 flex:1,
                                 height:40,
                                 width:totalWidth,
                                 padding:0,
                                 borderBottomWidth: 2,
                                 borderBottomColor: '#ddd',
                                 flexDirection:'column',
                                 alignItems:'flex-start',
                                 justifyContent:'flex-start',
                                 backgroundColor:'#fff'
                                 },
                                 width50:{
                                 marginLeft:1,
                                 marginRight:40,
                                 alignItems:'flex-start',
                                 justifyContent:'flex-start',
                                 //  backgroundColor: '#fff',
                                 },
                                 rightIcon: {
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: 15,
                                 height: 15,
                                 marginLeft:56,
                                 //  marginRight:4,
                                 marginTop:-6,
                                 },
                                 });
