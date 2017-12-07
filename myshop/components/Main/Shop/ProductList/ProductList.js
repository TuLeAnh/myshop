import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  ListView
} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const {width,height} = Dimensions.get('window');
const producWidth = (width - 40) / 2;
const producHeight = (producWidth / 361)* 452;
export default class ProductList extends Component<{}> {
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
    this.setState({
      number: this.state.number -1
    })
  }
  clickCreate() {

    this.setState({
      number: this.state.number +1
    })
  }
  render() {
    const {wrapper,textstyle,productimage,body,titlecontainer,text1,text2} = styles;
    return(
      <ScrollView>
        <View style={wrapper}>
          <View
            style={body}

          >
            <Image source={sp1} style={productimage}/>
            <View style={{flexDirection: 'column',marginLeft: 8}}>
              <View style={{marginTop: 10}}><Text style={text1}>Name Product</Text></View>
              <View style={{marginTop: 10}}><Text style={text2}>Price Product</Text></View>
              <View style={{marginTop: 10}}><Text style={{fontSize: 15}}>Properties Product</Text></View>
              <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 8
              }}>
                <Text>Color RoyalBlue: </Text>
                <Text style={{backgroundColor: 'cyan',height: 15,width: 15,borderRadius: 7.5}}></Text>
              </View>
              <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                  <TouchableOpacity onPress={()=>this.clickIncreate()}>
                    <Text>-   </Text>

                  </TouchableOpacity>

                    <Text>
                      {this.state.number}
                    </Text>

                  <TouchableOpacity onPress={()=>this.clickCreate()}>
                    <Text>   +</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}>
                  <Text style={{fontSize: 11,color: 'blue',}}>Show Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 11,color: 'blue',}}>buy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={body}

            >
              <Image source={sp2} style={productimage}/>
              <View style={{flexDirection: 'column',marginLeft: 10,justifyContent: 'space-around'}}>
              <View style={{marginTop: 10}}><Text style={text1}>Name Product</Text></View>
              <View style={{marginTop: 10}}><Text style={text2}>Price Product</Text></View>
              <View style={{marginTop: 10}}><Text style={{fontSize: 15}}>Properties Product</Text></View>
              <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 8
              }}>
                <Text>Color RoyalBlue: </Text>
                <Text style={{backgroundColor: 'cyan',height: 15,width: 15,borderRadius: 7.5}}></Text>
              </View>
              <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={()=>this.clickIncreate()}>
                    <Text>-  </Text>
                  </TouchableOpacity>
                    <Text>  {this.state.number1}</Text>
                  <TouchableOpacity onPress={()=>this.clickCreate()}>
                    <Text>   +</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}>
                  <Text style={{fontSize: 11,color: 'blue',}}>Show Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 11,color: 'red',}}>buy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={body}>

            <Image source={sp3} style={productimage}/>
            <View style={{flexDirection: 'column',marginLeft: 10,justifyContent: 'space-around'}}>
            <View style={{marginTop: 10}}><Text style={text1}>Name Product</Text></View>
            <View style={{marginTop: 10}}><Text style={text2}>Price Product</Text></View>
            <View style={{marginTop: 10}}><Text style={{fontSize: 15}}>Properties Product</Text></View>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 8
            }}>
              <Text>Color RoyalBlue: </Text>
              <Text style={{backgroundColor: 'cyan',height: 15,width: 15,borderRadius: 7.5}}></Text>
            </View>
            <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>this.clickIncreate()}>
                  <Text>-  </Text>
                </TouchableOpacity>
                  <Text>  {this.state.number2}</Text>
                <TouchableOpacity onPress={()=>this.clickCreate()}>
                  <Text>   +</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}>
                <Text style={{fontSize: 11,color: 'blue',}}>Show Detail</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <TouchableOpacity>
                <Text style={{fontSize: 11,color: 'red',}}>buy</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>

          <View
            style={body}

          >
            <Image source={sp4} style={productimage}/>
            <View style={{flexDirection: 'column',marginLeft: 10, justifyContent: 'space-around'}}>
            <View style={{marginTop: 10}}><Text style={text1}>Name Product</Text></View>
            <View style={{marginTop: 10}}><Text style={text2}>Price Product</Text></View>
            <View style={{marginTop: 10}}><Text style={{fontSize: 15}}>Properties Product</Text></View>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 8
            }}>
              <Text>Color RoyalBlue: </Text>
              <Text style={{backgroundColor: 'cyan',height: 15,width: 15,borderRadius: 7.5}}></Text>
            </View>
            <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>this.clickIncreate()}>
                  <Text>-  </Text>
                </TouchableOpacity>
                  <Text>  {this.state.number3}</Text>
                <TouchableOpacity onPress={()=>this.clickCreate()}>
                <Text>   +</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}>
                <Text style={{fontSize: 11,color: 'blue',}}>Show Detail</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <TouchableOpacity>
                <Text style={{fontSize: 11,color: 'red',}}>buy</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    //height: height*0.7,
    backgroundColor: 'white',
    //margin: 2,
    //borderWidth: 1,

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
    color: '#e0e0e0'
  },
  text2: {
    fontSize: 15,
    color: '#e91e63',
  }

})
