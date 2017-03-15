'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  ScrollView,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
import Fangcbl_content from './fangcbl_content';
export default class Fangcbl extends Component {
    constructor(props){
          super(props);
    }

    render(){
        return(
            <View style={styles.container}>
              <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                     <Image
                        style={{width:12,height:20}}
                        source={require('../../imgs/ic_center_back.png')}
                     />
                  </TouchableOpacity>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>房产交易办理点</Text>
                  </View>
               </View>
               <ScrollView showsVerticalScrollIndicator={true}
               style={styles.ScrollView}>
                  <List navigator={this.props.navigator} />
               </ScrollView>
            </View>
        )
    }
    back() {
      this.props.navigator.pop();
    }
  }
  // listView
class List extends Component {
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
        var classes = "http://121.41.33.67:8080/HousingService/api/convenient/address/list/1";
            fetch(classes)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
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
              <TouchableOpacity onPress={() => this.getClassInfo(taget.tpmBsdId)}>
      					  <View style={styles.item}>
      					    <View style={styles.width50}>
      					         <Text style={{color:'#1BB7FF', fontSize:14,}}>{taget.bsdMc}</Text>
      						  </View>
                    <View style={styles.nameView}>
                         <Text style={styles.nm}>类型：{this.getTypeNameStr(taget.bsdLx)}</Text>
                         <Text style={styles.nm1}>咨询电话：{taget.zxdh}</Text>
                         <Image style={styles.rightIcon} source={{uri: 'right_07'}}/>
    			          </View>
                    <View style={styles.nameView}>
                         <Text style={styles.nm}>地址：{taget.dz}</Text>
                    </View>
    					   </View>
              </TouchableOpacity>
          )
      }
   getClassInfo(id) {
          this.props.navigator.push({
              name: "Fangcbl_content",
              component: Fangcbl_content,
              params:{
                  id:id,
              }
          });
      }
  getTypeNameStr(typeId){
    	var typeNameStr = "";
    	if(typeId==1){
    		typeNameStr = "产权登记";
    	}else if(typeId==2){
    		typeNameStr = "住房保障";
    	}else if(typeId==3){
    		typeNameStr = "维修中心";
    	}
    	return typeNameStr;
    }

  }

const styles = StyleSheet.create({

ScrollView:{
  marginRight:10,
  marginLeft:10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height:60,
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
  marginLeft:90,
  //marginRight:4,
  marginTop:-1,
      },
});
