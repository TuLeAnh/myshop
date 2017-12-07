import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import map from '../../../../media/appIcon/map.png';
import ADRESS from '../../../../media/appIcon/location.png';
//import MAIL from '../../../../media/appIcon/mail.png';
import mail from '../../../../media/appIcon/message.png';
import fb from '../../../../media/appIcon/fb.png';
import phone from '../../../../media/appIcon/phone.png';



const {width,height} = Dimensions.get('window');
class Contact extends Component<{}> {
  render() {
    const {imgstyle,textsttyle,iconstyle,contact} = styles;
    return(
      <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={imgstyle}>
          <Image source={map} style={{height: height*0.4,width}}/>
        </View>

        <View style={textsttyle}>
          <View style={contact}>
            <Image source={ADRESS} style={iconstyle}/>
            <Text>ADRESS</Text>
          </View>
          <View style={contact}>
            <Image source={phone} style={iconstyle}/>
            <Text>PHONE NUMBER</Text>
          </View>
          <View style={contact}>
            <Image source={mail} style={iconstyle}/>
            <Text>MAIL</Text>
          </View>
          <View style={contact}>
            <Image source={fb} style={iconstyle}/>
            <Text>fACEBOOK</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}
const imgWidth = width;
const imgHeight = imgWidth/2;
const styles = StyleSheet.create({
  imgstyle: {
    flex: 1,
    width: imgWidth,
    height: imgHeight,

    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textsttyle: {
    flex: 1,
    marginTop: 40
  },
  iconstyle: {
    height: height*0.1,
    width: width/6,
  },
  contact: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    // margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  }
})
export default Contact;
