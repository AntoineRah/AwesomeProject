import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './SplashScreen.style';
function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export {SplashScreen};
