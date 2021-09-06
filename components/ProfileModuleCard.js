import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function ProfileModuleCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.module}>
        Loans (Intermediate) {'\n'}
        Budgeting (Intermediate) {'\n'}
        Interest (Intermediate) {'\n'}
        And 3 more ...
      </Text>      
      <Button 
        title= 'See Awarded e-Certificates'
        color= 'mediumseagreen'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  module: {
    fontSize: 16,
    padding: 10,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
});
