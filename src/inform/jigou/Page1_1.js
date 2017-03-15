'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  ScrollView,
  ListView,
  WebView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
export default class Page1_1 extends Component {
    constructor(props){
          super(props);
          this.state = {
            content: '',
            Duty:'',
          }
    }
componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        var classes = "http://121.41.33.67:8080/HousingService/api/organization/base/info/1";
        fetch(classes)
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({
                  content: jsonData,
                  Duty:jsonData.mainduty,
                })
            })
    }
    render() {
      var cont = this.state.content;
        return (
          <View style={{backgroundColor:'#fff',flex:1,marginLeft:10,marginRight:10,}}>
               <View style={styles.width30}>
                <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',}}>详细信息</Text>
               </View>
              <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>部门全称：</Text>
                <Text style={{fontSize:14}}>{cont.deptName}</Text>
              </Text>

              <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>部门简称：</Text>
                <Text style={{fontSize:14}}>{cont.shortName}</Text>
              </Text>
              <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>部门全称：</Text>
                <Text style={{fontSize:14}}>{cont.deptName}</Text>
              </Text>

              <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>联系电话：</Text>
                <TouchableOpacity onPress={() => {
                  Linking.openURL('tel:' + cont.tel)
                  }}>
                    <Text style={{fontSize:14,color:'#1BB7FF'}}>{cont.tel}</Text>
                </TouchableOpacity>
              </View>

              <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>传         真:   </Text>
                <Text style={{fontSize:14}}>{cont.fax}</Text>
              </Text>
              <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>邮         编：</Text>
                <Text style={{fontSize:14}}>{cont.post}</Text>
              </Text>
              <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>地         址：</Text>
                <Text style={{fontSize:14}}>{cont.address}</Text>
              </Text>
              <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>邮         箱：</Text>
                <Text style={{fontSize:14}}>{cont.email}</Text>
              </Text>

              <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>咨询电话：</Text>
                <TouchableOpacity onPress={() => {
                  Linking.openURL('tel:' + cont.askTel)
                  }}>
                    <Text style={{fontSize:14,color:'#1BB7FF'}}>{cont.askTel}</Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>投诉电话：</Text>
                <TouchableOpacity onPress={() => {
                  Linking.openURL('tel:' + cont.tsTel)
                  }}>
                    <Text style={{fontSize:14,color:'#1BB7FF'}}>{cont.tsTel}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.width30}>
               <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',}}>职责简述</Text>
              </View>
              <WebView style={styles.container}
                  source = {{html:this.state.Duty}}
                  startInLoadingState={true}
                  domStorageEnabled={true}
                  javaScriptEnabled={true}
                />
        </View>
        )
    }
  }

const styles = StyleSheet.create({
  item:{
    flex:1,
    flexDirection:'column',
    marginLeft:10,
    marginRight:10,
},
container: {
  flex: 1
},
width30:{
     marginTop:2,
        width:70,
        height:24,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ddd',
      },
});
