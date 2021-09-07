import { Card, theme } from 'galio-framework';
import * as React from "react";
import {StyleSheet, Dimensions, View} from 'react-native';
import {Tile} from 'react-native-elements'

const { width } = Dimensions.get('screen');

class GeneralRecommendations extends React.Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Tile
            containerStyle={{marginLeft: 15}}
            imageSrc={{uri: 'https://i.imgur.com/MFKY4M8.jpg'}}
            title="Get plenty of sleep"
            titleStyle={{fontSize: 20}}
            featured
            caption="Sleep helps regulate chemicals that are important in managing our moods and emotions."
            captionStyle={{fontSize: 15}}
            width={190}
            height={190}
          />
          <Tile
            containerStyle={{marginLeft: 10}}
            imageSrc={{uri: 'https://i.imgur.com/KeTxWxq.jpg'}}
            title="Eat well"
            titleStyle={{fontSize: 20}}
            featured
            caption="Eat a balanced diet - Vitamins such as iron or B12 can raise our mood. Reduce caffeine intake as it can make you feel jittery or anxious."
            captionStyle={{fontSize: 15}}
            width={190}
            height={190}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Tile
            containerStyle={{marginLeft: 15, marginTop: 10}}
            imageSrc={{uri: 'https://i.imgur.com/IWsO3Kc.jpg'}}
            title="Avoid substances"
            titleStyle={{fontSize: 20}}
            featured
            caption="Alchohol can cause depressive feelings, while withdrawals from smoking and drugs contribute more negative effects."
            captionStyle={{fontSize: 15}}
            width={190}
            height={190}
          />
          <Tile
            containerStyle={{marginLeft: 10, marginTop: 10}}
            imageSrc={{uri: 'https://i.imgur.com/6fDarTX.jpg'}}
            title="Reach out"
            titleStyle={{fontSize: 20}}
            featured
            caption="If you feel like you're struggling, reaching out can help. Talk to family, friends or your GP."
            captionStyle={{fontSize: 15}}
            width={190}
            height={190}
          />
        </View>
      </View>
    )
  }
}

class ThoughtsRecommendations extends React.Component {
  render() {
    return (
      <Tile
        containerStyle={{marginLeft: 15}}
        imageSrc={{uri: 'https://i.imgur.com/du0BjBj.png'}}
        title="Manage stress"
        titleStyle={{fontSize: 20, color: 'black', fontWeight: 'bold'}}
        featured
        caption="Try to manage your responsibilities and worries by making a list or a schedule of when you can resolve each issue."
        captionStyle={{fontSize: 15, color: 'black', fontWeight: 'bold'}}
        width={190}
        height={190}
      />
    )
  }
}

class FamilyRecommendations extends React.Component {
  render() {
    return (
      <Tile
        containerStyle={{marginLeft: 15}}
        imageSrc={{uri: 'https://i.imgur.com/pG67IZ5.jpg'}}
        title="Recognise communication issues"
        titleStyle={{fontSize: 19, marginTop: 20}}
        featured
        caption="Consider that each family member's response to stress affects how they communicate (Fight or flight)."
        captionStyle={{fontSize: 15, marginBottom: 30}}
        width={190}
        height={190}
      />
    )
  }
}

class FriendsRecommendations extends React.Component {
  render() {
    return (
      <Tile
        containerStyle={{marginLeft: 15}}
        imageSrc={{uri: 'https://i.imgur.com/TpRXyW4.jpg'}}
        title="Talk it out"
        titleStyle={{fontSize: 20}}
        featured
        caption="Let your friend know how you feel about the friendship (There’s a chance they feel the same way.)"
        captionStyle={{fontSize: 15}}
        width={190}
        height={190}
      />
    )
  }
}

class RelationshipRecommendations extends React.Component {
  render() {
    return (
      <Tile
        containerStyle={{marginLeft: 15}}
        imageSrc={{uri: 'https://i.imgur.com/uycpyb3.jpg'}}
        title="Focus inward"
        titleStyle={{fontSize: 20, color: 'black', fontWeight: 'bold'}}
        featured
        caption="If you feel insecure about your relationship, reflect on whether you are influenced by reality or your mind."
        captionStyle={{fontSize: 15, color: 'black', fontWeight: 'bold'}}
        width={190}
        height={190}
      />
    )
  }
}

class HobbyRecommendations extends React.Component {
  render() {
    return (
      <Tile
        containerStyle={{marginLeft: 15}}
        imageSrc={{uri: 'https://i.imgur.com/q0tVNAV.jpg'}}
        title="Do something you enjoy"
        titleStyle={{fontSize: 20, color: 'black', fontWeight: 'bold'}}
        featured
        caption="Even if it was only a childhood hobby, embracing what we enjoy can fulfill our minds and hearts."
        captionStyle={{fontSize: 15, color: 'black', fontWeight: 'bold'}}
        width={190}
        height={190}
      />
    )
  }
}

class SchoolRecommendations extends React.Component {
  render() {
    return (
      <Tile
        containerStyle={{marginLeft: 15}}
        imageSrc={{uri: 'https://i.imgur.com/9JKyyPj.jpg'}}
        title="Reflect on stress causes"
        titleStyle={{fontSize: 20, color: 'black', fontWeight: 'bold'}}
        featured
        caption="If exams are on your mind, try to schedule revision time to deal with that stressing factor."
        captionStyle={{fontSize: 15, color: 'black', fontWeight: 'bold'}}
        width={190}
        height={190}
      />
    )
  }
}

class WorkRecommendations extends React.Component {
  render() {
    return (
      <Tile
        containerStyle={{marginLeft: 15}}
        imageSrc={{uri: 'https://i.imgur.com/nVlEirn.jpg'}}
        title="Increase social support"
        titleStyle={{fontSize: 20}}
        featured
        caption="If things at work are tough, talk to a manager or co-worker about your problems and how to overcome them."
        captionStyle={{fontSize: 15}}
        width={190}
        height={190}
      />
    )
  }
}

export { GeneralRecommendations, ThoughtsRecommendations,
  FamilyRecommendations, FriendsRecommendations, RelationshipRecommendations,
  HobbyRecommendations, SchoolRecommendations, WorkRecommendations };
