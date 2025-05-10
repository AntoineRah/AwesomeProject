import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../hooks/authentication';
import { HomeTabs } from './hometabs';
import AuthStack from './auth/AuthStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {isAuth} = useAuth();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Stack.Screen name="Home" component={HomeTabs} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export {RootNavigator};
