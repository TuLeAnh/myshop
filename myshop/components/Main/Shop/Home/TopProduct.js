import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';


const {width,height} = Dimensions.get('window');
const producWidth = (width - 40) / 2;
const producHeight = (producWidth / 361)* 452;

class TopProduct extends Component<{}> {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {wrapper,textstyle,produccontainer,productimage,body,titlecontainer} = styles;
    return(
      <View style={wrapper}>
        <View style={titlecontainer}>
          <Text style={textstyle}>Top Product</Text>
        </View>
        <View style={body}>
          <TouchableOpacity
            style={produccontainer}
            onPress={()=>this.props.navigation.navigate('ProductDetail')}
          >
            <Image source={sp1} style={productimage}/>
            <Text>Name Product</Text>
            <Text>Price Product</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={produccontainer}
            onPress={()=>this.props.navigation.navigate('ProductDetail')}
            >
            <Image source={sp2} style={productimage}/>
            <Text>Name Product</Text>
            <Text>Price Product</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={produccontainer}
            onPress={()=>this.props.navigation.navigate('ProductDetail')}
            >
            <Image source={sp3} style={productimage}/>
            <Text>Name Product</Text>
            <Text>Price Product</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={produccontainer}
            onPress={()=>this.props.navigation.navigate('ProductDetail')}
          >
            <Image source={sp4} style={productimage}/>
            <Text>Name Product</Text>
            <Text>Price Product</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default TopProduct;

const styles = StyleSheet.create({
  wrapper: {
    //height: height*0.7,
    backgroundColor: 'white',
    margin: 6,
    borderWidth: 1,
  },
  titlecontainer:{
    height: 50,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  textstyle: {
    fontFamily: 'Cochin',
    fontSize: 20,

  },
  body: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  produccontainer: {
    width: producWidth,
    margin: 3,

  },
  productimage: {
    width: producWidth,
    height: producHeight,
    borderWidth: 0.2
  }
})
