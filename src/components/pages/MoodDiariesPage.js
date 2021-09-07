import React, {Component} from 'react';
import { NewMoodDiaryCard } from '../elements/NewMoodDiaryCard'
import { Block, Text } from 'galio-framework';
import ExistingMoodDiaryCard from "../elements/ExistingMoodDiaryCard";
import {ScrollView, View, TouchableOpacity, ToastAndroid} from "react-native";

export default class MoodDiariesPage extends Component{

  constructor(props) {
    super(props);
    this.existingMoodDiaryCardList = this.existingMoodDiaryCardList.bind(this);
    this.state = {
      userMoodDiaryGroups: [],
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.18:8080/getUserMoodDiaries/' + this.props.navigation.dangerouslyGetParent().dangerouslyGetParent().dangerouslyGetState().routes[1].params.email)
      .then((response) => response.json())
      .then(userMoodDiaries => {
        this.setState({userMoodDiaryGroups: userMoodDiaries.data});
      });
  }

  existingMoodDiaryCardList() {
    return this.state.userMoodDiaryGroups.map((moodDiaryGroup, index) => {
      return (
        <View style={{marginBottom: 20}}>
          <ExistingMoodDiaryCard key={index} diaryGroup={moodDiaryGroup} navigation={this.props.navigation}/>
        </View>
      )
    })
  }

  render() {
    return(
      <View>
        <Text size={25} style={{marginTop: 10, marginLeft: 15, fontWeight: "bold"}}>
          Mood
        </Text>
        <Text size={15} style={{marginLeft: 15, fontWeight: "bold"}}>
          Diary Manager
        </Text>
        <ScrollView>
          <Block style={{marginBottom: 75}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('New Mood Diary', {
              email: this.props.navigation.dangerouslyGetParent().dangerouslyGetParent().dangerouslyGetState().routes[1].params.email
            })}>
              <NewMoodDiaryCard/>
            </TouchableOpacity>
            {this.existingMoodDiaryCardList()}
          </Block>
        </ScrollView>
      </View>
    )
  }
}


