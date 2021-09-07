import React, { Component } from 'react';
import {Button, Image, KeyboardAvoidingView, Text, TextInput, ToastAndroid, View} from 'react-native';
import { styles } from '../../Styles'

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    fetch('http://192.168.0.18:8080/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({emailAddress: this.state.email.toLowerCase(), password: this.state.password})
    }).then(response => {
      if (response.status === 200) {
        ToastAndroid.show('Successful login!', ToastAndroid.SHORT);
        this.props.navigation.navigate('Community Action App', {
          email: this.state.email.toLowerCase(), password: this.state.password
        });
      } else if (response.status === 401) {
        ToastAndroid.show('Incorrect login details.', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Community Action App is experiencing issues at the moment.', ToastAndroid.SHORT);
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Image source={{uri: 'https://i.imgur.com/EmWBZuO.jpg'}} style={styles.logoImage}/>
          <Text style={styles.logoText}>Community Action App</Text>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder={'Email'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <Button
              title={'Login'}
              onPress={this.handleLogin}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={'Register'}
              onPress={() => this.props.navigation.navigate('RegisterPage')}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
