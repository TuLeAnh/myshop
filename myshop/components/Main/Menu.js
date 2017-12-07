import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import profile from '../../media/temp/male-user.png';
//import { StackNavigator } from 'react-navigation';
import Global from '../OrderHistory/Global';
export default class Menu extends Component<{}> {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state={user: null}
    Global.onsignin = this.onsignin.bind(this);
    //Global.onlogout = this.onlogout.bind(this);
  }
  onsignin(user){
    this.setState({user});
  }
  // onlogout(user){
  //   //this.state.navigation.goBack();
  //   this.setState({user: !user})
  // }
   render() {
     const {user} = this.state;
     const{container,touchablestyle,imagestyle,namestyle} = styles;

     const logoutJSX = (
       <View style={{flex: 1,alignItems: 'center'}}>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('Authentication')}
         style={touchablestyle}>
           <Text style={{color: '#4db6ac',fontSize: 20}}>Sign In</Text>
         </TouchableOpacity>
       </View>
     );

     const LoginJSX = (
       <View>
         <View style={namestyle}><Text>{user ? user.name : 'username'}</Text></View>
         <View style={{flex: 1,alignItems: 'center',marginTop: 10}}>
           <TouchableOpacity
           style={touchablestyle} onPress={()=>this.props.navigation.navigate('OrderHistory')}>
             <Text style={{color: '#4db6ac',fontSize: 20}}>OrderHistory</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChangeInfo')}
           style={touchablestyle}>
             <Text style={{color: '#4db6ac',fontSize: 20}}>ChangeInfo</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={touchablestyle}
            onPress={()=>
              {
                this.props.navigation.navigate('Authentication')
                this.setState({user:null})

              }}
           >
             <Text style={{color: '#4db6ac',fontSize: 20}}>Logout</Text>
           </TouchableOpacity>
         </View>
        </View>
     );
     const MainJSX = user? LoginJSX : logoutJSX;
     return (
       <View style={container}>
        <View style={imagestyle}>
          <Image source={profile} style={{height: 150,width: 150,}} />
          {MainJSX}
        </View>
       </View>
     );
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4db6ac',
  },
  imagestyle: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchablestyle: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: '#4db6ac',
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',alignItems: 'center',
    marginHorizontal: 70,
    marginTop: 10
  },
  namestyle: {
    height: 100,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
