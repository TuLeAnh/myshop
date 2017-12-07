import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class OrderHistory extends Component<{}> {
  static navigationOptions = {
    title: 'OrderHistory',
    headerTintColor: "white",
    headerStyle: {
         backgroundColor:"#00cbcc"},
         //justifyContent:'center'
  };
  //const {} = styles;
  render() {
    const {textstyle} = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        <View style={{backgroundColor: 'white',margin: 10,borderRadius: 3}}>
          <View style={textstyle}>
            <Text> Order id: </Text>
            <Text> ORD 15 </Text>
          </View>
          <View style={textstyle}>
            <Text> OrderTime: </Text>
            <Text> 2017/1/13 08:25:00 </Text>
          </View>
          <View style={textstyle}>
            <Text> Status: </Text>
            <Text> Pending </Text>
          </View>
          <View style={textstyle}>
            <Text> Total: </Text>
            <Text> 293 </Text>
          </View>
        </View>
        <View style={{backgroundColor: 'white',margin: 10,borderRadius: 3}}>
          <View style={textstyle}>
            <Text> Order id: </Text>
            <Text> ORD 16 </Text>
          </View>
          <View style={textstyle}>
            <Text> OrderTime: </Text>
            <Text> 2017/1/13 08:25:00 </Text>
          </View>
          <View style={textstyle}>
            <Text> Status: </Text>
            <Text> Pending </Text>
          </View>
          <View style={textstyle}>
            <Text> Total: </Text>
            <Text> 825 </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
