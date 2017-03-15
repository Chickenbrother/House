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
import { NaviGoBack } from '../Common';
import fangcyy_contentDetail from './fangcyy_contentDetail';
export default class fangcyy_content extends Component {
    constructor(props){
          super(props);
          this.buttonBackAction=this.buttonBackAction.bind(this);
    }
    //返回
     buttonBackAction(){
         const {navigator} = this.props;
         return NaviGoBack(navigator);
     }
    render(){
        return(
            <View style={styles.container}>
              <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                     <Image
                        style={{width:16,height:20}}
                        source={require('../../imgs/ic_center_back.png')}
                     />
                  </TouchableOpacity>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>房产交易登记预约</Text>
                  </View>
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
        var classes = "http://121.41.33.67:8080/HousingService/api/appointment/address/list";
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
              <TouchableOpacity onPress={() => this.getClassInfo(taget.slddId)}>
      					  <View style={styles.item}>

      					         <Text style={{color:'#1BB7FF', fontSize:14,}}>{taget.sldd}</Text>
                         <Image style={styles.rightIcon} source={{uri: 'right_07'}}/>

    					   </View>
              </TouchableOpacity>
          )
      }
   getClassInfo(id) {
          this.props.navigator.push({
              name: "fangcyy_contentDetail",
              component: fangcyy_contentDetail,
              params:{
                  id:id,
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
  //  flex:1,
    height:36,
    width:totalWidth,
//    padding:1,
  //  marginLeft:1,
    marginTop:3,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    backgroundColor: 'white',
  },

rightIcon: {
  alignItems: 'center',
  justifyContent: 'center',
  width: 15,
  height: 15,
  marginLeft:totalWidth-90,
//  marginRight:4,
  marginTop:3,
      },
});
