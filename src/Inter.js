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
    InteractionManager,
    TouchableOpacity,
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
import Chaxun from './inter/chaxun';
import Zixun from './inter/zixun';
import Toupiao from './inter/toupiao';
export default class Inter extends Component {
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
              component: Chaxun,
              name: 'Chaxun'
            });
          });
        }
        else if(position === 1){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component:Zixun,
              name: 'Zixun'
            });
          });
        }
        else if(position === 2){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component:Toupiao,
              name: 'Toupiao'
            });
          });
        }
    }

    render() {
        let titles = ['我要查询', '我要咨询', '我要投票'];
        let icons = ['check14_11', 'check10_11', 'check11_11'];
        let contents=['办事进度查询','房产业务咨询','链接入口:数字物业投票系统由我方自行......'];
        return (
            <View style = {styles.container}>
                <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
                       <Text style={{ fontSize: 18,alignSelf:'center',color:'white'}}>
                          政民互动
                       </Text>
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
                            <View style={{flex:1,marginTop:0,marginLeft:10}}>
                                <Text tyle={{fontSize:16,color:'black',alignSelf:'flex-start'}}>{title}</Text>
                                <Text style={{color:'#ccc',fontSize:10,}}>{contents[i]}</Text>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Image style={styles.rightIcon} source={{uri: 'right_07'}}/>
                            </View>
                            </TouchableOpacity>
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
        padding:0,
        flexDirection: 'row',
        height: 42,
        marginLeft: 0,
        marginRight: 0,
        marginTop:4,
        marginBottom:4,
        justifyContent: 'space-between',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
 width1:{
        marginLeft:0,
        marginTop:3,
        marginBottom:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',
        height: 42,
        borderRadius: 8,
     },

contentContainer: {
       margin:10,
        backgroundColor:"#FFFFFF",
      },
rightIcon: {
        position: 'absolute',
        right: -4,
        top: -8,
        height: 15,
        width: 15
      },
});
