import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    ListView,
    Image,
    Navigator,
    TouchableOpacity,
    WebView,
    ScrollView
} from 'react-native';
var id, name;
export default class Page1_1_content extends Component {
    constructor(props,params) {
        super(props);
	this.state = {
         dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
          }),
        }
    }
    componentDidMount() {
        id = this.props.id;
        name = this.props.name;
        this.fetchData();
    }
    fetchData() {
        var url = "http://121.41.33.67:8080/HousingService/api/news/detail/"+ this.props.id + ".json";
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                   dataSource: this.state.dataSource.cloneWithRows(responseData.list)
                })
            })
      }
    render() {
        if (!this.state.dataSource) {
            return (
                    <View></View>
                   );
        } else {
            return (
                <View style={styles.container}>
                    <Toolbar {...this.props} navigator={this.props.navigator} />
                    <ScrollView style={styles.ScrollView}>
                        <List dataSource={this.state.dataSource} navigator={this.props.navigator} />
                    </ScrollView>
                </View>
            )
        }
    }

}
// info
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }
    componentDidMount() {
        if (!this.props.dataSource) return;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.dataSource),
        });
    }
    render() {
        return (
            <View>
                <View style={styles.navView}>
                    <Text style={styles.navTitle}>公告内容</Text>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderList.bind(this)}
                        style={styles.commentRows}
                        />
                </View>
            </View>
        )
    }

    renderList(taget) {
        return (
            <View style={styles.nav}>
		                <View style={styles.info}>
                       		  <View style={styles.nameView}>
                          		<Text style={styles.nm}>标题为：{title}</Text>
			                      </View>
		                </View>
            </View>
        )
    }
}


class Toolbar extends Component {
   constructor(props) {
     super(props);
   }
   render() {
       return (
           <View style={styles.toolbar}>
               <TouchableOpacity style={styles.backView} onPress={this.back.bind(this)} >
                   <View style={styles.backIcon} ></View>
                   <Text style={styles.backText}>返回</Text>
               </TouchableOpacity>
               <Text style={styles.title}>{this.props.name}</Text>
           </View>
       )
   }
   back() {
       this.props.navigator.pop();
   }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },
    toolbar: {
        height: 40,
        backgroundColor: "#e54847",
        alignItems: 'center',
        flexDirection: 'row'
    },

    backIcon: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        height: 16,
        width: 16,
        borderColor: "#fff",
        marginLeft: 20,
        transform: [{ rotate: "-45deg" }]
    },
    backView:{
        flexDirection:'row',
        alignItems:'center'
    },
   backText:{
        color:"#fff"
    },
    nav: {
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        flexDirection: "row",
    },
    name: {
        fontSize: 18,
        color: "#fff"
    },
    navView: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderColor: "#e1e1e1",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10
    },
    navTitle: {
        lineHeight: 30
    },
    List: {
        paddingTop: 20,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderColor: "#ddd"
    },
    info: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'column',
    },
    nameView: {
        paddingTop: 6,
        flexDirection: 'row',
        alignItems: "center",
    },
    title: {
        flex: 1,
        color: "#fff",
        textAlign: "center",
    },

});
