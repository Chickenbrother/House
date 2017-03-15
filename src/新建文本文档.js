/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DatePickerAndroid,
  TouchableHighlight,
} from 'react-native';
//简单封装一个组件
class CustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
class DataPickerDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      presetDate: new Date(2016, 3, 5),
      simpleText: '选择日期,默认今天',
      minText: '选择日期,不能比今日再早',
      maxText: '选择日期,不能比今日再晚',
      presetText: '选择日期,指定2016/3/5',
    };
  }
  //进行创建时间日期选择器
  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  render() {
    return (
      <View>
        <CustomButton text={this.state.presetText}
         onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}/>
         <CustomButton text={this.state.minText}
         onPress={this.showPicker.bind(this, 'min', {date: this.state.minDate,minDate:new Date()})}/>
         <CustomButton text={this.state.maxText}
         onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
});

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
  Dimensions,
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
export default class Page1_1 extends Component {
    constructor(props){
          super(props);
          this.state = {

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

                    Duty:jsonData.mainduty,
                })
            })
    }
    render() {

        return (
          <View style={{backgroundColor:'#fff',flex:1}}>
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
    padding:1,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start'
},
container: {
  flex: 1
},
});


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
          <View style={{backgroundColor:'#fff',flex:1,}}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text style={{width:totalWidth,backgroundColor:'#A7A2A2',fontSize:14,alignItems:'flex-start',justifyContent:'flex-start'}}>详细信息</Text>
            <Text style={{fontSize:14,}}>部门全称：{cont.deptName}</Text>
            <Text style={{fontSize:14,}}>部门简称：{cont.shortName}</Text>
            <Text style={{fontSize:14,}}>联系电话：{cont.tel}</Text>
            <Text style={{fontSize:14,}}>传真：{cont.fax}</Text>
            <Text style={{fontSize:14,}}>邮编：{cont.post}</Text>
            <Text style={{fontSize:14,}}>地址：{cont.address}</Text>
            <Text style={{fontSize:14,}}>邮箱：{cont.email}</Text>
            <Text style={{fontSize:14,}}>咨询电话：{cont.askTel}</Text>
            <Text style={{fontSize:14,}}>投诉电话：{cont.tsTel}</Text>
            <Text style={{width:totalWidth,backgroundColor:'#A7A2A2',fontSize:14,alignItems:'flex-start',justifyContent:'flex-start'}}>职责简述</Text>
            <WebView style={styles.container}
                source = {{html:this.state.Duty}}
                startInLoadingState={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
              />
          </ScrollView>
        </View>
        )
    }
  }

const styles = StyleSheet.create({
  item:{
    flex:1,
    padding:1,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start'
},
container: {
  flex: 1
},
});
