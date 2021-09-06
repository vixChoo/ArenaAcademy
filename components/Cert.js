import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, navigation} from '@react-navigation/native-stack';
import { Actions } from 'react-native-router-flux';

export const Cert = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.completion_message}>
        Module Complete!
      </Text>
      <Text style={styles.cert_title}>
        Budgeting
      </Text>
      <Text style={styles.paragraph}>
        Intermediate
      </Text>
      <Text style={styles.level}>
      Level 2
      </Text>
        <AssetExample />
        <Text style={styles.congrats}>Congratulations</Text>
        <Text style={styles.congrats}>Dennis Tan</Text>
        <Text style={styles.unlock}>Pay to unlock cert</Text>

        <Button color='green'
        title="Tap here to save eCertificate"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 5,
  },
  paragraph:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  completion_message:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#ff5700'
  },
  cert_title:{
    fontSize: 47,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#31A062'
  },
  level:{
    fontSize: 10,
        fontWeight: 'bold',
    textAlign: 'center',
  },

    congrats:{
    fontSize: 25,
        fontWeight: 'bold',
    textAlign: 'center',
  },

  unlock:{
    fontSize:25,
    textAlign:'center',
    fontWeight: 'bold',
    color:'#ff0000'
  }
});



