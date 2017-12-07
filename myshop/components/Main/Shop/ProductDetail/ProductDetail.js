import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListView,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';
import sp5 from '../../../../media/temp/sp5.jpeg';
import ic_add from '../../../../media/appIcon/ic_add.png';

const {width,height} = Dimensions.get('window');
const producWidth = (width - 40) / 2;
const producHeight = (producWidth / 361)* 452;

export default class ProductDetail extends Component<{}> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {wrapper,productimage,image,textstyle,btnbuy} = styles;
    return(
      <ScrollView>
        <View style={wrapper}>
          <View style={image}>
                <Image source={sp1} style={productimage}/>
                <Image source={sp2} style={productimage}/>
          </View>
          <View style={{justifyContent:'center',alignItems: 'center',flexDirection: 'row'}}>
            <Text style={{fontSize: 23, color: 'gray'}}>Product name </Text>
            <Text style={{color: 'red'}}> Price</Text>
          </View>
          <View style={textstyle}>
            <Text>
              Trong trường hợp bạn đang tìm kiếm một chiếc mũ len cá tính và độc đáo hơn, xu hướng mũ len năm nay cũng dễ dàng chiều lòng bạn với 3 ứng cử viên khác là mũ len dáng tai bèo, mũ len cục bông và mũ len dáng mũ nồi. Trong đó, mũ len dáng tai bèo và mũ len dáng mũ nồi đều cực kỳ điệu đà, rất phù hợp với những cô nàng "bánh bèo". Riêng mũ cục bông thì lại thiên về sự trẻ trung, nghịch ngợm, diện chung cùng áo nỉ là "số dzách", ngoài ra còn có thể sánh đôi với những chiếc áo khoác đại hàn như áo phao giúp tăng độ dễ thương, giảm độ nặng nề một cách hiệu quả.
            </Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft: 10,marginRight: 10}}>
            <Text style={{color: '#e81e62'}}>Material leather</Text>
            <Text style={{color: '#e81e62'}}>Color</Text>
          </View>
          <View style={{alignItems: 'center', marginBottom: 10, marginTop: 5}}>
            <TouchableOpacity style={btnbuy} onPress={()=>this.insertAtCart()}>

              <Image source={ic_add}/>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    //height: height*0.7,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between'
    //margin: 2,
    //borderWidth: 1,
  },
  image: {
    // flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'gray',
    //paddingTop: 4,
  },
  productimage: {
    width: producWidth,
    height: producHeight,
  },
  textstyle: {
    marginLeft: 10,
    marginRight: 10,
    // flex: 1,
    //margin: 20,
    //justifyContent: 'space-around'
  },
  btnbuy: {
    // height: 30,
    // width: 60,
    // borderWidth: 0.5,
    // borderColor: 'red',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
