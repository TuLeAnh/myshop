import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import ic_logo from '../../../media/appIcon/ic_logo.png';
import ic_menu from '../../../media/appIcon/ic_menu.png';

const {height} = Dimensions.get('window');
export default class Header extends Component<{}> {
  render() {
    const {wrap,row1,textinput,icon,textstyle } = styles;
    return(
      <View style={wrap}>
          <View style={row1}>
            <TouchableOpacity onPress={this.props.onOpen}>
              <Image source={ic_menu} style={icon}
              />
            </TouchableOpacity>
            <Text style={textstyle}>Wearing a Dress</Text>
            <Image
              source={ic_logo}
              style={icon}
            />
          </View>
          <View>
            <TextInput
              style={textinput}
              placeholder='what do you want to buy?'
              underlineColorAndroid="transparent"
            >
            </TextInput>
          </View>


      </View>
    );
  }
 }

 const styles = StyleSheet.create({
   wrap: {
     height: height/6,
     backgroundColor: '#00cbcc',
     padding: 10,
     justifyContent: 'space-around'
   },
   row1: {flexDirection: 'row',
   justifyContent: 'space-between'
 },
   textinput: {
     borderWidth: 0.5,
     height: height/18,
     backgroundColor: 'white',
     paddingLeft: 5,

   },
   icon: {
     height: 30,
     width: 30
   },
   textstyle: {fontSize: 20,
     color: 'white',
     fontFamily: 'arial'
   }
 })
 /*<TouchableOpacity onPress={this.props.onOpen}>
   <Text>Open menu</Text>
 </TouchableOpacity>*/
