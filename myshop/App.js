import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import Main from './components/Main/Main';
import OrderHistory from './components/OrderHistory/OrderHistory';
//import ProductDetail from './components/Main/Shop/ProductDetail/ProductDetail';
import ProductList from './components/Main/Shop/ProductList/ProductList';

const SimpleApp = StackNavigator({
  Main:           { screen: Main },
  Authentication: { screen: Authentication },
  ChangeInfo:     { screen: ChangeInfo },
  OrderHistory:   { screen: OrderHistory },
  ProductList:    { screen: ProductList },
});

StatusBar.setHidden(true);
export default class App extends Component<{}> {
  render() {
      return (
           <SimpleApp />
      );
  }
}
