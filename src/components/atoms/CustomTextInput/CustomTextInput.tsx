import {TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {getCustomTextInput} from './CustomTextInput.style';
import { useTheme } from '../../../hooks/theme';
import { fonts } from '../../../globalSyles/fontTheme';

const CustomTextInput = (props: TextInputProps) => {
  const {colors} = useTheme();
  const customTextInput = getCustomTextInput(colors);

  return <TextInput style={[customTextInput.input, props.style,fonts.regular]} {...props} />;
};

export {CustomTextInput};
