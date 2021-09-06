import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function WeeklyAchievementACard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Studious
      </Text>
      <Text style={styles.subtitle}>
        Complete at least one lesson a day during the challenge period.
      </Text>
      <Text style={styles.title}>
        {'\n'}Flawless
      </Text>
      <Text style={styles.subtitle}>
        Get a perfect score for the refresher quiz for your current module.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 15,
    color: '#3b3b3b'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 13,
  },
});
