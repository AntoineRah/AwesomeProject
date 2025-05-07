import {PressableProps, StyleProp, ViewStyle} from 'react-native';

type CustomPressProps = {
  onPress: PressableProps['onPress'];
  text: string;
  style?: StyleProp<ViewStyle>;
};

export type {CustomPressProps};
