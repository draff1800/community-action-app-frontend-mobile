import React, {Component, useEffect} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Text from "galio-framework/src/Text";
import firebaseApp from '../../../firebase/Fire'
import {View} from "react-native";

class CommunityNavigatorChatPage extends Component {

  // constructor(props) {
  //   super(props);
  //   Fire.shared = new Fire(this.props.route.params.email, this.props.route.params.password, "Login");
  //   this.state = {
  //     messages: [],
  //   };
  // }
  //
  // componentDidMount() {
  //   console.log("DO WE GET HERE");
  //   Fire.shared.on(message =>
  //     this.setState(previousState => ({
  //       messages: GiftedChat.append(previousState.messages, message),
  //     }))
  //   );
  //
  //   console.log("TEST 2", Fire.shared);
  // }
  //
  // componentWillUnmount() {
  //   Fire.shared.off();
  // }
  //
  // get user() {
  //   return {
  //     name: this.props.navigation.state.params.name,
  //     _id: Fire.shared.uid,
  //   };
  // }

  render() {
    return (
      <View>
        {/*<GiftedChat*/}
        {/*  messages={this.state.messages}*/}
        {/*  onSend={Fire.shared.send()}*/}
        {/*  user={this.user()}*/}
        {/*/>*/}
        <Text>Hello</Text>
      </View>
    )}
}

export default CommunityNavigatorChatPage;

