import notifee, {EventType} from '@notifee/react-native';
import {useEffect} from 'react';
import {Linking} from 'react-native';

function useNotificationListener() {
  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.PRESS) {
        const url = detail.notification?.data?.url;
        if (url) {
          Linking.openURL(url as string);
        }
      }
    });
  }, []);
}

export {useNotificationListener};
