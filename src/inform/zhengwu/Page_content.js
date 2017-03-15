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
        WebView,
} from 'react-native';
var id,head;
import { NaviGoBack } from '../../Common';
let totalWidth = Dimensions.get('window').width;
export default class Page_content extends Component {
    constructor(props,params) {
        super(props);
        this.buttonBackAction=this.buttonBackAction.bind(this);
        this.state = {
            title: '' ,
            id : this.props.id,
            head : this.props.head,
            }
    }
buttonBackAction(){
          const {navigator} = this.props;
          return NaviGoBack(navigator);
      }
componentDidMount() {
      this.fetchData();
      }
fetchData() {
        var url = "http://121.41.33.67:8080/HousingService/api/news/detail/"+this.props.id;
        fetch(url)
            .then((response) => response.json())
            .then((jsonData) => {
              this.setState({
                  title: jsonData.outputContent,
              })
            })
      }
render() {
  var mxc = this.props.head;


       return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                 <Image
                    style={{width:16,height:20}}
                    source={require('../../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>公告内容</Text>

              </View>
           </View>
           <View style={{alignItems:'center',justifyContent:'center',height:40}}>
              <Text style={{fontSize:16,color:'black',textAlign:'center',fontWeight:'bold'}}>{this.props.head}</Text>
           </View>

         <WebView style={styles.container}
         source = {{html:this.state.title}}
         //  html = {this.state.title}
             startInLoadingState={true}
             domStorageEnabled={true}
             javaScriptEnabled={true}
           />
    </View>
       );
     }
   }

const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#F5FCFF',
       marginLeft:10,
       marginRight:10,
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
