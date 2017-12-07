import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import ProductDetail from "../ProductDetail/ProductDetail";
//import ProductList from "../ProductList/ProductList";
import SearchView from "../Search/SearchView";
import { StackNavigator } from 'react-navigation';


const SimpleApp = StackNavigator({

  SearchView:          { screen: SearchView},
  ProductDetail:     { screen: ProductDetail},
});


class Search extends Component<{}> {
  render() {
    return(
      <SimpleApp />
    );
  }
}
export default Search;
