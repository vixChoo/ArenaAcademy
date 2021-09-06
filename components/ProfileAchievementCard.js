import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function ProfileAchievementCard() {
  return (
    <View style={styles.container}>
      <Button
        title= 'Speedster'
        color= 'darkorange'
      />
      <Button
        title= 'Scholar'
        color= 'darkslateblue'
      />
     <Button
        title= 'Flawless'
        color= 'mediumseagreen'
      />  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});
