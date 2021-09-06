import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function ProfileRankard() {
  return (
    <View style={styles.container}>
      <Text style={styles.rankstate}>
        Rank 1 in Selangor
      </Text>
      <Text style={styles.ranknation}>
        Rank 22 in Malaysia
      </Text>      
      <Button
        title='Intermediate'
        color='slategrey'
      />
      <Text style={{ fontWeight: 'bold', color: 'dimgrey'}}>
        Level 2
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  rankstate: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'crimson',
  },
  ranknation: {
    fontSize: 22,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
});
