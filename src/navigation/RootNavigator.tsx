import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from '../hooks/authentication/AuthStore';
import {HomeTabs} from './hometabs';
import AuthStack from './auth/AuthStack';
import {linking} from './linking';

export type RootStackParamList = {
  Home:{screen: 'Main'};
  Auth: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const accessToken = useAuthStore(state => state.accessToken);
  console.log(useAuthStore.getState());

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {accessToken ? (
          <Stack.Screen name="Home" component={HomeTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
