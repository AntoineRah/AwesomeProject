import {Pressable, Text} from 'react-native';
import React from 'react';
import {getPressableStyle, getPressedStyle} from './CustomPress.style';
import {CustomPressProps} from './CustomPress.type';
import {useTheme} from '../../../hooks/theme';

const CustomPress = ({onPress, text, style}: CustomPressProps) => {
  const {colors} = useTheme();
  const pressableStyle = getPressableStyle(colors);
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [getPressedStyle(pressed, colors), style]}>
      <Text style={pressableStyle.text}>{text}</Text>
    </Pressable>
  );
};

export {CustomPress};
