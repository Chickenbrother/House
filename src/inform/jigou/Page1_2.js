
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
  InteractionManager,
  Dimensions,
  TouchableOpacity
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
import Page2_content from './Page1_2_content';
export default class Page1_2 extends Component{
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
        var classes = "http://121.41.33.67:8080/HousingService/api/organization/internal/list";
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
                style={styles.ListView}
                />
        )
    }

    renderClass(taget) {
          return (
              <TouchableOpacity onPress={() => this.getClassInfo(taget.deptId)}>
      					  <View style={styles.item}>

      					         <Text style={{color:'#1BB7FF', fontSize:14,}}>{taget.deptName}</Text>
                         <Image style={styles.rightIcon} source={{uri: 'right_07'}}/>

    					   </View>
              </TouchableOpacity>
          )
      }
    getClassInfo(id) {
             this.props.navigator.push({
                 name: "Page2_content",
                 component: Page2_content,
                 params:{
                     id:id,
                 }
             });
         }
  }

const styles = StyleSheet.create({
  row:{
  height:60,
  borderBottomWidth: 4,
  borderBottomColor:'#ccc',
  flexDirection:'row',
  alignItems:'center'
  },
part:{
  marginLeft:5,
  flex:1,
  },
unColor:{
  color: '#575656',
  marginTop:8,
  fontSize:12,
  },
link:{
  color:'#1BB7FF',
  marginTop:2,
  },
ScrollView:{
  margin:6
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
    flexDirection: 'row',
    height: 30,
    marginLeft: 1,
    marginRight: 10,
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    alignItems: 'center'
  },
width50:{
  flexDirection: 'row',
  marginLeft:1,
  marginRight: 40,
  alignItems:'center',
  justifyContent:'flex-start',
  backgroundColor: 'white',
},
rightIcon: {
      position:'absolute',
      right:-4,
      top: 8,
      height: 15,
      width: 15
      },
});
