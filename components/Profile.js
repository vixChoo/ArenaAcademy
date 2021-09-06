import React, {Component} from 'react';
import Constants from 'expo-constants'
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { COLORS } from '../assets/constants/colors'
import ProfileCard from './ProfileCard';
import ProfileRankCard from './ProfileRankCard';
import ProfileModuleCard from './ProfileModuleCard';
import ProfileAchievementCard from './ProfileAchievementCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-paper';

export const Profile = () => {
    return (
        <ScrollView decelerationRate={'fast'} style={styles.container}>
           <View style={styles.container}>
            <Card>
              <ProfileCard />
            </Card>
            <Card>
              <ProfileRankCard />
            </Card>
            <Text style={styles.titleB}>Modules Completed</Text>
            <Card>
              <ProfileModuleCard />
            </Card>
            <Text style={styles.titleB}>Rarest Achievements</Text>
            <Card>
              <ProfileAchievementCard />
            </Card>
          </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      // paddingTop: Constants.statusBarHeight,
      marginTop: 10,
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
  