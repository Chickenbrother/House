/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  InteractionManager,
  ListView,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import Fangcbl from './List11/fangcbl';
import Chaddz from './List11/chaddz';
import Baozfsl from './List11/baozfsl';
import Fangcyy from './List11/fangcyy';
import fangcyy_content from './List11/fangcyy_content';
import Zihhf from './List11/zihhf';
import Baiyfz from './List11/baiyfz';
import Lten2 from './List11/lten2';
import Lten3 from './List11/lten3';

export default class Ser extends Component {
  constructor(props) {
    super(props);
    this.itemActionIndex=this.itemActionIndex.bind(this);
    this.state = {
      usr:'',
  }
}

componentDidMount() {
  var that = this;
  AsyncStorage.getItem('userId').then(
    (result)=>{
      if(result===null){
        return ;
      }
      else {
         that.setState({
            usr: result
              });
         return  ;
        }
    });
    var userId = that.state.usr;
    console.log(userId);
}
  //判断当前点击了那个按钮
  itemActionIndex(position){
      const {navigator} = this.props;
      if(position === 0){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component: Fangcbl,
            name: 'Fangcbl'
          });
        });
      }
      else if(position === 1){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Chaddz,
            name: 'Chaddz'
          });
        });
      }
    else if(position === 2){
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component:Baozfsl,
            name: 'Baozfsl'
          });
        });
      }
    else if(position === 3){

              InteractionManager.runAfterInteractions(() => {

                      navigator.push({
                        component:Fangcyy,
                        name: 'Fangcyy'
                      });
                    })
                       /**  var userId = this.state.usr;
                         if(userId === ''){
                else {
                      navigator.push({
                          component:fangcyy_content,
                          name: 'fangcyy_content'
                        });
                     }
                  });**/
            }
    else if(position === 4){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component:Zihhf,
              name: 'Zihhf'
            });
          });
        }
        else if(position === 5){
            InteractionManager.runAfterInteractions(() => {
              navigator.push({
                component:Baiyfz,
                name: 'Baiyfz'
              });
            });
          }
  }

  render() {
    let titles = ['房产交易办理点','查档地址', '保障房受理', '房产交易办理预约', '自助换房', '白蚁防治'];
    let icons = ['check03_11', 'check04_11','check05_11','check06_11','check09_11','check13_11'];
    let contents=['首页“快速服务通道”中办证点','快速服务通道中房产档案查档点','快速服务通道中保障房受理点','房产交易网上预约系统','公共租赁房自助换房大厅房源展示','白蚁防治网上申请'];
return (
      <View style={{backgroundColor:'#fff',flex:1}}>

        <View style={{height:30,backgroundColor:'#08BBF9',flexDirection:'row'}}>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>便民服务</Text>
           </View>
        </View>

       <ScrollView showsVerticalScrollIndicator={true}
           contentContainerStyle={styles.contentContainer}>
       {
           titles.map((title,i) => {
               return (
                   <TouchableOpacity
                       key={title}
                       style={styles.cell}
                   onPress={()=>this.itemActionIndex(i)}>
                   <View style={styles.width1}>
                       <Image source={{uri: icons[i]}} style={{height: 36, width: 36}}/>
                   </View>
                   <View style={{flex:1,marginTop:2,marginLeft:10}}>
                       <Text tyle={{fontSize:14,alignSelf:'flex-start'}}>{title}</Text>
                       <Text style={{color:'#ccc',fontSize:8,}}>{contents[i]}</Text>
                   </View>
                   <View style={{marginLeft:10,marginTop:10,marginBottom:10}}>
                       <Image style={styles.rightIcon} source={{uri: 'right_07'}}/>
                   </View>
                   </TouchableOpacity>
               )
           })
       }
       </ScrollView>
    </View >
    );
  }
}
const styles = StyleSheet.create({
contentContainer: {
       margin:6,
       backgroundColor:"#FFFFFF",
      },
cell: {
      padding:0,
      flexDirection: 'row',
      height: 42,
      marginLeft: 0,
      marginRight: 10,
      marginTop:4,
      marginBottom:4,
      justifyContent: 'space-between',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      alignItems: 'center',
      },
width1:{
      marginLeft:-1,
      marginTop:3,
      marginBottom:5,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#FFF',
      height: 42,
      borderRadius: 8,
      },
rightIcon: {
      position: 'absolute',
      right: -4,
      top: -8,
      height: 15,
      width: 15
      },
  });
