import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Header from './Header';

import home from '../../../media/appIcon/home.png';
import home0 from '../../../media/appIcon/home0.png';
import cart from '../../../media/appIcon/cart.png';
import cart0 from '../../../media/appIcon/cart0.png';
import search from '../../../media/appIcon/search.png';
import search0 from '../../../media/appIcon/search0.png';
import contact from '../../../media/appIcon/contact.png';
import contact0 from '../../../media/appIcon/contact0.png';



export default class Menu extends Component<{}> {
  constructor() {
    super();
    this.state={
      selectedTab: 'home',
      types: [],
      cartArray: [],
    }
  }
  componentDidmount() {
    fetch('http://10.0.132.193:825/app/app/')
    .then(res=>res.json())
    .then(resJSON=>{
      return
      // const {type} = resJSON;
      // this.setState({types: type})
    })
    .catch(error => {
      console.error(error);
    });
  }
  openMenu(){
    const {open} = this.props;
    open();
  }

   render() {
     const {types, selectedTab,cartArray} = this.state;
     //var cartArray= this.state.cartArray;
     return (
       <View style={{flex: 1}}>

        <Header onOpen={this.openMenu.bind(this)}/>
         <TabNavigator>
           <TabNavigator.Item
             // tabStyle={{height: 60}}
             selected={selectedTab === 'home'}

             title="Home"

             renderIcon={() => <Image source={home0} style={{height: 25, width: 25}}/>}
             renderSelectedIcon={() => <Image source={home} style={{height: 25, width: 25}}/>}
             onPress={() => this.setState({ selectedTab: 'home' })}>
             <Home />
           </TabNavigator.Item>

           <TabNavigator.Item
             // tabStyle={{height: 60}}
             selected={selectedTab === 'cart'}
             title="Cart"
             renderIcon={() => <Image source={cart0} style={{height: 25, width: 25}}/>}
             renderSelectedIcon={() => <Image source={cart} style={{height: 25, width: 25}}/>}
             onPress={() => this.setState({ selectedTab: 'cart' })}>
             <Cart cartArray={cartArray}/>
           </TabNavigator.Item>

           <TabNavigator.Item
             // tabStyle={{height: 60}}
             selected={selectedTab === 'search'}
             title="Search"
             renderIcon={() => <Image source={search0} style={{height: 25, width: 25}}/>}
             renderSelectedIcon={() => <Image source={search} style={{height: 25, width: 25}}/>}
             onPress={() => this.setState({ selectedTab: 'search' })}>
             <Search />
           </TabNavigator.Item>

           <TabNavigator.Item
             // tabStyle={{height: 60}}
             selected={selectedTab === 'contact'}
             title="Contact"
             renderIcon={() => <Image source={contact0} style={{height: 25, width: 25}}/>}
             renderSelectedIcon={() => <Image source={contact} style={{height: 25, width: 25}}/>}
             onPress={() => this.setState({ selectedTab: 'contact' })}>
             <Contact />
           </TabNavigator.Item>
         </TabNavigator>
       </View>
     );
   }
}
