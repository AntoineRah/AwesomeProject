import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AuthStack.type';
import {SignupScreen} from '../../screens/SignupScreen';
import {LoginScreen} from '../../screens/LoginScreen';
import {VerificationScreen} from '../../screens/VerificationScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OTP" component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
