import {Card1, theme, Text, Block} from 'galio-framework';
import * as React from "react";
import {StyleSheet, Dimensions, ToastAndroid, TouchableOpacity} from 'react-native';
import { View, Image, Alert } from 'react-native'
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');


export class AddMoodDiaryCard extends React.Component {

  constructor(props) {
    super(props);
    this.diaryCardGroup = this.diaryCardGroup.bind(this);
    this.state = {
      diaryGroup: this.props.diaryGroup,
      diaryExists: true,
    }
  }

  determineMoodIcon(mood) {
    if (mood == 1) {
      return 'https://i.imgur.com/KlUsZnU.png'
    } else if (mood == 2) {
      return 'https://i.imgur.com/PlTlYnJ.jpg'
    } else if (mood == 3) {
      return 'https://i.imgur.com/WFzG0tG.png'
    } else if (mood == 4) {
      return 'https://i.imgur.com/F6O9lMh.png'
    } else if (mood == 5) {
      return 'https://i.imgur.com/0uCb3FQ.png'
    } else {
      return 'https://i.imgur.com/D6MZ0O1.jpg'
    }
  }

  determineMood(mood) {
    if (mood == 1) {
      return 'Very down'
    } else if (mood == 2) {
      return 'Down'
    } else if (mood == 3) {
      return 'Neutral'
    } else if (mood == 4) {
      return 'Happy'
    } else if (mood == 5) {
      return 'Very happy'
    } else {
      return '?'
    }
  }

  diaryCardGroup() {
    return this.state.diaryGroup.map((diary, index) => {
      return (
        <View style={{flexDirection: 'column', marginVertical: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: this.determineMoodIcon(diary.diarymood)}} style={{width: 50, height: 50, marginRight: 10}}/>
            <View style={{flexDirection: 'column'}}>
              <Text size={18} style={{width: 95}}>{this.determineMood(diary.diarymood)}</Text>
              <Text size={12} style={{width: 110}}>{diary.diarycategory}</Text>
              <Text size={10}>{diary.diarytime}</Text>
            </View>
            <TouchableOpacity onPress={() => this.handleDeleteButtonPress(index, diary.diaryid)}>
              <Image source={{uri: 'https://i.imgur.com/MLSnwXe.png'}} style={{width: 30, height: 30, resizeMode: 'stretch', marginLeft: 50, marginRight: 20, marginTop: 5}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateMoodDiaryPage',
              {diaryDate: diary.diarydate, diaryTime: diary.diarytime, diaryMood: diary.diarymood, diaryCategory: diary.diarycategory, diaryDescription: diary.diarydescription, diaryID: diary.diaryid})}>
              <Image source={{uri: 'https://i.imgur.com/yzPUWt7.png'}} style={{width: 30, height: 30, resizeMode: 'stretch', marginRight: 20, marginTop: 5}}/>
            </TouchableOpacity>
            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity onPress={() => this.handleTogglePublishButtonPress(diary.diaryid, diary.diarypublished)}>
                <Image source={{uri: 'https://i.imgur.com/M19OQLZ.png'}} style={{width: 30, height: 30, resizeMode: 'stretch', marginTop: 5}}/>
              </TouchableOpacity>
              {diary.diarypublished == "Yes" &&
              <Image source={{uri: 'https://i.imgur.com/UWoeUJS.png'}}
                     style={{width: 10, height: 10, marginLeft: 10, marginTop: 5}}/>
              }
            </View>
          </View>
        </View>
      )
    })
  }

  handleDeleteButtonPress(index, diaryID) {
    Alert.alert(
      'Delete Diary Entry',
      'Are you sure you want to delete this entry?',
      [{text: 'Cancel', style: 'cancel'},
        { text: 'OK', onPress: () => this.handleDeleteMoodDiary(index, diaryID) },
      ],
      { cancelable: false }
    );
  }

  handleDeleteMoodDiary(index, diaryID) {
    fetch('http://192.168.0.18:8080/deleteMoodDiary/' + diaryID, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then(userMoodDiaries => {
        ToastAndroid.show('Entry deleted.', ToastAndroid.SHORT);
      });
    this.setState({diaryGroup: this.state.diaryGroup.filter(diary => diary.diaryid !== diaryID)});
    if (this.state.diaryGroup.length < 1) {
      this.setState({diaryExists: false})
    }
  }

  handleTogglePublishButtonPress(diaryID, diaryPublished) {
    if (diaryPublished != "Yes") {
      Alert.alert(
        'Publish Diary Entry to GP',
        'Make this diary entry visible to your GP?',
        [{text: 'Cancel', style: 'cancel'},
          {text: 'OK', onPress: () => this.handleTogglePublishMoodDiary(diaryID, diaryPublished)},
        ],
        {cancelable: false}
      );
    } else {
      Alert.alert(
        'Retract Diary Entry',
        'Conceal this diary entry? (GP may have already reviewed it)',
        [{text: 'Cancel', style: 'cancel'},
          {text: 'OK', onPress: () => this.handleTogglePublishMoodDiary(diaryID)},
        ],
        {cancelable: false}
      );
    }
  }

  handleTogglePublishMoodDiary(diaryID, diaryPublished) {
    fetch('http://192.168.0.18:8080/toggleMoodDiaryPublishState/' + diaryID, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(responseJson => {
      })
  }

  render() {
    return (
      <View>
        {this.state.diaryExists && <>
          <Text size={18} style={{paddingLeft: 16}}>{this.props.diaryGroup[0].diarydate}</Text>
          <Card>
            {this.diaryCardGroup()}
          </Card>
        </>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    height: 200,
    marginVertical: theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  cardImage: {
    width: width,
    height: 100,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});

export default AddMoodDiaryCard;

