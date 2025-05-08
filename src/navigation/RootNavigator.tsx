import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignupScreen} from '../screens/SignupScreen';
import {LoginScreen} from '../screens/LoginScreen';
import type {RootStackParamList} from '../screens/type';
import {VerificationScreen} from '../screens/VerificationScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OTP" component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export {RootNavigator};
