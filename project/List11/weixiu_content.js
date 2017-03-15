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
  export default class Weixiu_content extends Component {
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
    var url = 'tel:$(cont.zxdh)';
    console.log(url);

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
                   <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:10}}>地址详情</Text>
                </View>
             </View>

             <View style={styles.item}>

                   <Text style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                   <Text style={{fontSize:14,color:'black'}}>名        称：</Text>
                   <Text>{cont.bsdMc}</Text>
                 </Text>

                 <Text style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                   <Text style={{fontSize:14,color:'black'}}>类        型：</Text>
                   <Text>{this.getTypeNameStr(cont.bsdLx)}</Text>
                 </Text>


                 <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                   <Text style={{fontSize:14,color:'black'}}>咨询电话：</Text>
                   <TouchableOpacity onPress={() => {
                     Linking.openURL('tel:' + cont.zxdh)
                     }} >
                       <Text style={{color:'#1BB7FF'}}>{cont.zxdh}</Text>
                   </TouchableOpacity>
                 </View>

                 <Text style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                   <Text style={{fontSize:14,color:'black'}}>地         址:  </Text>
                   <Text>{cont.dz}</Text>
                 </Text>
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
  //       flex:1,
        marginLeft:10,
        marginRight:10,
        marginTop:15,
        flexDirection:'column',
     },
     webview_style:{
       backgroundColor:'#fff',
       marginTop:10,
       marginLeft:0,
       marginRight:10,
     }
     });
