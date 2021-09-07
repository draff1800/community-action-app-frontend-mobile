import React, {Component} from 'react';
import {View, TouchableOpacity, ActivityIndicator, Linking, ScrollView} from 'react-native';
import {Image, Card} from 'react-native-elements';
import {Text} from 'galio-framework'

export default class HelpfulInformationPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      generalPractitionerForename: '',
      generalPractitionerSurname: '',
      gpPractice: '',
      gpPracticeAddress: '',
      gpPracticePhone: '',
      gpPracticeWebsite: '',
      communityNavigatorForename: '',
      communityNavigatorSurname: '',
      communityNavigatorEmail: '',
      communityNavigatorPhone: '',
      communityNavigatorAddress: ''
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.18:8080/getUserHelpfulInformationPageDetails/' + this.props.navigation.dangerouslyGetParent().dangerouslyGetState().routes[1].params.email)
      .then((response) => response.json())
      .then(responseJSON => {
        this.setState({generalPractitionerForename: responseJSON.data.generalPractitionerForename,
          generalPractitionerSurname: responseJSON.data.generalPractitionerSurname,
          gpPractice: responseJSON.data.gpPractice,
          gpPracticeAddress: responseJSON.data.gpPracticeAddress,
          gpPracticePhone: responseJSON.data.gpPracticePhone,
          gpPracticeWebsite: responseJSON.data.gpPracticeWebsite,
          communityNavigatorForename: responseJSON.data.communityNavigatorForename,
          communityNavigatorSurname: responseJSON.data.communityNavigatorSurname,
          communityNavigatorEmail: responseJSON.data.communityNavigatorEmail,
          communityNavigatorPhone: responseJSON.data.communityNavigatorPhone,
          communityNavigatorAddress: responseJSON.data.gpPracticeAddress
        })
      });
  }

  render() {
    return(
      <View>
        <ScrollView>
          <Text size={25} style={{marginTop: 10, marginLeft: 15, fontWeight: "bold"}}>
            Helpful Resources
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Card title="Contact Information" containerStyle={{width: 380}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>{this.state.gpPractice}:</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    Website:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'blue'}} onPress={() => Linking.openURL(this.state.gpPracticeWebsite)}>{this.state.gpPractice}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    Phone:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'grey'}}>{this.state.gpPracticePhone}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    Address:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'grey'}}>{this.state.gpPracticeAddress}</Text>
                    </View>
                    <Text> </Text>
                    <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>Community Navigator ({this.state.communityNavigatorForename} {this.state.communityNavigatorSurname}):</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    Email:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'blue'}} onPress={() => Linking.openURL(('mailto:' + this.state.communityNavigatorEmail))}>{this.state.communityNavigatorEmail}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    Phone:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'grey'}}>{this.state.communityNavigatorPhone}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    Address:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'grey'}}>{this.state.communityNavigatorAddress}</Text>
                    </View>
                    <Text> </Text>
                    <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>Helplines:</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    AnxietyUK:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'grey'}}>03444 775 774</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    Samaritans:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'grey'}}>116 123</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>    SANE:</Text>
                      <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'grey'}}>0300 304 7000</Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
