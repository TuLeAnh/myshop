import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';
import sp5 from '../../../../media/temp/sp5.jpeg';


const {width,height} = Dimensions.get('window');
const producWidth = (width - 40) / 2;
const producHeight = (producWidth / 361)* 452;
export default class Cart extends Component<{}> {
  static navigationOptions = {
    header: null,
  };
  constructor(){
    super();
    this.state={
      number: 1,
      number1: 1,
      number2: 1,
      number3: 1,
    }
  }
  clickIncreate() {
    if(this.state.number > 1 || this.state.number1 > 1 ||this.state.number2 > 1||this.state.number3 > 1)
    {
        this.setState({
        number: this.state.number -1
      })
    }
    else {
      return;
    }
  }
  clickCreate() {

    this.setState({
      number: this.state.number +1
    })
  }
  render() {

    const {cartArray} = this.props;
    const {wrapper,btntotal,nuttotal,scrollstyle} = styles;
    return(
      <View style={wrapper}>
        <ScrollView style={scrollstyle}>
          console.log(cartArray);
        </ScrollView>

        <TouchableOpacity style={btntotal}>
          <Text>ToTal $1000</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    //height: height*0.7,
    backgroundColor: 'white',
    //margin: 2,
    //borderWidth: 1,
    flex: 1,

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
    //justifyContent: 'space-between',
    //flexWrap: 'wrap',
    margin: 2,
    borderRadius: 2,
    borderWidth: 1,

  },
  produccontainer: {
    width: producWidth,
    margin: 3,

  },
  productimage: {
    width: producWidth,
    height: producHeight,

  },
  text1: {
    fontSize: 22,
    color: '#b0bec5'
  },
  text2: {
    fontSize: 15,
    color: '#e91e63',
  },
  btntotal: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0097a7',
    margin: 10,
    height: height*0.08,
    width: width*0.9,
    borderRadius: 3,
  },
  scrollstyle: {

  }

})
// {cartArray.map(product =>(
//   <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between'}}>
//     <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
//       <TouchableOpacity onPress={()=>this.clickIncreate()}>
//         <Text>-   </Text>
//
//       </TouchableOpacity>
//
//         <Text>
//           {this.state.number}
//         </Text>
//
//       <TouchableOpacity onPress={()=>this.clickCreate()}>
//         <Text>   +</Text>
//       </TouchableOpacity>
//     </View>
//     <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}>
//       <Text style={{fontSize: 11,color: 'blue',}}>Show Detail</Text>
//     </TouchableOpacity>
//   </View>
// ) )}
