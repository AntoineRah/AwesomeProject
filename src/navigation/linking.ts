import {LinkingOptions} from '@react-navigation/native';
import {RootStackParamList} from './RootNavigator';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['awesomeproject://'],
  config: {
    screens: {
      Home: {
        screens: {
          Main: {
            screens: {
              Details: 'details/:id',
            },
          },
        },
      },
    },
  },
};
export {linking};
