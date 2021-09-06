import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
import WeeklyChallengeCard from './WeeklyChallengeCard';
import WeeklyAchievementACard from './WeeklyAchievementACard.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';




function MyTabs() {
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#F92036',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={Course}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="sword-cross"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scoreboard"
        component={Scoreboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ballot" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Your Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export const Home = () => {
  return (
      <ScrollView decelerationRate={'fast'}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginTop:40}}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', padding: 10, paddingLeft: 30}}>
            Welcome back to the {'\n'}Arena, Dennis!
          </Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 30, paddingLeft: 30}}>
          Modules
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'tomato', alignSelf: 'flex-end', paddingRight: 20}}> See all → </Text>
        <View style={{ height: 190}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={'fast'} style={{ paddingLeft: 25 , paddingTop: 10 }}>
            <Image style={{ height: 165, width: 130 }} source= {require('../assets/images/beginner.png')} />
            <Image style={{ height: 165, width: 130 , marginLeft: 15 }} source= {require('../assets/images/intermediate.png')} />
            <Image style={{ height: 165, width: 130 , marginLeft: 15}} source= {require('../assets/images/advanced.png')} />
            <Image style={{ height: 165, width: 130 , marginLeft: 15, marginRight: 47}} source= {require('../assets/images/soon.png')} />
          </ScrollView>
        </View>
        <View style={{ paddingLeft:30, paddingTop: 20, maxHeight: 120, marginRight: 30}}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: 10}}>
          Weekly Challenges
        </Text>
        <Card>
          <WeeklyChallengeCard />
        </Card>
        <View style={{ paddingTop: 5, minHeight: 220}}>
        <Card>
          <WeeklyAchievementACard />
        </Card>
        </View>
        </View>
        </View>
      </ScrollView>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    title: {
      margin: 5,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    titleB: {
      paddingTop: 10,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  