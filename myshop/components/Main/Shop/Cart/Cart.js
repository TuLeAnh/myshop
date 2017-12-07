import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import ProductDetail from "../ProductDetail/ProductDetail";
//import ProductList from "../ProductList/ProductList";
import CartView from "../Cart/CartView";
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'



const SimpleApp = StackNavigator({

  CartView:          { screen: CartView},
  ProductDetail:     { screen: ProductDetail},
});


class Cart extends Component<{}> {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {cartArray} = this.props.navigation;
    return(
      <SimpleApp cartArray={cartArray}/>
    );
  }
}
export default Cart;
