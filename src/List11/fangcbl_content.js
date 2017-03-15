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
          Linking,
          TouchableOpacity,
          WebView,
  } from 'react-native';
  var id;
  let totalWidth = Dimensions.get('window').width;
  export default class Fangcbl_content extends Component {
      constructor(props,params) {
          super(props);
          this.state = {
              content: '' ,
              id : this.props.id
              }
      }

  componentDidMount() {
        this.fetchData();
        }
  fetchData() {
          var url = "http://121.41.33.67:8080/HousingService/api/convenient/address/info/"+this.props.id;
          fetch(url)
              .then((response) => response.json())
              .then((jsonData) => {
                this.setState({
                    content: jsonData,
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
                      source={require('../../imgs/ic_center_back.png')}
                   />
                </TouchableOpacity>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>地址详情</Text>
                </View>
             </View>

             <View style={styles.item}>
               <ScrollView showsVerticalScrollIndicator={true}>
                   <Text style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Text style={{fontSize:14,color:'black'}}>名        称：</Text>
                     <Text>{cont.bsdMc}</Text>
                   </Text>

                   <Text style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Text style={{fontSize:14,color:'black'}}>类        型：</Text>
                     <Text>{this.getTypeNameStr(cont.bsdLx)}</Text>
                   </Text>

                   <View style={{flexDirection:'row',marginTop:10}}>
                     <Text style={{fontSize:14,color:'black'}}>咨询电话：</Text>
                     <TouchableOpacity onPress={() => {
                       Linking.openURL('tel:' + cont.zxdh)
                       }} >
                         <Text style={{color:'#1BB7FF'}}>{cont.zxdh}</Text>
                     </TouchableOpacity>
                   </View>

                   <Text style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Text style={{fontSize:14,color:'black'}}>地         地址:  </Text>
                     <Text>{cont.dz}</Text>
                   </Text>
               </ScrollView>
           </View>

               <WebView style={styles.webview_style}
                  source={require('./map.html')}
                  startInLoadingState={true}
                  domStorageEnabled={true}
                  javaScriptEnabled={true}
                  >
                </WebView>




      </View>
         );
       }
    back() {
         this.props.navigator.pop();
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
       item:{
    //     flex:1,
         flexDirection:'column',
         marginLeft:10,
         marginRight:10,
         marginTop:15,

     },
     webview_style:{
        backgroundColor:'#fff',
          marginTop:10,
          marginLeft:0,
          marginRight:10,
     }
     });
