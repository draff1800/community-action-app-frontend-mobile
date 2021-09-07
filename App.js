import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./src/components/pages/LoginPage";
import RegisterPage from "./src/components/pages/RegisterPage";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoodDiariesPage from "./src/components/pages/MoodDiariesPage";
import CommunityNavigatorDetailsPage from "./src/components/pages/CommunityNavigatorDetailsPage";
import ProfilePage from "./src/components/pages/ProfilePage";
import HelpfulInformationPage from "./src/components/pages/HelpfulInformationPage";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MoodCalendarPage from "./src/components/pages/MoodCalendarPage";
import RecommendationsPage from "./src/components/pages/RecommendationsPage";
import NewMoodDiaryPage from "./src/components/pages/NewMoodDiaryPage";
import UpdateMoodDiaryPage from "./src/components/pages/UpdateMoodDiaryPage";
import CommunityNavigatorChatPage from "./src/components/pages/CommunityNavigatorChatPage"
import {Image, View} from 'react-native'

const appStack = createStackNavigator();
const userTopTabStack = createMaterialTopTabNavigator();
const moodBottomTabStack = createMaterialBottomTabNavigator();
const recommendationsBottomTabStack = createMaterialBottomTabNavigator();

function MoodBottomTabs() {
  return (
    <moodBottomTabStack.Navigator activeColor="#FFFFFF" style={{ backgroundColor: 'white' }}>
      <userTopTabStack.Screen name="Mood Diaries" component={MoodDiariesPage} />
      <userTopTabStack.Screen name="Mood Calendar" component={MoodCalendarPage} />
    </moodBottomTabStack.Navigator>
  );
}

function UserTopTabs() {
  return (
    <userTopTabStack.Navigator activeColor="#e91e63" style={{ backgroundColor: 'tomato' }}>
      <userTopTabStack.Screen name="Mood" component={MoodBottomTabs}/>
      <userTopTabStack.Screen name="Recs" component={RecommendationsPage}/>
      <userTopTabStack.Screen name="Comm Nav" component={CommunityNavigatorDetailsPage} />
      <userTopTabStack.Screen name="Help" component={HelpfulInformationPage} />
      <userTopTabStack.Screen name="Profile" component={ProfilePage} />
    </userTopTabStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <appStack.Navigator>
        <appStack.Screen name="LoginPage" component={LoginPage} />
        <appStack.Screen name="RegisterPage" component={RegisterPage} />
        <appStack.Screen name="Community Action App" component={UserTopTabs}/>
        <appStack.Screen name="New Mood Diary" component={NewMoodDiaryPage} />
        <appStack.Screen name="UpdateMoodDiaryPage" component={UpdateMoodDiaryPage} />
        <userTopTabStack.Screen name="Navigator Chat" component={CommunityNavigatorChatPage}/>
      </appStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
