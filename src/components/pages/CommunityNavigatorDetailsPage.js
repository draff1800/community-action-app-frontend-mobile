import React, {Component} from 'react';
import {View, TouchableOpacity, ActivityIndicator, Linking} from 'react-native';
import {Image, Card} from 'react-native-elements';
import {Text} from 'galio-framework'

export default class CommunityNavigatorDetailsPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navigatorID: '',
      navigatorEmail: '',
      phoneNumber: '',
      forename: '',
      surname: '',
      officeAddress: ''
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.18:8080/getCommunityNavigatorDetails/' + this.props.navigation.dangerouslyGetParent().dangerouslyGetState().routes[1].params.email)
      .then((response) => response.json())
      .then(responseJSON => {
        this.setState({navigatorID: responseJSON.data.navigatorID,
            navigatorEmail: responseJSON.data.navigatorEmail,
            phoneNumber: responseJSON.data.phoneNumber,
            forename: responseJSON.data.forename,
            surname: responseJSON.data.surname,
            officeAddress: responseJSON.data.officeAddress})
      });
  }

  determineProfilePicture() {
    if (this.state.navigatorID == 1) {
      return 'https://i.imgur.com/cVKaNIB.jpg'
    } else if (this.state.navigatorID == 2) {
      return 'https://i.imgur.com/Y1jCyvw.jpg'
    } else if (this.state.navigatorID == 3) {
      return 'https://i.imgur.com/nmngPIJ.jpg'
    } else if (this.state.navigatorID == 4) {
      return 'https://i.imgur.com/crVXJTF.jpg'
    } else if (this.state.navigatorID == 5) {
      return 'https://i.imgur.com/SaXVj9e.jpg'
    } else if (this.state.navigatorID == 6) {
      return 'https://i.imgur.com/lSW95ke.jpg'
    } else {
      return 'https://i.imgur.com/D6MZ0O1.jpg'
    }
  }

  render() {
    return(
      <View>
        <Text size={25} style={{marginTop: 10, marginLeft: 15, fontWeight: "bold"}}>
          Your Community Navigator
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Card title={this.state.forename + " " + this.state.surname} containerStyle={{width: 380}}>
              <Image
                source={{ uri: this.determineProfilePicture() }}
                style={{ width: 200, height: 200, marginLeft: 80 }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>Email:</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>Phone:</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, fontWeight: "bold"}}>Office:</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: 'blue'}} onPress={() => Linking.openURL(('mailto:' + this.state.navigatorEmail))}>{this.state.navigatorEmail}</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: "grey"}}>{this.state.phoneNumber}</Text>
                  <Text size={15} style={{marginTop: 20, marginLeft: 15, color: "grey"}}>{this.state.officeAddress}</Text>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </View>
    )
  }
}
