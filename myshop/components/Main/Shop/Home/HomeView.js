import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
class HomeView extends Component<{}> {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {types} = this.props;
    return(
      <ScrollView>

        <Category navigation={this.props.navigation} />
        <Collection navigation={this.props.navigation}/>
        <TopProduct navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}
export default HomeView;
