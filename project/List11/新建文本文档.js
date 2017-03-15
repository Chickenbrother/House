'use strict';
import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  WebView,
  Image,
  Dimensions,
  ScrollView,
  Picker,
  TouchableOpacity,
  TextInput
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Baiyfz_yewu_content1_Page1 from './baiyfz/baiyfz_yewu_content1_Page1';
import Baiyfz_yewu_content1_Page2 from './baiyfz/baiyfz_yewu_content1_Page2';
import Baiyfz_yewu_content1_Page3 from './baiyfz/baiyfz_yewu_content1_Page3';
import { NaviGoBack } from '../Common';
export default class Baiyfz_yewu_content1 extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);
}
//返回
buttonBackAction(){
    const {navigator} = this.props;
    return NaviGoBack(navigator);
}
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:36,backgroundColor:'#08BBF9',flexDirection:'row'}}>
              <TouchableOpacity onPress={() => {this.buttonBackAction()}}
               style={{marginLeft:10,justifyContent:'center',width:24,height:36}}>
                 <Image
                    style={{width:16,height:24}}
                    source={require('../../imgs/ic_center_back.png')}
                 />
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>白蚁防治</Text>
              </View>
           </View>

           <ScrollableTabView
             renderTabBar={() => <DefaultTabBar underlineHeight={2} textStyle={{ fontSize: 13, marginTop: 6 }} style={{ height: 36 }}/>}
             tabBarBackgroundColor="#fcfcfc"
             tabBarUnderlineColor="red"
             tabBarActiveTextColor="red"
             tabBarInactiveTextColor="gray"
             tabBarPosition='top'
             >
             <Baiyfz_yewu_content1_Page1 navigator={this.props.navigator} tabLabel='基本资料' style={styles.center} />
             <Baiyfz_yewu_content1_Page2 navigator={this.props.navigator} tabLabel='图片上传' style={styles.center} />
             <Baiyfz_yewu_content1_Page3 navigator={this.props.navigator} tabLabel='付款及查询' style={styles.center} />
           </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
        flex:1,
      },
});


/*     <WebView style={styles.webview_style}
       source={require('./map.html')}
       startInLoadingState={true}
       domStorageEnabled={true}
       javaScriptEnabled={true}
       >
     </WebView>
*/




'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
  Platform
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
let Width = Dimensions.get('window').width;
export default class toupiao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
}
  selectPhotoTapped() {
    const options = {
      quality: 0.8,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;

	        // You can display the image using either:
        //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        //Or:
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }

        this.setState({
          photo: source
        });
      }
    });
  }


  _addUser(){
    var fileData = this.state.photo;
	if(!fileData){
		Alert.alert('提示','请点击上传图片');
		return ;
	}

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.photo === null ? <Text>点击上传图片</Text> :
            <Image style={styles.avatar} source={this.state.photo} />
          }
          </View>
        </TouchableOpacity>

        <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
           <TouchableOpacity onPress={this._addUser.bind(this)}>
             <View style={styles.btn}>
               <Text style={{fontSize:20, color: 'black'}}>提交</Text>
             </View>
           </TouchableOpacity>
       </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn:{
    borderColor:'#fff',
    height:35,
    width:Width-30,
    borderRadius:5,
    borderWidth:2,
    marginLeft:13,
    marginRight:13,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    justifyContent:'center'
  },
  avatar: {
    width: 250,
    height: 250
  }
});
