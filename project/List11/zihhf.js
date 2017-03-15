'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  InteractionManager,
  TouchableOpacity,
  Navigator,
  ScrollView,
  Dimensions,
  ListView,
} from 'react-native';
import Zihhf_content from './zihhf_content';
let Width = Dimensions.get('window').width;

let Height = Dimensions.get('window').height;
export default class Zihhf extends Component {
  constructor(props) {
    super(props);   
}
back() {
         this.props.navigator.pop();
       }
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:42,backgroundColor:'#08BBF9',flexDirection:'row'}}>
             <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:40,marginTop:10}}>
                <Image
                   style={{width:16,height:20}}
                   source={require('../../imgs/ic_center_back.png')}
                />
             </TouchableOpacity>
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:22}}>自助换房大厅房源展示</Text>
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
    var pageSize=99,pageIndex=1;
      var classes = "http://121.41.33.67:8080/HousingService/api/housingChange/list";
          fetch(classes,{
              method:'POST',
              headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                pageSize:pageSize,
                pageIndex:pageIndex,
                }),
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
            <TouchableOpacity onPress={() => this.getClassInfo(taget.fzfhfsqId)}>
                <View style={styles.item}>
                  <View style={styles.width50}>
                       <Image source={require('../../imgs/nopic.jpg')} style={{height: 36, width: 36}}/>
                  </View>
                  <View style={styles.nameView}>
                       <Text style={styles.nm}>{taget.xqmc}</Text>
                       <Image style={styles.rightIcon} source={require('../../imgs/ic_center_right_arrow.png')}/>
                  </View>
               </View>
            </TouchableOpacity>
        )
    }
 getClassInfo(id) {
        this.props.navigator.push({
            name: "Zihhf_content",
            component: Zihhf_content,
            params:{
                id:id,
            }
        });
    }

}

const styles = StyleSheet.create({
ScrollView:{
  marginLeft:10,
  marginRight:10
  },
nm: {
    color: "#1BB7FF",
    fontSize: 14,
  },
nameView: {
    flex:1,
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: "center",
    marginLeft:10,
  },
  item:{
    flexDirection: 'row',
    height: 42,
    marginLeft: 0,
    marginRight: 10,
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
width50:{
  marginLeft:0,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor: 'white',
},
rightIcon: {
  alignItems: 'center',
  justifyContent: 'center',
  width: 15,
  height: 15,
  marginLeft:Width-152,
//  marginRight:4,
  marginTop:-1,
      },
});
