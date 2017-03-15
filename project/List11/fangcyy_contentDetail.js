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
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
import fangcyyChart from './fangcyyChart';
var id;
export default class fangcyy_contentDetail extends Component {
    constructor(props,params){
          super(props);
          id = this.props.id;
     }
   back() {
         this.props.navigator.pop();
       }

    render(){
        return(
            <View style={styles.container}>
              <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:40,marginTop:10}}>
                     <Image
                        style={{width:16,height:20}}
                        source={require('../../imgs/ic_center_back.png')}
                     />
                  </TouchableOpacity>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>房产交易登记预约</Text>
                  </View>
               </View>
               <View style={{height:26,backgroundColor:'#E7E6E6',flexDirection:'row',marginLeft:10,marginRight:10,}}>
                 <Text style={{fontSize:14,color:'black', alignItems:'flex-start',justifyContent:'flex-start',marginLeft:20}}>日期</Text>
                 <Text style={{fontSize:14,color:'black',  alignItems:'flex-start',justifyContent:'flex-start',marginLeft:100}}>剩余</Text>
               </View>

               <ScrollView showsVerticalScrollIndicator={true}
               style={styles.ScrollView}>
                  <List navigator={this.props.navigator} />
               </ScrollView>
            </View>
        )
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
        var classes = "http://121.41.33.67:8080/HousingService/api/appointment/date/number/list/"+ id;
            fetch(classes,{
                method:'GET',
                headers:{
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
              })
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
                style={styles.ListView}
                />
        )
    }

    renderClass(taget) {
          return (
              <TouchableOpacity onPress={() => this.getClassInfo(taget.cjsj,taget.slddId,taget.slck)}>
      					  <View style={styles.item}>
                         <Text style={{color:'#1BB7FF', fontSize:14,}}>{taget.cjsj}</Text>
      					         <Text style={{color:'#1BB7FF', fontSize:14,marginLeft:80}}>{taget.yysy}</Text>
                         <Image style={styles.rightIcon} source={require('../../imgs/ic_center_right_arrow.png')} />

    					   </View>
              </TouchableOpacity>
          )
      }
   getClassInfo(date,id,sk) {
          this.props.navigator.push({
            name: "fangcyyChart",
            component: fangcyyChart,
            params:{
                date:date,
                id:id,
                sk:sk,
            }
          });
      }
  }

const styles = StyleSheet.create({
ScrollView:{
  marginLeft:10,
  marginRight:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },

  item:{
    flex:1,
    height:30,
    width:totalWidth,
    //padding:1,
    marginTop:3,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    flexDirection:'row',
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
  marginLeft:112,
  //marginRight:4,
  marginTop:3,
      },
});
