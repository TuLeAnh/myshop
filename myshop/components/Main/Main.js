import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Drawer from 'react-native-drawer'

import Menu from './Menu';
import Shop from './Shop/Shop';
StatusBar.setHidden(true);
export default class Main extends Component<{}> {
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };

  static navigationOptions = {
    header: null,
  };
  render() {

    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1}}>
          <Drawer
            tapToClose
            openDrawerOffset={0.4}
            ref={(ref) => this.drawer = ref}
            content={
                <Menu navigation={this.props.navigation} />
              }
          >
            <Shop open={this.openControlPanel.bind(this)} />
          </Drawer>
        </View>
      </View>
    );
  }
}
