import {Pressable, Text} from 'react-native';
import React from 'react';
import {getPressableStyle, pressableStyle} from './CustomPress.style';
import {CustomPressProps} from './CustomPress.type';

const CustomPress = ({onPress, text,style}: CustomPressProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>[ getPressableStyle(pressed),style]}>
      <Text style={pressableStyle.text}>{text}</Text>
    </Pressable>
  );
};

export {CustomPress};
