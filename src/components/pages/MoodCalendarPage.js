import React, {Component} from 'react';
import {View,Dimensions} from 'react-native';
import {Text} from 'galio-framework';
import Icon from 'react-native-vector-icons/Ionicons';
import {LineChart} from 'react-native-chart-kit'
import RNPickerSelect from "react-native-picker-select";
import { Tooltip } from 'react-native-elements'

const lineChartRanges = [];

let monthlyMoodScoreArray = [0, 0, 0, 0, 0, 0];

export default class MoodCalendarPage extends Component{

  constructor(props) {
    super(props);
    this.refreshChartData = this.refreshChartData.bind(this);
    this.getMoodCalendarDataLastSixMonths = this.getMoodCalendarDataLastSixMonths.bind(this);

    this.state = {
      lineChartRange: "6 Months",
      lastSixMonths: ["Dec 2019", "Jan 2020", "Feb 2020", "Mar 2020", "Apr 20202", "May 2020"],
      moodRecords: [{},{},{},{},{},{}],
      moodScoreArray: [0, 0, 0, 0, 0, 0],
      lastSevenDays: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    };
  }

  componentDidMount() {
    this.refreshChartData("6 Months");
  }

  refreshChartData(lineChartRange) {
    if(lineChartRange == "6 Months") {
      console.log("Hey month");
      this.getMoodCalendarDataLastSixMonths();
    }
  };

  getMoodCalendarDataLastSixMonths = () => {
    let monthlyMoodScoreArray = [];

    fetch('http://192.168.0.18:8080/getUserMoodCalendarDataLastSixMonths/' + this.props.navigation.dangerouslyGetParent().dangerouslyGetParent().dangerouslyGetState().routes[1].params.email)
      .then((response) => response.json())
      .then(moodTrendData => {
        this.setState({lastSixMonths: moodTrendData.data[0]});
        this.setState({moodRecords: moodTrendData.data[1]});
      })
      .then(() => {
        this.state.lastSixMonths.forEach((month) => {
          let monthlyMoodRecordScore = 0;

          this.state.moodRecords.forEach((moodRecord) => {
            if (month == moodRecord.month) {
              monthlyMoodRecordScore = moodRecord.averageMoodScore
            }
          });

          monthlyMoodScoreArray.push(monthlyMoodRecordScore);
          monthlyMoodRecordScore = 0;
        })}
      )
      .then(() => {this.setState({moodScoreArray: monthlyMoodScoreArray})})
  };


  render() {
    return(
      <View>
        <Text size={25} style={{marginTop: 10, marginLeft: 15, fontWeight: "bold"}}>
          Mood
        </Text>
        <Text size={15} style={{marginLeft: 15, marginBottom: 20, fontWeight: "bold"}}>
          Mood Metrics
        </Text>
        <RNPickerSelect
          items={lineChartRanges}
          placeholder={{label: "6 months", value: "Last 6 Months"}}
          onValueChange={time => {
            {this.refreshChartData(time)}
          }}
          style={{inputAndroid: {
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: 'grey',
              color: 'grey',
              width: 360, height: 40,
              marginHorizontal: 14}}}
          value={this.state.selectedTime}
          useNativeAndroidPickerStyle={false}
        />
        <LineChart
          data={{
            labels: this.state.lastSixMonths,
            datasets: [{
              data: this.state.moodScoreArray
            }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#0095ff',
            backgroundGradientFrom: '#0095ff',
            backgroundGradientTo: '#0095ff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft: 13,
            marginRight: 28,
            marginTop: 10
          }}
        />
      </View>
    )
  }
}


