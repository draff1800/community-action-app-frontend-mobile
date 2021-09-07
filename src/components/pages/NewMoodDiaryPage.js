import React, {Component} from 'react';
import {Image, ScrollView, ToastAndroid, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAvoidingView, TextInput } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button';
import RNPickerSelect from "react-native-picker-select";
import moment from 'moment'

const times = [{label: '12 PM', value: '12:00'}, {label: '1 PM', value: '13:00'}, {label: '2 PM', value: '14:00 '},
  {label: '3 PM', value: '15:00'}, {label: '4 PM', value: '16:00'}, {label: '5 PM', value: '17:00'},
  {label: '6 PM', value: '18:00'}, {label: '7 PM', value: '19:00'}, {label: '8 PM', value: '20:00'},
  {label: '9 PM', value: '21:00'}, {label: '10 PM', value: '22:00'}, {label: '11 PM', value: '23:00'},
  {label: '12 AM', value: '00:00'}, {label: '1 AM', value: '01:00'}, {label: '2 AM', value: '02:00'},
  {label: '3 AM', value: '03:00'}, {label: '4 AM', value: '04:00'}, {label: '5 AM', value: '05:00'},
  {label: '6 AM', value: '06:00'}, {label: '7 AM', value: '07:00'}, {label: '8 AM', value: '08:00'},
  {label: '9 AM', value: '09:00'}, {label: '10 AM', value: '10:00'}, {label: '11 AM', value: '11:00'}];

const categories = [{label: 'Thoughts', value: 'Thoughts'}, {label: 'Family', value: 'Family '},
  {label: 'Friends', value: 'Friends'}, {label: 'Relationships', value: 'Relationships'},
  {label: 'Hobbies & Activities', value: 'Hobbies & Activities'}, {label: 'School', value: 'School'},
  {label: 'Work', value: 'Work'}];

export default class NewMoodDiaryPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTime: '',
      selectedDate: moment().format("YYYY[-]MM[-]DD"),
      selectedMood: '',
      selectedCategory: '',
      description: ''
    };
  }

  handleSave = () => {
    if(this.state.selectedTime != '' && this.state.selectedMood !== '' && this.state.selectedCategory != '' && this.state.description != '') {
      fetch('http://192.168.0.18:8080/createMoodDiary', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userEmail:this.props.route.params.email, diaryDate:this.state.selectedDate,
            diaryTime: this.state.selectedTime, diaryMood: this.state.selectedMood,
            diaryCategory: this.state.selectedCategory, diaryDescription: this.state.description})
      }).then(response => {
        if(response.status === 200) {
          ToastAndroid.show('Diary saved!', ToastAndroid.SHORT);
          this.props.navigation.navigate('Mood Diaries')
        } else {
          ToastAndroid.show('Error occurred.', ToastAndroid.SHORT);
        }
      })
    } else {
      ToastAndroid.show('Please ensure all fields are filled.', ToastAndroid.SHORT);
    }
  };


    render() {
      return (
        <ScrollView>
          <View>
            <KeyboardAvoidingView>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40, marginBottom: 30}}>
                <Text h3>How are you?</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 40}}>
                <DatePicker
                  style={{width: 200, marginRight: 20}}
                  mode="date"
                  placeholder="Date"
                  format='YYYY[-]MM[-]DD'
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  date={this.state.selectedDate}
                  onDateChange={(date) => {this.setState({selectedDate: date}); console.log("MEME", date)}}
                  value={this.state.selectedDate}
                />
                <RNPickerSelect
                  items={times}
                  placeholder={{label: "Time", value: null}}
                  onValueChange={time => {
                    this.setState({
                      selectedTime: time,
                    });
                  }}
                  style={{inputAndroid: {
                      fontSize: 16,
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      borderWidth: 1,
                      borderColor: 'black',
                      color: 'black',
                      width: 150, height: 40}}}
                  value={this.state.selectedTime}
                  useNativeAndroidPickerStyle={false}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 5, marginLeft: 25}}>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Image source={{uri: 'https://i.imgur.com/KlUsZnU.png'}} style={{width: 50, height: 50, resizeMode: 'contain', marginBottom: 15}}/>
                </View>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Image source={{uri: 'https://i.imgur.com/0vFhofD.jpg'}} style={{width: 50, height: 50, resizeMode: 'contain', marginBottom: 15}}/>
                </View>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Image source={{uri: 'https://i.imgur.com/WFzG0tG.png'}} style={{width: 50, height: 50, resizeMode: 'contain', marginBottom: 15}}/>
                </View>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Image source={{uri: 'https://i.imgur.com/F6O9lMh.png'}} style={{width: 50, height: 50, resizeMode: 'contain', marginBottom: 15}}/>
                </View>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Image source={{uri: 'https://i.imgur.com/0uCb3FQ.png'}} style={{width: 50, height: 50, resizeMode: 'contain', marginBottom: 15}}/>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
                <RadioForm formHorizontal={true} animation={true}>
                  <RadioButton labelHorizontal={true} key={0} >
                    <RadioButtonInput
                      obj={{label: '', value: 1}}
                      index={0}
                      isSelected={this.state.selectedMood === 1}
                      onPress={(value) => {this.setState({selectedMood: value})}}
                      buttonStyle={{marginHorizontal: 24}}
                    />
                  </RadioButton>
                  <RadioButton labelHorizontal={true} key={1} >
                    <RadioButtonInput
                      obj={{label: '', value: 2}}
                      index={1}
                      isSelected={this.state.selectedMood === 2}
                      onPress={(value) => {this.setState({selectedMood: value})}}
                      buttonStyle={{marginHorizontal: 24}}
                    />
                  </RadioButton>
                  <RadioButton labelHorizontal={true} key={2} >
                    <RadioButtonInput
                      obj={{label: '', value: 3}}
                      index={2}
                      isSelected={this.state.selectedMood === 3}
                      onPress={(value) => {this.setState({selectedMood: value})}}
                      buttonStyle={{marginHorizontal: 24}}
                    />
                  </RadioButton>
                  <RadioButton labelHorizontal={true} key={3} >
                    <RadioButtonInput
                      obj={{label: '', value: 4}}
                      index={3}
                      isSelected={this.state.selectedMood === 4}
                      onPress={(value) => {this.setState({selectedMood: value})}}
                      buttonStyle={{marginHorizontal: 24}}
                    />
                  </RadioButton>
                  <RadioButton labelHorizontal={true} key={4} >
                    <RadioButtonInput
                      obj={{label: '', value: 5}}
                      index={4}
                      isSelected={this.state.selectedMood === 5}
                      onPress={(value) => {this.setState({selectedMood: value})}}
                      buttonStyle={{marginHorizontal: 24}}
                    />
                  </RadioButton>
                </RadioForm>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
                <RNPickerSelect
                  items={categories}
                  placeholder={{label: "Category", value: null}}
                  onValueChange={category => {
                    this.setState({
                      selectedCategory: category,
                    });
                  }}
                  style={{inputAndroid: {
                      fontSize: 16,
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      borderWidth: 1,
                      borderColor: 'black',
                      color: 'black',
                      width: 360, height: 40}}}
                  value={this.state.selectedCategory}
                  useNativeAndroidPickerStyle={false}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
                <TextInput
                  style={{ height: 200, width: 360, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={description => this.setState({description: description})}
                  value={this.state.description}
                  placeholder={"   Description"}
                  multiline={true}
                  textAlignVertical={'top'}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button title="Save" onPress={this.handleSave}>
                </Button>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      )
    }
  };
