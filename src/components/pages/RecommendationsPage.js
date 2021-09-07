import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'galio-framework';
import Icon from 'react-native-vector-icons/Ionicons';
import { GeneralRecommendations, ThoughtsRecommendations,
  FamilyRecommendations, FriendsRecommendations, RelationshipRecommendations,
  HobbyRecommendations, SchoolRecommendations, WorkRecommendations } from "../elements/RecommendationTiles";

export default class RecommendationsPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      diaryEntryCount: 0,
      neutralOrNegativeEntryCount: 0,
      recommendationThresholdsMet: [{thoughts: false},{family: false},{friends: false},{relationships: false},
        {hobbies: false},{school: false},{work: false}]
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.18:8080/getRecommendationsMetaDataForUser/' + this.props.navigation.dangerouslyGetParent().dangerouslyGetState().routes[1].params.email)
      .then((response) => response.json())
      .then(responseJSON => {
        this.setState({diaryEntryCount: responseJSON.data[0].diaryEntryCount,
            neutralOrNegativeEntryCount: responseJSON.data[1].neutralOrNegativeEntryCount,
            recommendationThresholdsMet: responseJSON.data[2].recommendationThresholdsMet})
      });
  }

  render() {
    return(
      <View style={{marginBottom: 75}}>
        <Text size={25} style={{marginTop: 10, marginLeft: 15, fontWeight: "bold"}}>
          Recommendations
        </Text>
        <ScrollView>
          <Text size={15} style={{marginLeft: 15, marginBottom: 5, fontWeight: "bold"}}>
            General Tips
          </Text>
          <GeneralRecommendations/>
          {this.state.recommendationThresholdsMet[0].thoughts == true && <>
            <Text size={15} style={{marginLeft: 15, marginBottom: 5, marginTop: 20, fontWeight: "bold"}}>
              For your feelings about Inner Thoughts...
            </Text>
            <ThoughtsRecommendations/>
          </>}
          {this.state.recommendationThresholdsMet[1].family == true && <>
          <Text size={15} style={{marginLeft: 15, marginBottom: 5, marginTop: 20, fontWeight: "bold"}}>
            For your feelings about Family...
          </Text>
          <FamilyRecommendations/>
          </>}
          {this.state.recommendationThresholdsMet[2].friends == true && <>
          <Text size={15} style={{marginLeft: 15, marginBottom: 5, marginTop: 20, fontWeight: "bold"}}>
            For your feelings about Friends...
          </Text>
          <FriendsRecommendations/>
          </>}
          {this.state.recommendationThresholdsMet[3].relationships == true && <>
          <Text size={15} style={{marginLeft: 15, marginBottom: 5, marginTop: 20, fontWeight: "bold"}}>
            For your feelings about Relationships...
          </Text>
          <RelationshipRecommendations/>
          </>}
          {this.state.recommendationThresholdsMet[4].hobbies == true && <>
          <Text size={15} style={{marginLeft: 15, marginBottom: 5, marginTop: 20, fontWeight: "bold"}}>
            For your feelings about Hobbies and / or Activities...
          </Text>
          <HobbyRecommendations/>
          </>}
          {this.state.recommendationThresholdsMet[5].school == true && <>
          <Text size={15} style={{marginLeft: 15, marginBottom: 5, marginTop: 20, fontWeight: "bold"}}>
            For your feelings about School...
          </Text>
          <SchoolRecommendations/>
          </>}
          {this.state.recommendationThresholdsMet[6].work == true && <>
          <Text size={15} style={{marginLeft: 15, marginBottom: 5, marginTop: 20, fontWeight: "bold"}}>
            For your feelings about Work...
          </Text>
          <WorkRecommendations/>
          </>}
        </ScrollView>
      </View>
    )
  }
}

