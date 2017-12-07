import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import ii from '../../media/appIcon/ic_logo.png';
import register from '../Register/Register';
import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';

export default class Authentication extends Component<{}> {
  static navigationOptions = {
    title: 'Wearing a Dress',
    headerRight: <Image source={ii} style={{height: 40, width: 40}}/>,
  };

  constructor() {
      super();
      this.state={
        isSignIn : true,
      }
  }
  signin() {
    this.setState({isSignIn:true})
  }
  signup() {
    this.setState({isSignIn:false})
  }
  // componentDidMount() {
  //   register('leesunsu96','tu le anh','1234')
  //   .then(res => console.log(res));
  // }
  gotoSignIn() {
    this.setState({
      isSignIn: true
    })
  }
  openMenu(){
    const {open} = this.props;
    open();
  }
  render() {
    const {container,textinputstyle,btnSignInNow,btnSISU,btnSignIn,btnSignUp,activestyle,inactivestyle} = styles;
    const {isSignIn} = this.state;
    const MainSignInSignUp = isSignIn ? <SignIn /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)}/>;
    return (
      <View style={container}>
        {MainSignInSignUp}
        <View style={btnSISU}>
            <TouchableOpacity style={btnSignIn} onPress={this.signin.bind(this)}>
              <Text style={!isSignIn ? activestyle : inactivestyle}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={btnSignUp} onPress={this.signup.bind(this)}>
              <Text style={isSignIn ? activestyle : inactivestyle}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00897b'
  },
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
  btnSISU: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  btnSignIn: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 3,
    height: 40,
    justifyContent: 'center',
    width: 150,
    alignItems: 'center'
  },
  btnSignUp: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 150,
    alignItems: 'center',
  },
  activestyle: {
    color: '#b0bec5'
  },
  inactivestyle: {
    color: '#00897b'
  }
})
