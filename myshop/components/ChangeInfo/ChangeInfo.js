import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class ChangeInfo extends Component<{}> {
  static navigationOptions = {
    title: 'User Information',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor:"#00cbcc"},
  };
  render() {
    const {touchablestyle,touchablestyleChange} = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee', marginTop: 60}}>
        <TextInput style={touchablestyle} placeholder='Name' keyboardType={'numeric'}>
        </TextInput>

        <TextInput style={touchablestyle} placeholder='Address'>
        </TextInput>

        <TextInput style={touchablestyle} placeholder='Phone number'>
        </TextInput>

        <TouchableOpacity
          style={touchablestyleChange}
        >
          <Text style={{color: 'white',fontSize: 20}}>CHANGE FOR INFORMATION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  touchablestyle: {

    borderWidth: 1,
    borderColor: '#4db6ac',
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  touchablestyleChange: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#4db6ac',
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#4db6ac',
    marginTop: 10
  }
})
