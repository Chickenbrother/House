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
var id;
import { NaviGoBack } from '../Common';
let totalWidth = Dimensions.get('window').width;
export default class Zihhf_content extends Component {
    constructor(props,params) {
        super(props);
        this.buttonBackAction=this.buttonBackAction.bind(this);
        this.state = {
            content: '' ,
            id : this.props.id,

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
        var url = "http://121.41.33.67:8080/HousingService/api/housingChange/detail/"+this.props.id;
        fetch(url)
            .then((response) => response.json())
            .then((jsonData) => {
              this.setState({
                  content: jsonData
              })
            });


  }

render() {
  cont = this.state.content;
       return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:6,justifyContent:'center',width:24,height:36}}>
                 <Image
                    style={{width:16,height:20}}
                    source={require('../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>房源详情</Text>
              </View>
              <TouchableOpacity style={styles.width36}>
                 <Text style={{fontSize:14,color:'white',fontWeight:'bold',}}>登录</Text>
              </TouchableOpacity>
           </View>

           <View style={styles.item}>
             <ScrollView showsVerticalScrollIndicator={true}>

             <View style={styles.width30}>
              <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',}}>小区信息</Text>
             </View>
              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>小  区  名  称  :</Text>
                <Text style={{fontSize:14}}>{cont.xqmc}</Text>
              </Text>

              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>层数/总层数  :</Text>
                <Text style={{fontSize:14}}>{cont.zcs}</Text>
              </Text>
              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>户              型  :</Text>
                <Text style={{fontSize:14}}>{cont.fwjg}</Text>
              </Text>

              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>所  在  区  域  :</Text>
                <Text style={{fontSize:14}}>{this.getLocation(cont.szqy)}</Text>
              </Text>
              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>所  在  街  道  :</Text>
                <Text style={{fontSize:14}}>{cont.szjd}</Text>
              </Text>

              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>手  机  号  码  :</Text>
                <Text style={{fontSize:14}}>******（*隐私信息，请登录后再查看。）</Text>
              </Text>

              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>房  屋  坐  落  :</Text>
                <Text style={{fontSize:14}}>******（*隐私信息，请登录后再查看。）</Text>
              </Text>
              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>面              积  :</Text>
                <Text style={{fontSize:14}}>{cont.symj}</Text>
              </Text>

              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>边              套  :</Text>
                <Text style={{fontSize:14}}>{this.getBiantao(cont.bt)}</Text>
              </Text>
              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>所  在  城  区  :</Text>
                <Text style={{fontSize:14}}>{cont.zscq}</Text>
              </Text>
              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>联   系   人      :</Text>
                <Text style={{fontSize:14}}>{cont.xm}</Text>
              </Text>

              <Text style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:14,color:'black'}}>其他联系方式:</Text>
                <Text style={{fontSize:14}}>******（*隐私信息，请登录后再查看。）</Text>
              </Text>
              <View style={styles.width30}>
                <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',}}>意向小区信息</Text>
              </View>
             <Text style={{flexDirection:'row',marginTop:4}}>
               <Text style={{fontSize:14,color:'black'}}>意向小区名称 :</Text>
               <Text style={{fontSize:14}}>{cont.yxxqmc}</Text>
             </Text>
             <Text style={{flexDirection:'row',marginTop:4}}>
               <Text style={{fontSize:14,color:'black'}}>意  向  层  数  :</Text>
               <Text style={{fontSize:14}}>{cont.yxzcsStart}</Text>
             </Text>

             <Text style={{flexDirection:'row',marginTop:4}}>
               <Text style={{fontSize:14,color:'black'}}>意向房屋坐落 :</Text>
               <Text style={{fontSize:14}}>{cont.yxszcsEnd}</Text>
             </Text>
             <Text style={{flexDirection:'row',marginTop:4}}>
               <Text style={{fontSize:14,color:'black'}}>意  向  户  型   :</Text>
               <Text style={{fontSize:14}}>{cont.yxfwjg}</Text>
             </Text>
             <Text style={{flexDirection:'row',marginTop:4}}>
               <Text style={{fontSize:14,color:'black'}}>意  向  区  域   :</Text>
               <Text style={{fontSize:14}}>{this.getYixiang(cont.yxszqy)}</Text>
             </Text>

             </ScrollView>
         </View>
    </View>
       );
     }
  getLocation(szqy1){
         var szqy = "";
         if(szqy1!=null){
           if(szqy1.indexOf("n")>-1){
             szqy=szqy+"城北";
           }
           if(szqy1.indexOf("s")>-1){
             if(szqy!=""){
               szqy=szqy+",城南";
             }
             else{
               szqy=szqy+"城南";
             }
           }
           if(szqy1.indexOf("e")>-1){
             if(szqy!=""){
               szqy=szqy+",城东";
             }
             else{
               szqy=szqy+"城东";
             }
           }
           if(szqy1.indexOf("w")>-1){
             if(szqy!=""){
               szqy=szqy+",城西";
             }
             else{
               szqy=szqy+"城西";
             }
           }
           if(szqy1.indexOf("m")>-1){
             if(szqy!=""){
               szqy=szqy+",城中";
             }
             else{
               szqy=szqy+"城中";
             }
           }
         } else{	szqy="无";}

         return szqy;
    }
  getBiantao(bt1){
         var bt="";
         if(bt1!=null){
           if(bt1.indexOf("e")>-1){
             bt="东边套";
           }
           if(bt1.indexOf("w")>-1){
             bt="西边套";
           }
           if(bt1.indexOf("m")>-1){
             bt="中间套";
           }
         }
         return bt;
    }
  getYixiang(yxszqy1){
      var yxszqy = "";
      if(yxszqy1!=null){
        if(yxszqy1.indexOf("n")>-1){
          yxszqy=yxszqy+"城北";
        }
        if(yxszqy1.indexOf("s")>-1){
          if(yxszqy!=""){
            yxszqy=yxszqy+",城南";
          }
          else{
            yxszqy=yxszqy+"城南";
          }
        }
        if(yxszqy1.indexOf("e")>-1){
          if(yxszqy!=""){
            yxszqy=yxszqy+",城东";
          }
          else{
            yxszqy=yxszqy+"城东";
          }
        }
        if(yxszqy1.indexOf("w")>-1){
          if(yxszqy!=""){
            yxszqy=yxszqy+",城西";
          }
          else{
            yxszqy=yxszqy+"城西";
          }
        }
        if(yxszqy1.indexOf("m")>-1){
          if(yxszqy!=""){
            yxszqy=yxszqy+",城中";
          }
          else{
            yxszqy=yxszqy+"城中";
          }
        }
      } else {
        yxszqy="无";
      }
      return yxszqy;
   }
}

const styles = StyleSheet.create({
  item:{
    flex:1,
    marginLeft:10,
    marginRight:10,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start'
},
width30:{
      marginTop:2,
      width:100,
      height:24,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ddd',
      },
width36:{
      marginTop:4,
      width:50,
      height:30,
      borderRadius:4,
      marginRight:4,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'red',
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
