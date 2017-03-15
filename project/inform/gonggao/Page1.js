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
import Page1_content from './Page1_content';
export default class Page1 extends Component {
    constructor(props){
          super(props);
    }
    render(){
        return(
            <View style={styles.container}>
               <ScrollView  showsVerticalScrollIndicator={true}
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
      var pageSize=99,pageIndex=1,dataLength=1,columnId=30009;
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
      					  <View style={styles.item}>
      					    <View style={styles.width50}>
      					         <Text style={{color:'#1BB7FF', fontSize:14,}}>{taget.title}</Text>
      						  </View>
                    <View style={styles.nameView}>
                         <Text style={styles.nm}>发布时间：{this.DateGridFormat(taget.fbDate)}</Text>
                         <Text style={styles.nm1}>点击量：{taget.click},{taget.contentId}</Text>
                         <Image style={styles.rightIcon} source={require('../../../imgs/ic_center_right_arrow.png')}/>
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
ScrollView:{
flex:1,
},
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10,
    flexDirection: 'column',
    backgroundColor: 'white',
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
  marginLeft:16,
  marginRight:4,
  marginTop:-6,

      },
});
