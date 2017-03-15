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
import Page3_content from './Page1_3_content';
export default class Page1_3 extends Component {
    constructor(props){
          super(props);
    }
    render(){
        return(
            <View style={styles.container}>
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
        var classes = "http://121.41.33.67:8080/HousingService/api/organization/subordinate/list";
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
              <TouchableOpacity onPress={() => this.getClassInfo(taget.deptId)}>
      					  <View style={styles.item}>
      					    <View style={styles.width50}>
      					         <Text style={{color:'#1BB7FF', fontSize:14,}}>{taget.deptName}</Text>
      						  </View>
    					    </View>
                 <View>
                 <Image style={styles.rightIcon} source={require('../../../imgs/ic_center_right_arrow.png')}/>
                 </View>
              </TouchableOpacity>
          )
      }
   getClassInfo(id) {
          this.props.navigator.push({
              name: "Page3_content",
              component: Page3_content,
              params:{
                  id:id,
              }
          });
      }

  }

const styles = StyleSheet.create({

ScrollView:{
  margin:0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft:10,
    marginRight:10,
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
    height:40,
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
  marginRight: 40,
  alignItems:'flex-start',
  justifyContent:'flex-start',
  backgroundColor: 'white',
},
rightIcon: {
      position: 'absolute',
      right: 2,
      top: -30,
      height: 15,
      width: 15
            },
});
