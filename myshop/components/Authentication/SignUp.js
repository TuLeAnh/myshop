import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import register from '../Register/Register';
export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name :'',
      email:'',
      password:'',
      Repassword:'',
    }
  }
  registeruser() {
    const{name, email, password} = this.state;
    register(email,name,password)
    .then(res=>{
      if(res === 'THANH_CONG') this.onSucess();
      else if (res === 'KHONG_THANH_CONG') {
        this.onFail();
      }
    });
  }
  onSucess() {
    Alert.alert(
      'Notice',
      'Sign Up Success',
      [
        {text: 'OK', onPress: () => {
          this.setState({name:'',email:'',password:'',Repassword:''})
          this.props.gotoSignIn()
        }},
      ],
      { cancelable: false }
    );
  }
  onFail() {
    Alert.alert(
      'Notice',
      'Sign Up Fail !!',
      'Email have been existed'
      [
        {text: 'OK', onPress: () => this.setState({name:'',email:'',password:'',Repassword:''})}
      ],
      { cancelable: false }
    );
  }
  render() {
    const {textinputstyle,btnSignInNow} = styles;
    return(
      <View style={{flex: 1,marginTop: 20}}>

        <TextInput
          style={textinputstyle}
          placeholder='Enter your name?'
          value={this.state.name}
          onChangeText={text=>this.setState({name:text})}
          >
        </TextInput>

        <TextInput
          style={textinputstyle}
          placeholder='Enter your email?'
          value={this.state.email}
          onChangeText={text=>this.setState({email:text})}>

        </TextInput>

        <TextInput
          style={textinputstyle}
          placeholder='Enter your password?'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={text=>this.setState({password:text})}>

        </TextInput>

        <TextInput
          style={textinputstyle}
          placeholder='Re-enter your password?'
          secureTextEntry={true}
          value={this.state.Repassword}
          onChangeText={text=>this.setState({Repassword:text})}>

        </TextInput>
        <TouchableOpacity style={btnSignInNow} onPress={this.registeruser.bind(this)}>
          <Text style={{color: 'white'}}>SIGN UP NOW</Text>
        </TouchableOpacity>
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
