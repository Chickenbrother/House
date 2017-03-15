/**
 * Created by jason .
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
// import Common from '../common/constants';
let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default class Order extends React.Component {
    render() {
        return (
          <View style={{backgroundColor:'#fff',flex:1}}>
                    <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                          <View style={{flex:1,justifyContent:'center',}}>
                              <TextInput
                                      style={{ fontSize: 16, textAlign: 'center',flex:1,color:'white'}}
                                      placeholder="搜索房产咨询"
                                      placeholderTextColor="#aaaaaa"
                                      underlineColorAndroid="transparent"
                                      numberOfLines={1}
                                      ref={'content'}
                                      multiline={true}
                                      autoFocus={true}
                                      onChangeText={(text) => {
                                         content = text;
                                      }}
                                />
                          </View>
                          <View style={{width:45,height:45,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                                   <Image source={require('../imgs/ic_home_top_search.png')}
                                     style={{width:24,height:24,marginRight:8,alignItems:'center'}}/>
                          </View>
                    </View>
              </View>
        )
    }
}
