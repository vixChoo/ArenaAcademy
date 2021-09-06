import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function WeeklyChallengeCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        6th Sept - 12th Sept
      </Text>
      <Text style={styles.subtitle}>
        Race to the top by completing this week's achievements.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#dd0000',
  },
  subtitle: {
    fontSize: 13,
  },
});
