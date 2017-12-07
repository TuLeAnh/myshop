import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import fit from '../../../../media/temp/fit.jpg';
import maxi from '../../../../media/temp/maxi.jpg';
import midi from '../../../../media/temp/midi.jpg';
import mini from '../../../../media/temp/mini.jpg';
import party from '../../../../media/temp/party.jpg';
import little from '../../../../media/temp/little.jpg';

const {width,height} = Dimensions.get('window');

class Category extends Component<{}> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {wrapper,textstyle,imagestyle} = styles;
    //const{navigate} = this.props.navigation;
    //const {types} = this.props;
    return(
      <View style={wrapper}>
        <View style={{flex: 1,justifyContent: 'center'}}>
          <Text style={textstyle}>List Of Category</Text>
        </View>
        <View style={{flex: 4}}
          onPress={()=>this.props.navigation.navigate('ProductList')}>
          <Swiper autoplay={true} showsButtons={true}>
          
            <TouchableOpacity style={{flex: 4}}
              onPress={()=>this.props.navigation.navigate('ProductList')}>
                <Image source={little} style={imagestyle}/>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 4}}
              onPress={()=>this.props.navigation.navigate('ProductList')}>
                <Image source={little} style={imagestyle}/>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 4}}
              onPress={()=>this.props.navigation.navigate('ProductList')}>
                <Image source={little} style={imagestyle}/>
            </TouchableOpacity>

          </Swiper>
        </View>
      </View>
    )
  }
}
export default Category;
const imgWidth = width - 40;
const imgHeight = (imgWidth / 800) * 400;
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
//ham map la ham trong js tra ve mang tu 1 mang khac
/*{ type.map(e => (
  <TouchableOpacity style={{flex: 4}}
    onPress={()=>this.props.navigation.navigate('ProductList')}>
      <Image source={little} style={imagestyle}/>
  </TouchableOpacity>
))}*/
