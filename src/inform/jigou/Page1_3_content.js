import React,{ Component } from 'react';
import {
          StyleSheet,
          Text,
          View,
          ListView,
          ScrollView,
          Image,
          Navigator,
          Dimensions,
          TouchableOpacity,
          Linking,
          WebView,
  } from 'react-native';
  var id;
  let totalWidth = Dimensions.get('window').width;
  export default class Page1_3_content extends Component {
      constructor(props,params) {
          super(props);
          this.state = {
              content: '' ,
              Duty:'',
              id : this.props.id
              }
      }

  componentDidMount() {
        this.fetchData();
        }
  fetchData() {
          var url = "http://121.41.33.67:8080/HousingService/api/organization/base/info/"+this.props.id;
          fetch(url)
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
        <View style={{backgroundColor:'#fff',flex:1}}>
            <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
                <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                   <Image
                      style={{width:16,height:20}}
                      source={require('../../../imgs/ic_center_back.png')}
                   />
                </TouchableOpacity>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>基本信息</Text>
                </View>
             </View>

             <View style={styles.item}>
             <View style={styles.width30}>
              <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',}}>详细信息 </Text>
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
                   <Text style={{fontSize:14,color:'black'}}>传        真：  </Text>
                   <Text style={{fontSize:14}}>{cont.fax}</Text>
                 </Text>
                 <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                   <Text style={{fontSize:14,color:'black'}}>邮        编：  </Text>
                   <Text style={{fontSize:14}}>{cont.post}</Text>
                 </Text>
                 <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                   <Text style={{fontSize:14,color:'black'}}>地        址：  </Text>
                   <Text style={{fontSize:14}}>{cont.address}</Text>
                 </Text>
                 <Text style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                   <Text style={{fontSize:14,color:'black'}}>邮        箱：  </Text>
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
                  <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',}}>职责</Text>
                 </View>
                    <WebView style={styles.container}
                     source = {{html:this.state.Duty}}
                     startInLoadingState={true}
                     domStorageEnabled={true}
                     javaScriptEnabled={true}
                   />
               </View>
      </View>
         );
       }
       back() {
         this.props.navigator.pop();
       }
     }

  const styles = StyleSheet.create({
       container: {
         flex: 1,
         backgroundColor: '#F5FCFF',
       },
       item:{
         flex:1,
         marginLeft:10,
         marginRight:10,
         flexDirection:'column',

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
  //  render() {
  //  if(!this.state.dataSource){
  //      return (
  //        <View></View>
  //      );
  //  }
  //  else {
  //    return (
  //        <View style={styles.container}>
  //              <ScrollView style={styles.ScrollView}>
  //                  <List dataSource={this.state.dataSource} navigator={this.props.navigator} />
  //              </ScrollView>
  //      </View>
  //            )
    //      }
  //      }
  //}
  //   class List extends Component {
  //      render() {
  //          var data = this.state.dataSource;
  //            return (
  //              <View style={styles.item}>
  //                <View style={styles.width50}>
  //                     <Text>{data.outputContent}</Text>
  //                </View>
  //              </View>
  //            )}
  //       }
  /*
  var styles = StyleSheet.create({
    item:{
      flex:1,
      height:50,
      width:totalWidth,
      padding:1,
      borderBottomWidth: 4,
      borderBottomColor: '#ddd',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'flex-start',
  },
  width50:{
    marginLeft:1,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    backgroundColor: 'white',
  },
  ScrollView: {
      flex: 1,
  },
  container: {
      flex: 1,
      backgroundColor: "#eee",
  },
  });
  */
