import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from '../hooks/authentication/AuthStore';
import {HomeTabs} from './hometabs';
import AuthStack from './auth/AuthStack';
import {linking} from './linking';
import notifee, {AndroidImportance} from '@notifee/react-native';
import {useNotificationListener} from '../hooks/notifnav/notifnav';

export type RootStackParamList = {
  Home: {screen: 'Main'};
  Auth: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const accessToken = useAuthStore(state => state.accessToken);
  useNotificationListener();
  // console.log(useAuthStore.getState());
  // useEffect(() => {
  //   OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  //   OneSignal.initialize(Config.ONE_SIGNAL_ID as string);
  //   OneSignal.Notifications.requestPermission(false);
  //   OneSignal.login('testid');
  // }, []);

  // console.log(OneSignal.User.pushSubscription.getOptedInAsync());


  useEffect(() => {
    async function createChannel() {
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });
    }

    createChannel();
  });
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
