import React, {Component} from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Image, Card} from 'react-native-elements';
import {Text} from 'galio-framework'

export default class ProfilePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      forename: '',
      surname: '',
      county: '',
      gpPractice: '',
      generalPractitionerForename: '',
      generalPractitionerSurname: '',
      communityNavigatorForename: '',
      communityNavigatorSurname: '',
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.18:8080/getUserProfilePageDetails/' + this.props.navigation.dangerouslyGetParent().dangerouslyGetState().routes[1].params.email)
      .then((response) => response.json())
      .then(responseJSON => {
        console.log(responseJSON)
        this.setState({
          navigatorID: responseJSON.data.navigatorID,
          emailAddress: this.props.navigation.dangerouslyGetParent().dangerouslyGetState().routes[1].params.email,
          forename: responseJSON.data.forename,
          surname: responseJSON.data.surname,
          county: this.determineCounty(responseJSON.data.practitionerID),
          gpPractice: responseJSON.data.gpPractice,
          generalPractitionerForename: responseJSON.data.generalPractitionerForename,
          generalPractitionerSurname: responseJSON.data.generalPractitionerSurname,
          communityNavigatorForename: responseJSON.data.communityNavigatorForename,
          communityNavigatorSurname: responseJSON.data.communityNavigatorSurname
        });
      });
  }

  determineCounty(practitionerID) {
    if (practitionerID == 1) {
      return 'Antrim'
    } else if (practitionerID == 2) {
      return 'Armagh'
    } else if (practitionerID == 3) {
      return 'Derry / Londonderry'
    } else if (practitionerID == 4) {
      return 'Down'
    } else if (practitionerID == 5) {
      return 'Fermanagh'
    } else if (practitionerID == 6) {
      return 'Tyrone'
    } else {
      return '?'
    }
  }

  render() {
    return(
      <View>
        <Text size={25} style={{marginTop: 10, marginLeft: 15, fontWeight: "bold"}}>
          Profile
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Card title={this.state.forename + " " + this.state.surname} containerStyle={{width: 380}}>
              <Image
                source={{ uri: 'https://i.imgur.com/fK8LEv7.png' }}
                style={{ width: 200, height: 200, marginLeft: 80 }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>Email:</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>County:</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>GP Practice:</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>GP:</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>Community Navigator:</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: "grey"}}>{this.state.emailAddress}</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: "grey"}}>{this.state.county}</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: "grey"}}>{this.state.gpPractice}</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: "grey"}}>{this.state.generalPractitionerForename} {this.state.generalPractitionerSurname}</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: "grey"}}>{this.state.communityNavigatorForename} {this.state.communityNavigatorSurname}</Text>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </View>
    )
  }
}
