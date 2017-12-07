import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import banner from '../../../../media/temp/banner.jpg';
const {width,height} = Dimensions.get('window');

class Collection extends Component<{}> {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {wrapper,textstyle,imagestyle} = styles;
    return(
      <View style={wrapper}>
        <View style={{flex: 1,justifyContent: 'center'}}>
          <Text style={textstyle}>Collection Spring</Text>
        </View>
        <TouchableOpacity
          style={{flex: 4, alignItems: 'center'}}
          onPress={()=>this.props.navigation.navigate('ProductDetail')}
        >
          <Image source={banner} style={imagestyle}/>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Collection;
const imgWidth = width - 40;
const imgHeight = (imgWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height*0.35,
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    borderWidth: 1,
    margin: 6,
    padding: 10,
    paddingTop: 0,
  },
  textstyle: {
    fontFamily: 'Cochin',
    fontSize: 20,
    padding: 5
  },
  imagestyle: {
    height: imgHeight,
    width: imgWidth,
  }
});
