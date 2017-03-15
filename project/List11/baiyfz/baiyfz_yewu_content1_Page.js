'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform
} from 'react-native';
var id;
import ImagePicker from 'react-native-image-picker';
let Width = Dimensions.get('window').width;
export default class baiyfz_yewu_content1_Page extends Component {
  constructor(props) {
    super(props);
    id = this.props.id;
    this.state = {
      photo:[],
    };
}
selectPhotoTapped() {
    const options = {
      quality: 1.0,
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
    var fileData = JSON.stringify(this.state.photo);
      var outData= {"fileData":fileData,"slbh":id};
        fetch("http://121.41.33.67:8080/HousingService/api/picture/send/uplode",{
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({outData}),
        })
        .then((response) => response.json())
        .then((responseData) => {
          Alert.alert('提示','上传成功');
          })
        .catch((error) => {
            Alert.alert('提示','上传失败');
          });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.photo === null ? <Text>图片上传</Text> :
            <Image style={styles.avatar} source={this.state.photo} />
          }
          </View>
        </TouchableOpacity>

        <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
           <TouchableOpacity onPress={this._addUser.bind(this)}>
             <View style={styles.btn}>
               <Text style={{fontSize:20, color: 'black'}}>点击按钮选择图片并自动上传</Text>
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
    borderRadius: 125,
    width: 250,
    height: 250
  }
});
