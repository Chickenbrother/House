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
    ScrollView,
    Navigator,
    Dimensions,
    ToolbarAndroid,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { NaviGoBack } from './Common';
let totalWidth = Dimensions.get('window').width;
export default class Center extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: false
    };
    this.buttonBackAction=this.buttonBackAction.bind(this);
}
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
    render() {
        let titles = ['公示公告', '政务动态', '机构职能','服务热线','应急维修','办证地址','查档地址','保障房','办证预约','自助换房','白蚁防治','我要查询','我要咨询','我要投票','政民互动'];
        let icons = ['check07_11', 'check08_11', 'check12_11', 'check01_07','check02_11','check03_11','check04_11','check05_11','check06_11','check09_11','check13_11','check14_11','check10_11','check11_11','check16_11'];
        let contents=['租赁住房的公告','政务网政务动态','下属机关，各处室下属单位','988765533','各维修网点','办证地址查看','向申请手机发送定制信息','预约申请信息','换房操作','白蚁防止系统入口','办事进度查询','房产业务咨询','数字物业系统','快速服务'];
        return (
            <View style = {styles.container}>

                <View style={{height:40,backgroundColor:'black',flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:10,justifyContent:'center'}}>
                     <Image
                        style={{width:13,height:20}}
                        source={require('../imgs/ic_center_back.png')}
                     />
                  </TouchableOpacity>
                  <View style={{flex:1,justifyContent:'center',}}>
                       <Text style={{ fontSize: 24, textAlign: 'center',flex:1,color:'white'}}>
                           设置感兴趣的栏目
                       </Text>
                  </View>
               </View>

                <ScrollView showsVerticalScrollIndicator={true}
                    contentContainerStyle={styles.contentContainer}>
                {
                    titles.map((title,i) => {
                        return (
                            <View
                                key={title}
                                style={styles.cell}
                            >
                            <View style={styles.width1}>
                                <Image source={{uri: icons[i]}} style={{height: 60, width: 60}}/>
                            </View>
                            <View style={{flex:1,marginTop:10,marginLeft:10}}>
                                <Text tyle={{fontSize:30,alignSelf:'flex-start'}}>{title}</Text>
                                <Text style={{color:'#ccc',fontSize:11,}}>{contents[i]}</Text>
                            </View>
                              <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end',backgroundColor: 'white',}}>
                              <Switch
                                  onValueChange={(value) => this.setState({value: value})}
                                  style={{marginBottom:10,marginTop:10,marginLeft:10}}
                                  value={this.state.value} />
                              </View>
                            </View>
                        )
                    })
                }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
       flex:1,
        backgroundColor:'#fff',
        },
  cell: {
        flexDirection: 'row',
        height: 70,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:2,
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
 width1:{
        marginLeft:0,
        marginTop:10,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#9A32CD',
        height: 70,
     },
contentContainer: {
        margin:10 ,
        backgroundColor:"#FFFFFF",
      },
rightIcon: {
        position: 'absolute',
        right: -12,
        top: -2,
        height: 30,
        width: 30
      },
});
