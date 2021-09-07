import React, { Component } from 'react';
import { Alert, Button, Image, KeyboardAvoidingView, Text, TextInput, ToastAndroid, View } from 'react-native';
import { styles } from '../../Styles';
import firebaseApp from '../../../firebase/Fire'
import RNPickerSelect from "react-native-picker-select";

const counties = [{label: 'Antrim', value: 1}, {label: 'Armagh', value: 2},
  {label: 'Derry / Londonderry', value: 3},
  {label: 'Down', value: 4}, {label: 'Fermanagh', value: 5},
  {label: 'Tyrone', value: 6}];

export default class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forename: '',
      surname: '',
      generalPractitioner: '',
      email: '',
      password: '',
      confirmPassword: '',
      countyID: 0
    };
  }

  handleRegister = () => {
    if (this.state.forename.length < 2 || this.state.surname < 2) {
      Alert.alert('Oops!', 'Please enter a valid name.');
    } else if (this.state.email == "") {
      Alert.alert('Oops!', 'Please enter an email address.');
    } else if (this.state.password !== this.state.confirmPassword) {
      Alert.alert('Oops!', 'Passwords do not match.')
    } else  if (this.state.countyID <1) {
      Alert.alert('Oops!', 'Please select a county of residence.');
    } else {
      firebaseApp.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          fetch('http://192.168.0.18:8080/register', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              emailAddress: this.state.email.toLowerCase(),
              password: this.state.password,
              token: "exampleToken",
              forename: this.state.forename.toLowerCase(),
              surname: this.state.surname.toLowerCase(),
              practitionerID: this.state.countyID,
              navigatorID: this.state.countyID
            })
          }).then(response => response.json())
            .then(responseJson => {
              ToastAndroid.show('Successfully registered!', ToastAndroid.SHORT);
              this.props.navigation.navigate('LoginPage')
            })
        })
        .catch(error => Alert.alert('Oops!', error.message))
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Image source={{uri: 'https://i.imgur.com/EmWBZuO.jpg'}} style={styles.logoImage}/>
          <Text style={styles.logoText}>Community Action App</Text>
          <View style={styles.twoFieldOneRow}>
            <TextInput
              value={this.state.forename}
              onChangeText={(forename) => this.setState({ forename })}
              placeholder={'Forename'}
              style={styles.inputHalf}
            />
            <TextInput
              value={this.state.surname}
              onChangeText={(surname) => this.setState({ surname })}
              placeholder={'Surname'}
              style={styles.inputHalf}
            />
          </View>

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
          <TextInput
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            placeholder={'Confirm password'}
            secureTextEntry={true}
            style={styles.input}
          />
          <RNPickerSelect
            items={counties}
            placeholder={{label: "County", value: null}}
            onValueChange={county => {
              this.setState({
                countyID: county,
              });
            }}
            style={{inputAndroid: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderWidth: 1,
                borderColor: 'black',
                color: 'black',
                width: 200, height: 40,
                marginBottom: 10}}}
            value={this.state.countyID}
            useNativeAndroidPickerStyle={false}
          />

          <View styles={styles.buttonContainer}>
            <Button
              title={'Register'}
              onPress={this.handleRegister}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={'Login'}
              onPress={() => this.props.navigation.navigate('LoginPage')}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
