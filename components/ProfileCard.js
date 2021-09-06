import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Dennis Tan
      </Text>
      <Text style={styles.subtitle}>
        Kota Damansara
      </Text>
      <Image style={styles.logo} source={require('../assets/images/profile.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
  logo: {
    height: 160,
    width: 160,
  }
});
