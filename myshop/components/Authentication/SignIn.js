import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import _signin from '../Authentication/_signin';
import Global from '../OrderHistory/Global';
import Home from '../Main/Shop/Home/Home';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state={
      email: '',
      password: '',
    }
  }
  signin() {
    const {email, password} = this.state;
    //const {navigate} = this.props.navigation;
    // navigate('Menu')
    _signin(email,password)
    .then(res => {
      Global.onsignin(res.user)
    })
    .catch(err => console.log(err))
    //this.props.navigation.goBack();
  }
  openMenu(){
    const {open} = this.props;
    open();
  }
  render() {
    // const backAction = NavigationActions.back({
    //   key: 'Menu'
    // })
    // this.props.navigation.dispatch(backAction)
    const {textinputstyle,btnSignInNow} = styles;
    const {email,password} = this.state;
    //const {goBack} = this.props.navigation;
    return(
      <View style={{flex: 1,marginTop: 20}}>
        <TextInput
          style={textinputstyle}
          placeholder='Enter your email?'
          value={email}
          onChangeText={text=>this.setState({email:text})}
          >
        </TextInput>

        <TextInput
          secureTextEntry={true}
          style={textinputstyle}
          placeholder='Enter your password?'
          value={password}
          onChangeText={text=>this.setState({password: text})}
          secureTextEntry={true}
        >
        </TextInput>

        <TouchableOpacity style={btnSignInNow} onPress={this.signin.bind(this)}>
          <Text style={{color: 'white'}}>SIGN IN NOW</Text>
          <Home />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinputstyle:{
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
    margin: 20

  },
  btnSignInNow: {
    borderWidth: 3,
    borderColor: 'white',
    margin: 20,
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

})
