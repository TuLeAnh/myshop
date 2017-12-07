import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import HomeView from "./HomeView";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";
import { StackNavigator } from 'react-navigation';

//const {types} = this.props;
const SimpleApp = StackNavigator({
  HomeView:      { screen: HomeView },
  ProductDetail: { screen: ProductDetail },
  ProductList:   { screen: ProductList },
  Cart:          { screen: Cart},

});


class Home extends Component<{}> {
  render() {
    const {types} = this.props;
    return(
      <SimpleApp />
    );
  }
}
export default Home;
